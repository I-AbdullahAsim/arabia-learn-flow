
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Book } from "lucide-react";

export const LearningPreferencesSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Book className="h-5 w-5" />
          <span>Learning Preferences</span>
        </CardTitle>
        <CardDescription>Customize your study experience</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="dailyGoal">Daily Study Goal</Label>
            <p className="text-sm text-gray-500">Set your target study time per day</p>
          </div>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="30 min" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 min</SelectItem>
              <SelectItem value="30">30 min</SelectItem>
              <SelectItem value="60">1 hour</SelectItem>
              <SelectItem value="120">2 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="autoplay">Auto-play Pronunciation</Label>
            <p className="text-sm text-gray-500">Automatically play word pronunciation</p>
          </div>
          <Switch id="autoplay" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="showTransliteration">Show Transliteration</Label>
            <p className="text-sm text-gray-500">Display pronunciation guide</p>
          </div>
          <Switch id="showTransliteration" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="difficultWords">Focus on Difficult Words</Label>
            <p className="text-sm text-gray-500">Prioritize words you struggle with</p>
          </div>
          <Switch id="difficultWords" />
        </div>
      </CardContent>
    </Card>
  );
};
