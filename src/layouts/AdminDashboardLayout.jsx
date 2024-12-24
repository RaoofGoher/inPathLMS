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
  FaCheckCircle,
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import PrimaryNavbar from "../components/PrimaryNavbar";
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
     
     <PrimaryNavbar/>
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-20 h-full w-64 bg-blueColor text-white transform ${
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
              to="/dashboard/admin"
              className="flex group items-center py-3 px-4 text-lg rounded-lg font-semibold transition-colors duration-200 hover:bg-gray-300 hover:text-blueColor"
            >
              <FaTachometerAlt className="mr-2 group-hover:text-blueColor text-white" />
              Dashboard
            </Link>

            {/* Manage Teachers Link */}
            <Link
              to="/dashboard/admin/manage-teachers"
              className="flex group items-center py-3 px-4 text-lg rounded-lg font-semibold transition-colors duration-200 hover:bg-gray-300 hover:text-blueColor"
            >
              <FaUserTie className="mr-2 group-hover:text-blueColor text-white" />
              Manage Teachers
            </Link>

            {/* Manage Students Link */}
            <Link
              to="/dashboard/admin/manage-students"
              className="flex group items-center py-3 px-4 text-lg rounded-lg font-semibold transition-colors duration-200 hover:bg-gray-300 hover:text-blueColor"
            >
              <FaUsers className="mr-2 group-hover:text-blueColor text-white" />
              Manage Students
            </Link>

            {/* Analytics Link */}
            <Link
              to="/dashboard/admin/analytics"
              className="flex group items-center py-3 px-4 text-lg rounded-lg font-semibold transition-colors duration-200 hover:bg-gray-300 hover:text-blueColor"
            >
              <FaChartPie className="mr-2 group-hover:text-blueColor text-white" />
              Analytics
            </Link>
            <Link
              to={"/dashboard/admin/approval"}
              className="flex group items-center py-3 px-4 text-lg rounded-lg font-semibold transition-colors duration-200 hover:bg-gray-300 hover:text-blueColor"
            >
              {/* Update icon to FaCheckCircle for approval */}
              <FaCheckCircle className="mr-2 group-hover:text-blueColor text-white" />
              Approval
            </Link>

            {/* Logout Link */}
            <Link
              to={"/"}
              onClick={handleLogout}
              className="flex group items-center py-3 px-4 text-lg rounded-lg font-semibold transition-colors duration-200 hover:bg-gray-300 hover:text-blueColor"
            >
              <FaSignOutAlt className="mr-2 group-hover:text-blueColor text-white" />
              Logout
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-white p-6">
          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button onClick={toggleSidebar} className="text-dark1">
              {isSidebarOpen ? (
                <FaTimes size={24} className="text-white" />
              ) : (
                <FaBars size={24} />
              )}
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
