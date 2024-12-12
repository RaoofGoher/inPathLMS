import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUserTie,
  FaUsers,
  FaChartPie,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
// import Logo from "../assets/logos/logo.png";

const AdminDashboardLayout = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New student request from Jane Doe.",
      type: "student",
      name: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      message: "Teacher Mark Johnson submitted new course materials.",
      type: "teacher",
      name: "Mark Johnson",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      message: "New student enrollment from Alex Smith.",
      type: "student",
      name: "Alex Smith",
      avatar: "https://via.placeholder.com/40",
    },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    // Redirect logic if needed
  };

  const handleNotificationClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNotificationItemClick = () => {
    setIsDropdownOpen(false); // Close dropdown when notification is clicked
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="w-full md:px-14 bg-primaryColor text-white flex items-center justify-between py-4 px-6 relative">
        {/* <h1 className="text-2xl font-bold">Admin Dashboard</h1> */}
        {/* <div className="bg-gradient-to-br from-lightColor2 to-secondaryColor p-2 rounded-lg">
          <img src={Logo} alt="Logo" className="h-10 w-15" />
        </div> */}

        {/* Notification Button with Badge */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <div
            className="relative flex justify-center items-center"
            onClick={handleNotificationClick} // Open or close dropdown when clicked
          >
            <FaBell size={20} className="text-white cursor-pointer" />
            {/* Notification Badge */}
            <span className="absolute -top-2 -right-2 flex justify-center items-center w-4 h-4 bg-red-600 text-white text-xs rounded-full">
              {notifications.length}
            </span>
          </div>

          {/* Admin Profile Image */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40" // Admin's profile image (replace with dynamic URL)
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Notifications Dropdown */}
          {isDropdownOpen && (
            <div className="z-50 absolute top-16 right-0 bg-white shadow-xl rounded-lg w-80 p-4 border border-gray-200">
              <h3 className="font-bold text-sm mb-2 text-primaryColor">
                Recent Notifications
              </h3>
              <ul className="space-y-2 ">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`flex items-center space-x-2 text-sm p-4 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 ${
                      notification.type === "student"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                    onClick={handleNotificationItemClick} // Close dropdown on click
                  >
                    <img
                      src={notification.avatar} // User's avatar image
                      alt={notification.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{notification.name}</p>{" "}
                      {/* User Name */}
                      <p>{notification.message}</p> {/* Notification Message */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-40 h-full w-64 bg-secondaryColor text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0`}
        >
          <div className="flex items-center justify-between p-4 md:hidden">
            {/* <div className="bg-gradient-to-br from-lightColor2 to-primaryColor p-2 rounded-lg">
              <img src={Logo} alt="Logo" className="h-12 w-15" />
            </div> */}
            <button onClick={toggleSidebar} className="text-white">
              <FaTimes size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-2">
            {/* Dashboard Link */}
            <Link
              to="/admin/dashboard"
              className="flex items-center py-3 px-4 text-lg rounded-lg transition-colors duration-200 hover:bg-lightColor1"
            >
              <FaTachometerAlt className="mr-2 text-white" />
              Dashboard
            </Link>

            {/* Manage Teachers Link */}
            <Link
              to="/admin/manage-teachers"
              className="flex items-center py-3 px-4 text-lg rounded-lg transition-colors duration-200 hover:bg-primaryColor"
            >
              <FaUserTie className="mr-2 text-white" />
              Manage Teachers
            </Link>

            {/* Manage Students Link */}
            <Link
              to="/admin/manage-students"
              className="flex items-center py-3 px-4 text-lg rounded-lg transition-colors duration-200 hover:bg-lightColor1"
            >
              <FaUsers className="mr-2 text-white" />
              Manage Students
            </Link>

            {/* Analytics Link */}
            <Link
              to="/admin/analytics"
              className="flex items-center py-3 px-4 text-lg rounded-lg transition-colors duration-200 hover:bg-primaryColor"
            >
              <FaChartPie className="mr-2 text-white" />
              Analytics
            </Link>

            {/* Logout Link */}
            <Link
            to={'/'}
              onClick={handleLogout}
              className="flex items-center py-3 px-4 text-lg rounded-lg transition-colors duration-200 hover:bg-dark2"
            >
              <FaSignOutAlt className="mr-2 text-white" />
              Logout
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button onClick={toggleSidebar} className="text-dark1">
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            {/* <h1 className="text-xl font-bold">Admin Dashboard</h1> */}
          </div>

          {/* Main Content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
