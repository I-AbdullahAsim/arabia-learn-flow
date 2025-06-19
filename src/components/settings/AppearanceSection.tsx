
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AppearanceSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  // Initialize dark mode from localStorage and system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleDarkModeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    toast({
      title: checked ? "Dark Mode Enabled" : "Light Mode Enabled",
      description: "Theme preference has been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Palette className="h-5 w-5" />
          <span>Appearance</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="darkMode">Dark Mode</Label>
            <p className="text-sm text-gray-500">Toggle between light and dark theme</p>
          </div>
          <Switch 
            id="darkMode" 
            checked={isDarkMode}
            onCheckedChange={handleDarkModeToggle}
          />
        </div>
        
        <Separator />
        
        <div>
          <Label>Font Size</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label>Arabic Font</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Traditional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="traditional">Traditional</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="calligraphy">Calligraphy</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
