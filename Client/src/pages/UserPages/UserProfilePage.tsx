import { useState } from "react";
import ProfileSummaryCard from "../../components/user/ProfileSummaryCard/ProfileSummaryCard";
import AccountSettings from "../../components/user/AccountSettings/AccountSettings";
import RecentJobs from "../../components/user/RecentJobsCard/RecentJobsCard";
import RecentReviewsCard from "../../components/user/RecentReviewsCard/RecentReviewsCard";
import { FaEdit, FaSave } from "react-icons/fa";

type Tab = "Overview" | "Reviews" | "Recent Jobs" | "Settings";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Settings");
  const [isEditing, setIsEditing] = useState(false);

  const tabs: Tab[] = ["Overview", "Reviews", "Recent Jobs", "Settings"];

  // Save handler
  const handleSave = (data: { fullName: string; email: string; phone: string }) => {
    console.log("✅ Saved Data:", data);
    alert("✅ Profile updated successfully!");
    setIsEditing(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <div className="p-4 bg-white rounded-xl shadow">Overview content goes here</div>;
      case "Reviews":
        return <RecentReviewsCard />;
      case "Recent Jobs":
        return <RecentJobs />;
      case "Settings":
        return (
          <AccountSettings
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onSave={handleSave}
          />
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 min-h-[calc(100vh-64px)]">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-1/3">
        <ProfileSummaryCard />
      </aside>

      {/* Right Content */}
      <section className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* Header Row */}
        <div className="flex justify-between items-center bg-white shadow-sm rounded-xl px-4 py-3">
          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-lg p-1 space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm rounded-md transition ${
                  activeTab === tab
                    ? "bg-white shadow font-medium"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Edit / Save Button */}
          {activeTab === "Settings" && (
            isEditing ? (
              <button
                className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition flex items-center gap-2"
                onClick={() => {
                  const saveEvent = new CustomEvent("saveProfile");
                  window.dispatchEvent(saveEvent); // 🔑 trigger save without hidden button
                }}
              >
                <FaSave />
                <span>Save Profile</span>
              </button>
            ) : (
              <button
                className="text-black border px-4 py-2 rounded-md hover:bg-gray-100 transition flex items-center gap-2"
                onClick={() => setIsEditing(true)}
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            )
          )}
        </div>

        {/* Main Content */}
        {renderContent()}
      </section>
    </div>
  );
};

export default UserProfilePage;
