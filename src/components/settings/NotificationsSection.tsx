
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell } from "lucide-react";

export const NotificationsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </CardTitle>
        <CardDescription>Control your notification preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="studyReminders">Study Reminders</Label>
            <p className="text-sm text-gray-500">Get reminded to study daily</p>
          </div>
          <Switch id="studyReminders" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="progressUpdates">Progress Updates</Label>
            <p className="text-sm text-gray-500">Weekly progress summaries</p>
          </div>
          <Switch id="progressUpdates" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="newFeatures">New Feature Announcements</Label>
            <p className="text-sm text-gray-500">Updates about new app features</p>
          </div>
          <Switch id="newFeatures" />
        </div>
      </CardContent>
    </Card>
  );
};
