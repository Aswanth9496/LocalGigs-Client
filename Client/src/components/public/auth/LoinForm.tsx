import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";

import FormInput from "../../Common/input/FormInput";
import api from "../../../API/axios";
import { setCredentials } from "../../../features/auth/authSlice";

// Lazy load less critical buttons
const SignInWithGoogleButton = React.lazy(
  () => import("../../Common/Buttons/SignInwithGoogleButton")
);
const SignInWithAppleButton = React.lazy(
  () => import("../../Common/Buttons/SignInWithAppleButton")
);

const emailRegex = /\S+@\S+\.\S+/; // ✅ moved outside

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Errors, setErrors] = useState<{ emailError?: string; passwordError?: string }>({});
  const [role, setRole] = useState<"Individual" | "Company">("Individual");
  const [loading, setLoading] = useState(false);

  // ✅ memoized handlers
  const handleEmailChange = useCallback((val: string) => setEmail(val), []);
  const handlePasswordChange = useCallback((val: string) => setPassword(val), []);
  const togglePassword = useCallback(() => setShowPassword((prev) => !prev), []);

  const validateForm = useCallback(() => {
    const newErrors: typeof Errors = {};
    if (!emailRegex.test(Email)) newErrors.emailError = "Please enter a valid email address";
    if (Password.length < 8) newErrors.passwordError = "Password must be at least 8 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [Email, Password]);

  const handelSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      try {
        setLoading(true);
        const endpoint = role === "Individual" ? "/auth/userLogin" : "/auth/companyLogin";

        const response = await api.post(endpoint, {
          email: Email,
          password: Password,
        });

        const { accessToken, user } = response.data;
        dispatch(setCredentials({ user, accessToken }));
        navigate("/user/dashboard");
      } catch (error) {
        console.error(error);
        setErrors({ passwordError: "Invalid email or password" });
      } finally {
        setLoading(false);
      }
    },
    [Email, Password, role, dispatch, navigate, validateForm]
  );

  // ✅ pre-memoize role button classes
  const roleClasses = useMemo(
    () => ({
      individual:
        role === "Individual"
          ? "bg-[#0f4235] text-white"
          : "bg-gray-200 text-gray-700",
      company:
        role === "Company"
          ? "bg-[#0f4235] text-white"
          : "bg-gray-200 text-gray-700",
    }),
    [role]
  );

  return (
    <div className="w-full max-w-md mt-15">
      {/* Welcome text */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
      <p className="text-gray-600 mb-8">Sign in to access your dashboard.</p>

      {/* Form */}
      <form className="space-y-6" onSubmit={handelSubmit}>
        <div className="flex justify-center mb-6 gap-4">
          <button
            type="button"
            onClick={() => setRole("Individual")}
            className={`px-4 py-2 rounded ${roleClasses.individual}`}
          >
            Individual
          </button>
          <button
            type="button"
            onClick={() => setRole("Company")}
            className={`px-4 py-2 rounded ${roleClasses.company}`}
          >
            Company
          </button>
        </div>

        {/* Email */}
        <FormInput
          type="email"
          label="Email"
          placeholder="Enter your email"
          icon="📧"
          value={Email}
          error={Errors.emailError}
          onChange={handleEmailChange}
        />

        {/* Password */}
        <FormInput
          label="Password"
          placeholder="Enter your password"
          icon="🔒"
          type={showPassword ? "text" : "password"}
          value={Password}
          error={Errors.passwordError}
          onChange={handlePasswordChange}
          showPasswordToggle
          showPassword={showPassword}
          setShowPassword={togglePassword}
        />

        <button
          type="button"
          onClick={() => navigate("/auth/forgotPassword")}
          className="text-sm text-[#4A9782] hover:underline"
        >
          Forgot Password?
        </button>

        {/* Sign In button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 font-semibold rounded-lg transition ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-[#0f4235] text-white hover:bg-[#0c3329]"
          }`}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social login buttons - lazy load */}
      <React.Suspense fallback={<div>Loading options...</div>}>
        <div className="space-y-3">
          <SignInWithGoogleButton />
          <SignInWithAppleButton />
        </div>
      </React.Suspense>

      {/* Sign up link */}
      <p className="text-sm text-gray-600 text-center mt-6">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/auth/signUp")}
          className="text-[#4A9782] hover:underline font-medium cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default React.memo(LoginForm);
