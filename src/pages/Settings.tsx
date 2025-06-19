
import { ProfileSection } from "@/components/settings/ProfileSection";
import { LearningPreferencesSection } from "@/components/settings/LearningPreferencesSection";
import { NotificationsSection } from "@/components/settings/NotificationsSection";
import { QuickActionsSection } from "@/components/settings/QuickActionsSection";
import { AppearanceSection } from "@/components/settings/AppearanceSection";
import { AccountActionsSection } from "@/components/settings/AccountActionsSection";

const Settings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Customize your Arabic learning experience.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ProfileSection />
          <LearningPreferencesSection />
          <NotificationsSection />
        </div>

        <div className="space-y-6">
          <QuickActionsSection />
          <AppearanceSection />
          <AccountActionsSection />
        </div>
      </div>
    </div>
  );
};

export default Settings;
