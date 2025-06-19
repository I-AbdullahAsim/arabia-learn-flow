
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const QuickActionsSection = () => {
  const [resetConfirmText, setResetConfirmText] = useState("");
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleResetDatabase = () => {
    if (resetConfirmText === "reset me") {
      toast({
        title: "Database Reset",
        description: "All data has been successfully reset.",
        variant: "destructive",
      });
      setIsResetDialogOpen(false);
      setResetConfirmText("");
    } else {
      toast({
        title: "Reset Failed",
        description: "Please type 'reset me' exactly to confirm.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full" variant="outline">
          Export Progress Data
        </Button>
        
        <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full" variant="destructive">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Reset History
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span>Reset Database</span>
              </DialogTitle>
              <DialogDescription>
                This action will permanently delete all your progress, sessions, and data. 
                This cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Label htmlFor="confirmText">
                Type "reset me" to confirm this action:
              </Label>
              <Input
                id="confirmText"
                value={resetConfirmText}
                onChange={(e) => setResetConfirmText(e.target.value)}
                placeholder="reset me"
                className="mt-2"
              />
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsResetDialogOpen(false);
                  setResetConfirmText("");
                }}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleResetDatabase}
                disabled={resetConfirmText !== "reset me"}
              >
                Reset Database
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Button className="w-full" variant="outline">
          Download Offline Content
        </Button>
      </CardContent>
    </Card>
  );
};
