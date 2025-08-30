import HeroSectionButton from "./HeroSectionButton";
import HeroSectionFeaturesIcon from "./HeroSectionFeaturesIcon";
import { FaMapMarkerAlt, FaShieldAlt, FaStar } from "react-icons/fa";
import HeroImage from '../../../assets/pic/ChatGPT Image Aug 7, 2025, 07_40_09 PM.png';

function HeroSection() {
  return (
    <>
     <style>
        {`
          @keyframes bounce-small {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          .animate-bounce-small {
            animation: bounce-small 2s ease-in-out infinite;
          }
        `}
      </style>
    <div className="w-full pt-12 bg-gradient-to-r from-[#33749a] to-[#48D9A5] px-6 sm:px-10 md:px-20 py-16 md:py-24" >
      <div className="flex flex-col  md:flex-row items-center justify-between gap-12" >
        
        {/* Left Section */}
        <div className="text-white space-y-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-center md:text-left">
            Your Trusted<br />
            <span className="text-[#48D9A5]">Marketplace</span><br />
            for Local Services
          </h1>

          <p className="text-lg leading-relaxed text-white/90 text-center md:text-left">
            Whether you need a helping hand for a quick task or a steady stream of work, LocalGigs Connect brings people together in your neighborhood.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4">
            <HeroSectionButton text="Find Local Help" colour="bg-[#48D9A5]" width="w-56" />
            <HeroSectionButton text="Start Earning" colour="bg-[#156696]" width="w-56" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center md:justify-start text-sm text-white">
            <HeroSectionFeaturesIcon text="Hyperlocal Matching" icon={<FaMapMarkerAlt className="text-green-400" />} />
            <HeroSectionFeaturesIcon text="Verified Professionals" icon={<FaShieldAlt className="text-green-400" />} />
            <HeroSectionFeaturesIcon text="5-Star Reviews" icon={<FaStar className="text-green-400" />} />
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full flex justify-center md:justify-end animate-bounce-small">
          <div className=" bg-gradient-to-r from-[#33749a] to-[#4ec69a] p-3 sm:p-5 rounded-2xl w-[300px] sm:w-[400px] md:w-[500px]">
            <img
              src={HeroImage}
              alt="People working together"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default HeroSection;
