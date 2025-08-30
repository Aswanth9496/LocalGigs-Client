import { useState } from "react";
import FormInput from "../../Common/input/FormInput";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {

    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // TODO: Call your API to send reset link
    setSuccess("Password reset link has been sent to your email!");
  };

  return (
    <div className="w-full max-w-md mt-15">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
      <p className="text-gray-600 mb-8">
        Enter your email address and we’ll send you a link to reset your password.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          placeholder="Enter your email"
          icon="📧"
          value={email}
          error={error || success}
          onChange={setEmail}
        />

        <button
          type="submit"
          className="w-full py-3 bg-[#0f4235] text-white font-semibold rounded-lg hover:bg-[#0c3329] transition"
        >
          Send Reset Link
        </button>
      </form>
       {/* Link to go back to login page */}
      <p className="text-sm text-gray-600 text-center mt-6">
        Remember your password?{" "}
        <span
          onClick={() => navigate("/auth/login")}
          className="text-[#4A9782] hover:underline cursor-pointer font-medium"
        >
          Go back to Login
        </span>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
