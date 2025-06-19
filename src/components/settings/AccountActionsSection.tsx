
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AccountActionsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full">Save Changes</Button>
        <Button className="w-full" variant="outline">
          Change Password
        </Button>
        <Button className="w-full" variant="destructive">
          Delete Account
        </Button>
      </CardContent>
    </Card>
  );
};
