import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const ProfileAboutMe = () => {
  return (
    <div className="flex flex-col p-6 w-2/4 bg-white rounded-xl shadow-md gap-6 my-5">
      {/* About Me Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">About Me</h2>
        <p className="text-gray-500">Professional background and experience</p>
        <p className="text-gray-500 mt-3">
          Experienced plumber with 8+ years of expertise in residential and commercial plumbing services.
          Specialized in emergency repairs, pipe installations, and bathroom renovations.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Contact & Verification */}
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" /> ravi.kumar@email.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-gray-500" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-500" /> Koramangala, Bangalore
            </li>
          </ul>
        </div>

        {/* Verification Status */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Verification Status</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Digilocker Verified
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Phone Number Verified
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Email Verified
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileAboutMe;
