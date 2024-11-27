import React, { useState } from 'react';
import { FaBars, FaTimes, FaTachometerAlt, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
import PrimaryNavbar from '../components/PrimaryNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';


const DashboardLayout = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { token, role, isAuthenticated, user_id } = useSelector((state) => state.auth);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/'); // Redirect to the home page or login after logout
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
          className={`fixed top-0 left-0 z-40 h-full w-64 bg-primaryColor text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 md:relative md:translate-x-0 md:h-auto`}
          style={{ top: '-2px' }} // Adjust to match your navbar height
        >
          <div className="flex items-center justify-between p-4 md:hidden">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={toggleSidebar} className="text-white">
              <FaTimes size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-4">
            <Link to={role === 'admin'
              ? '/admin-dashboard'
              : role === 'instructor'
                ? '/dashboard/teacherdashboard'
                : role === 'student'
                  ? '/dashboard/studentdashboard'
                  : '/login'} className="flex items-center py-2 px-4 hover:bg-secondaryColor rounded">
              <FaTachometerAlt className="mr-2 text-secondaryColor" />
              Dashboard
            </Link>
            <Link to="/profile" className="flex items-center py-2 px-4 hover:bg-secondaryColor rounded">
              <FaUser className="mr-2 text-secondaryColor" />
              Profile
            </Link>
            <Link to="/settings" className="flex items-center py-2 px-4 hover:bg-secondaryColor rounded">
              <FaCog className="mr-2 text-secondaryColor" />
              Settings
            </Link>
            <Link className="flex items-center py-2 px-4 hover:bg-secondaryColor rounded" onClick={handleLogout}>
              <FaSignOutAlt className="mr-2 text-secondaryColor" />
              Logout
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-4 md:ml-5">
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


    </div>
  );
};

export default DashboardLayout;
