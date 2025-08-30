import { FaStar, FaCheckCircle, FaClock, FaBriefcase, FaMedal, FaCamera } from "react-icons/fa";

const ProfileSummaryCard = () => {
  return (
    <div className="w-full bg-white shadow-md rounded-xl p-5 flex flex-col items-center gap-4 ">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700 relative">
        R
        <button className="absolute bottom-0 right-0 bg-gray-100 p-1 rounded-full shadow-sm hover:bg-gray-200">
          <FaCamera />
        </button>
      </div>

      {/* Name & Location */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900">Ravi Kumar</h2>
        <p className="text-gray-600">Koramangala, Bangalore</p>
        <span className="inline-flex items-center gap-1 mt-1 text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
          <FaCheckCircle className="text-green-600" /> Verified
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        <FaStar />
        <span className="text-gray-800 font-medium">4.8</span>
        <span className="text-gray-500 text-sm">(157 reviews)</span>
      </div>
      <p className="text-gray-500 text-sm">Member since January 2023</p>

      <hr className="w-full border-gray-200" />

      {/* Stats */}
      <div className="w-full flex flex-col gap-3 text-gray-700 text-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <FaBriefcase className="text-gray-500" /> Jobs Completed
          </span>
          <span className="font-semibold">342</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <FaClock className="text-gray-500" /> Response Time
          </span>
          <span className="font-semibold">&lt; 1 hour</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <FaMedal className="text-gray-500" /> Success Rate
          </span>
          <span className="font-semibold">98%</span>
        </div>
      </div>

      <hr className="w-full border-gray-200" />

      {/* Skills */}
      <div className="w-full">
        <h3 className="text-md font-semibold text-gray-900 mb-2">Skills & Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {["Plumbing", "Pipe Installation", "Bathroom Renovation", "Emergency Repairs"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <hr className="w-full border-gray-200" />

      {/* Languages */}
      <div className="w-full">
        <h3 className="text-md font-semibold text-gray-900 mb-2">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {["English", "Hindi", "Kannada"].map((lang) => (
            <span
              key={lang}
              className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSummaryCard;
