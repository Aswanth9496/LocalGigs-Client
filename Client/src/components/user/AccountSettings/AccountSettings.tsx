import { useState } from "react";

interface AccountSettingsProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (data: { fullName: string; email: string; phone: string }) => void;
}



const AccountSettings = ({ isEditing, setIsEditing, onSave }: AccountSettingsProps) => {
  const [formData, setFormData] = useState({
    fullName: "Ravi Kumar",
    email: "ravi.kumar@email.com",
    phone: "+91 98765 43210",
  });

  const [tempData, setTempData] = useState(formData);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
  };

  // Cancel editing → reset values
  const handleCancel = () => {
    setTempData(formData);
    setIsEditing(false);
  };

  // Expose save to parent
  const handleSave = () => {
    setFormData(tempData);
    onSave(tempData); 
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Account Settings</h2>
          <p className="text-gray-500 mt-1">
            Manage your account preferences and security
          </p>
        </div>

        {/* Only show Cancel when editing */}
        {isEditing && (
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Account Info */}
      <div className="mt-6 space-y-4">
        {["fullName", "email", "phone"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              disabled={!isEditing}
              value={isEditing ? tempData[field as keyof typeof tempData] : formData[field as keyof typeof formData]}
              onChange={handleChange}
              className={`mt-1 block w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                !isEditing ?"border-gray-300" :"border-green-500 border-2"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Password & Security */}
      <div className="mt-8">
        <h3 className="text-lg font-medium">Password & Security</h3>
        <div className="mt-3 flex gap-3">
          <button
            className="px-4 py-2 border rounded-lg disabled:text-gray-700 hover:bg-gray-100 transition  border-black text-green-500"
            disabled={!isEditing}
          >
            Change Password
          </button>
          <button
            className="px-4 py-2 border rounded-lg disabled:text-gray-700 hover:bg-gray-100 transition text-green-400 border-black"
            disabled={!isEditing}
          >
            Two-Factor Authentication
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-8">
        <h3 className="text-lg font-medium">Notifications</h3>
        <div className="mt-3 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Job Notifications</span>
            <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
              Configure
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Email Updates</span>
            <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
              Configure
            </button>
          </div>
        </div>
      </div>

      {/* Hidden Save Triggered by Parent */}
      {isEditing && (
        <button
          onClick={handleSave}
          className="hidden"
          id="account-settings-save"
        />
      )}
    </div>
  );
};

export default AccountSettings;
