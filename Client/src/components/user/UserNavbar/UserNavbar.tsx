import { useState } from "react";
import { FaSuitcase, FaSearch, FaBell, FaUser, FaBars } from "react-icons/fa";

const UserNavbar = () => {
  const [search, setSearch] = useState("");
  const [notificationCount, setNotificationCount] = useState(2); // example
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white py-4 px-6 md:px-10 shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-blue-600 p-3 rounded-lg text-white shadow-md">
          <FaSuitcase size={20} />
        </div>
          <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#48A3D9] to-[#48D9A5] bg-clip-text text-transparent tracking-tight">
          LocalGigs Connect
         </h2>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Search Bar (hidden on small screens) */}
        <div className="hidden sm:flex items-center gap-3 w-48 sm:w-72 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-blue-500 focus-within:shadow-md transition">
          <FaSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search jobs, services..."
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Notification */}
        <button className=" hidden sm:block relative bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition">
          <FaBell className="text-gray-600" size={18} />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User Avatar */}
        <div className="hidden sm:block bg-gray-300 rounded-full p-3 hover:bg-gray-400 transition cursor-pointer">
          <FaUser className="text-gray-700" size={18} />
        </div>

        {/* Mobile Menu Icon (hidden on md+) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
        >
          <FaBars className="text-gray-600" size={18} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-6 w-56 bg-white border rounded-lg shadow-md flex flex-col gap-4 p-4 sm:hidden">
          <div className="flex items-center gap-2 border rounded-full px-3 py-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs, services..."
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FaBell /> Notifications
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FaUser /> Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserNavbar;
