import { useState } from "react";
import { AxiosError } from "axios";
import FormInput from "../../Common/input/FormInput";
import api from "../../../API/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../features/auth/authSlice";

const UserSignUpForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    fullNameError?: string;
    emailError?: string;
    passwordError?: string;
    confirmPasswordError?: string;
  }>({});

  
   const dispatch = useDispatch();

  // Frontend validation
  const validate = () => {
    const newErrors: typeof errors = {};
    if (!fullName.trim()) newErrors.fullNameError = "Full name is required";
    if (!/\S+@\S+\.\S+/.test(email))
      newErrors.emailError = "Please enter a valid email address";
    if (password.length < 8)
      newErrors.passwordError = "Password must be at least 8 characters";
    if (password !== confirmPassword)
      newErrors.confirmPasswordError = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await api.post("/auth/userSignUp", {
        userName: fullName,
        email,
        password,
      });

       const {accessToken,user} = response.data;
       dispatch(setCredentials({user,accessToken}))
     
      setLoading(false);

      // Redirect to login or dashboard after signup
      navigate("/user/dashboard");
    } catch (err: unknown) {

      setLoading(false);
      const error = err as AxiosError<{ message: string }>;

      if (error.response?.status === 400) {
        const message = error.response.data.message;

        if (message.includes("Email")) {
          setErrors((prev) => ({ ...prev, emailError: message }));
        } else if (message.includes("Password")) {
          setErrors((prev) => ({ ...prev, passwordError: message }));
        } else {
          console.log("Other signup error:", message);
        }
      } else {
        console.log("Unexpected error:", error);
      }
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput
        label="Full Name"
        placeholder="Enter your full name"
        icon="👤"
        value={fullName}
        error={errors.fullNameError}
        onChange={(val) => {
          setFullName(val);
          setErrors((prev) => ({ ...prev, fullNameError: undefined }));
        }}
      />

      <FormInput
        label="Email"
        placeholder="Enter your email"
        icon="📧"
        value={email}
        error={errors.emailError}
        onChange={(val) => {
          setEmail(val);
          setErrors((prev) => ({ ...prev, emailError: undefined }));
        }}
      />

      <FormInput
        label="Password"
        placeholder="Enter your password"
        icon="🔒"
        type={showPassword ? "text" : "password"}
        value={password}
        error={errors.passwordError}
        onChange={(val) => {
          setPassword(val);
          setErrors((prev) => ({ ...prev, passwordError: undefined }));
        }}
        showPasswordToggle
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <FormInput
        label="Confirm Password"
        placeholder="Confirm your password"
        icon="🔑"
        type={showPassword ? "text" : "password"}
        value={confirmPassword}
        error={errors.confirmPasswordError}
        onChange={(val) => {
          setConfirmPassword(val);
          setErrors((prev) => ({ ...prev, confirmPasswordError: undefined }));
        }}
        showPasswordToggle
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <button
        type="submit"
        className={`w-full py-3 text-white font-semibold rounded-lg transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#0f4235] hover:bg-[#0c3329]"
        }`}
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default UserSignUpForm;
