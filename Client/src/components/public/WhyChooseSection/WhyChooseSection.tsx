import WhyChooseSectionCard from "./WhyChooseSectionCard";
import { FaClock, FaMapMarkerAlt, FaShieldAlt, FaBriefcase, FaCalendarAlt, FaMoneyCheckAlt, FaDollarSign, FaStarHalfAlt } from "react-icons/fa";

function WhyChooseSection() {
  return (
    <div className="w-full py-16 px-6 bg-[#f9fafb]">
      <div className="text-center mb-18">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Why Choose LocalGigs Connect?
        </h1>
        <p className="text-gray-600 text-xl">
          Simple, secure, and smart solutions for both service seekers and providers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Need a Helping Hand? Get It Done!
          </h2>
          <p className="text-gray-600 mb-6">
            Tired of endless searching for reliable professionals? We bring verified workers to your doorstep.
          </p>
          <div className="flex flex-col space-y-6">
            <WhyChooseSectionCard
              icon={<FaClock className="text-blue-500 text-xl" />}
              title="On-Demand & Immediate"
              description="Find available workers for urgent tasks, right when you need them. No more waiting!"
            />
            <WhyChooseSectionCard
              icon={<FaMapMarkerAlt className="text-blue-500 text-xl" />}
              title="Hyperlocal Matching"
              description="Connect with skilled individuals in your immediate vicinity, reducing travel time and costs."
            />
            <WhyChooseSectionCard
              icon={<FaShieldAlt className="text-blue-500 text-xl" />}
              title="Verified & Trusted"
              description="Workers have identity and credentials verified through Digilocker. See genuine ratings and reviews."
            />
            <WhyChooseSectionCard
              icon={<FaDollarSign className="text-blue-500 text-xl" />}
              title="Transparent Pricing"
              description="Get clear quotes or negotiate directly with service providers, avoiding hidden charges."
            />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Find Your Gig! Unlock Local Opportunities
          </h2>
          <p className="text-gray-600 mb-6">
            Connect to consistent, local work that fits your schedule and skills perfectly.
          </p>
          <div className="flex flex-col space-y-6">
            <WhyChooseSectionCard
              icon={<FaBriefcase className="text-green-500 text-xl" />}
              title="Consistent Local Work"
              description="Get notified of jobs in your area that match your unique skills and availability."
            />
            <WhyChooseSectionCard
              icon={<FaCalendarAlt className="text-green-500 text-xl" />}
              title="Flexible Schedule"
              description="You're in control. Choose when and where you want to work—perfect for students and part-timers."
            />
            <WhyChooseSectionCard
              icon={<FaMoneyCheckAlt className="text-green-500 text-xl" />}
              title="Fair & Secure Payments"
              description="Receive timely, secure payments through trusted channels. No more cash hassles."
            />
            <WhyChooseSectionCard
              icon={<FaStarHalfAlt className="text-green-500 text-xl" />}
              title="Build Your Reputation"
              description="Grow your profile with positive ratings and reviews, leading to more opportunities and higher pay."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseSection;
