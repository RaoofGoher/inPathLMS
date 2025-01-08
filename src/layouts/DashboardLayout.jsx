import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaFolderOpen,
  FaWrench,
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import PrimaryNavbar from "../components/PrimaryNavbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/"); // Redirect to the home page or login after logout
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Primary Navbar */}
      <div className="w-full">
        <PrimaryNavbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <aside
          className={`fixed top-0 left-0 z-0 h-full w-64 bg-blueColor text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 md:h-auto`}
          style={{ top: "-2px" }} // Adjust to match your navbar height
        >
          <div className="flex items-center justify-between p-4 md:hidden">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={toggleSidebar} className="text-white">
              <FaTimes size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-4">
            <Link
              to={
                role === "admin"
                  ? "/admin-dashboard"
                  : role === "instructor"
                  ? "/dashboard/teacherdashboard"
                  : role === "student"
                  ? "/dashboard/studentdashboard"
                  : "/login"
              }
              className="hover:text-blueColor flex items-center py-2 px-4 hover:bg-gray-300 rounded"
            >
              <FaTachometerAlt className="mr-2" />
              {role === "instructor" ? "Courses" : "Dashboard"}
            </Link>

            <Link
              to={
              role === "admin"
              ? "/adminprofile"
              : role === "instructor"
              ? "/dashboard/teacherprofile"
              : role === "student"
              ? "/dashboard/studentprofile"
              : "/login"
          }
              className=" hover:text-blueColor flex items-center py-2 px-4 hover:bg-gray-300 rounded"
            >
              <FaUser className="mr-2 " />
              Profile
            </Link>
            {/* <Link
              to="/settings"
              className="hover:text-blueColor flex items-center py-2 px-4 hover:bg-gray-300 rounded"
            >
              <FaCog className="mr-2 " />
              Settings
            </Link> */}
            {role === "instructor" && (
              <Link
                to="/dashboard/teacherdashboard/teacher-tools"
                className="hover:text-blueColor flex items-center py-2 px-4 hover:bg-gray-300 rounded"
              >
                <FaWrench className="mr-2" />
                Tools
              </Link>
            )}

            {role === "instructor" && (
              <Link
                to="/dashboard/teacherdashboard/teacher-resources"
                className="hover:text-blueColor flex items-center py-2 px-4 hover:bg-gray-300 rounded"
              >
                <FaFolderOpen className="mr-2" />
                Resources
              </Link>
            )}
            {/* 
            <Link
              className=" hover:text-blueColor flex items-center py-2 px-4 hover:bg-gray-300 rounded"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-2 " />
              Logout
            </Link> */}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-white p-4 md:ml-5">
          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button onClick={toggleSidebar} className="text-gray-800">
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

          {/* Content */}
          <Outlet />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
