
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

function LandingPageNavBar() {

  const navigate = useNavigate()
  
  return (
    <nav className="fixed top-0 left-0  w-full flex items-center justify-between p-4 bg-[#D6E4F0]/97  px-16 shadow-md z-50">
      <div className="flex items-center space-x-2 ">
        {/* Logo Section */}
        <div className="flex items-center justify-center text-white font-bold text-lg w-8 h-8 bg-gradient-to-r from-[#48A3D9] to-[#48D9A5] rounded-xl">
          LG
        </div>
        <span className="text-2xl text-gray-800 font-mono font-black">
          LocalGigs Connect
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <NavLink text="How It Works" path="#" />
        <NavLink text="Features" path="#" />
        <NavLink text="For Seekers" path="#" />
        <NavLink text="For Providers" path="#" />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button  onClick={() => navigate("/auth/Login")} className="font-semibold py-1.5 px-2 rounded-lg hover:bg-orange-500 hover:text-white">
          Sign In
        </button>
        <button onClick={() => navigate("/auth/Signup")} className="bg-gradient-to-r from-[#48A3D9] to-[#48D9A5] text-white font-semibold py-1.5 px-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default LandingPageNavBar;
