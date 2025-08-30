import { useState } from "react";

import SignInWithGoogleButton from "../../components/Common/Buttons/SignInwithGoogleButton";
import SignInWithAppleButton from "../../components/Common/Buttons/SignInWithAppleButton";
import UserSignUpForm from "../../components/public/auth/UserSignUpForm";
import CompanySignUpForm from "../../components/public/auth/CompanySignUpForm";
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const navigate = useNavigate()
  const [userType,setUserType] = useState('individual')


  return (
    <div className="w-full max-w-md mt-10">
      {/* Welcome text */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an Account</h2>
      <p className="text-gray-600 mb-8">
        Join us today and start exploring local services!
      </p>

       <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="userType"
            value="individual"
            checked={userType === "individual"}
            onChange={()=>setUserType("individual")}
            className="text-[#4A9782] focus:ring-[#4A9782]"
            
          />
          <span>Individual</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="userType"
            value="company"
            checked={userType === "company"}
            onChange={()=>setUserType("company")}
            className="text-[#4A9782] focus:ring-[#4A9782]"
          />
          <span>Company</span>
        </label>
      </div>
     {userType == 'individual'?<UserSignUpForm/>:<CompanySignUpForm/>}

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social login buttons */}
      <div className="space-y-3">
        <SignInWithGoogleButton />
        <SignInWithAppleButton />
      </div>

      {/* Already have account link */}
      <p className="text-sm text-gray-600 text-center mt-6">
        Already have an account?{" "}
        <a onClick={()=>navigate('/auth/login')} className="text-[#4A9782] hover:underline font-medium">
          Sign In
        </a>
      </p>
    </div>
  );
};

export default SignUpPage;
