import { useCallback, useState } from "react";

import FormInput from "../../Common/input/FormInput";

interface FormData {
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
  website: string;
  address: string;
}

const CompanySignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    address: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange =useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  },[]);

  const validate = (): Partial<Record<keyof FormData, string>> => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.website.trim()) newErrors.website = "Website is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
   
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput
        label="Company Name"
        placeholder="Enter your company name"
        icon="🏢"
        value={formData.companyName}
        error={errors.companyName}
        onChange={(val) => handleChange("companyName", val)}
      />

      <FormInput
        label="Email"
        placeholder="Enter your email"
        icon="📧"
        value={formData.email}
        error={errors.email}
        onChange={(val) => handleChange("email", val)}
      />

      <FormInput
        label="Password"
        placeholder="Enter your password"
        icon="🔒"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        error={errors.password}
        onChange={(val) => handleChange("password", val)}
        showPasswordToggle
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <FormInput
        label="Confirm Password"
        placeholder="Confirm your password"
        icon="🔑"
        type={showPassword ? "text" : "password"}
        value={formData.confirmPassword}
        error={errors.confirmPassword}
        onChange={(val) => handleChange("confirmPassword", val)}
        showPasswordToggle
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <FormInput
        label="Website"
        placeholder="Enter your website URL"
        icon="🌐"
        value={formData.website}
        error={errors.website}
        onChange={(val) => handleChange("website", val)}
      />

      <FormInput
        label="Address"
        placeholder="Enter your company address"
        icon="📍"
        value={formData.address}
        error={errors.address}
        onChange={(val) => handleChange("address", val)}
      />

      <button
        type="submit"
        className="w-full py-3 bg-[#0f4235] text-white font-semibold rounded-lg hover:bg-[#0c3329] transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default CompanySignUpForm;
