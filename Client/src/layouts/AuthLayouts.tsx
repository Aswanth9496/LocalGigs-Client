import { FaArrowLeft } from "react-icons/fa";
import LayoutImage from "../assets/pic/community-illustration.webp";
import { Outlet, useNavigate } from "react-router-dom";
import React, { useCallback } from "react";

const AuthLayouts = () => {
  const navigate = useNavigate();

  // ✅ Memoized navigation handler
  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex h-screen">
      {/* Left side (fixed) */}
      <div className="hidden md:flex md:w-1/2 bg-[#2E8C74] items-center justify-center">
        <img
           src={LayoutImage}
           sizes="(max-width: 768px) 480px, (max-width: 1024px) 768px, 1024px"
           alt="Community illustration for LocalGigs"
           className="max-w-md w-full h-auto object-contain"
           loading="lazy"
         />
      </div>

      {/* Right side (scrollable) */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto bg-white flex flex-col px-6 sm:px-10 py-6">
        {/* Back Arrow */}
        <button
          aria-label="Go back to Home"
          className="flex items-center gap-2 text-gray-600 hover:text-[#4A9782] transition-colors"
          onClick={goHome}
        >
          <FaArrowLeft />
          <span className="text-sm font-medium">Back to Home</span>
        </button>

        {/* Form Card */}
        <div className="flex justify-center mt-6">
          <React.Suspense fallback={<div>Loading...</div>}>
             <Outlet />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

// ✅ Prevents unnecessary re-renders
export default React.memo(AuthLayouts);
