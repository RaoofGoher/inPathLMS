// Navbar.js
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "../assets/nav-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Cart from "../components/cart/Cart";
import { clearCart } from "../features/cart/cartSlice";
import Dropdown from "./explore/ExploreDropDown";
import icon from "../assets/language-icon.svg";
import { resetSubCategoryID } from "../features/searchCourse/ExploreSubCategoryID";
import { FaBell } from "react-icons/fa";
const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );
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
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);



  const navigate = useNavigate(); // Use the navigate hook to redirect to other pages
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    dispatch(clearCart());
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNotificationClick = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const handleNotificationItemClick = () => {
    setIsDropdownOpen1(false); // Close dropdown when notification is clicked
  };



  return (
    <nav className=" px-16 py-4 border-b-2 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* {/ Left Side: Logo /} */}
        <div className="flex items-center">
          <NavLink to={"/"}>
            <img src={Logo} className="mr-16 w-[7rem] " alt="Logo" />
          </NavLink>
          <NavLink
            className="mx-8 text-grayColor"
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <span className="hidden md:block"> Explore</span>
          </NavLink>
          {isDropdownOpen && (
            <Dropdown
              closeDropdown={() => {
                setIsDropdownOpen(false);
                // Reset the subCategoryID dispatch(resetSubCategoryID());
              }}
            />
          )}
          {/* {/ Search Bar on Larger Screens Only /} */}
          <SearchBar />
        </div>

        {/* {/ Right Side: Drawer Button and Login & Signup Buttons /} */}
        <div className="flex items-center">
          <button className="md:hidden text-blueColor" onClick={toggleDrawer}>
            {/* {/ Icon for toggling drawer (hamburger icon) /} */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isAuthenticated === true ? (
            <>

              <div
                className="relative flex justify-center items-center mr-4"
                onClick={handleNotificationClick} // Open or close dropdown when clicked
              >
                <FaBell size={20} className="text-blueColor cursor-pointer" />
                {/* Notification Badge */}
                <span className="absolute -top-2 -right-2 flex justify-center items-center w-4 h-4 bg-red-600 text-white text-xs rounded-full">
                  {notifications.length}
                </span>
              </div>

              {/* Notifications Dropdown */}
              {isDropdownOpen1 && (
                <div className="z-50 absolute top-16 right-0 bg-white shadow-xl rounded-lg w-80 p-4 border border-grayColor">
                  <h3 className="font-bold text-sm mb-2 text-blueColor">
                    Recent Notifications
                  </h3>
                  <ul className="space-y-2 ">
                    {notifications.map((notification) => (
                      <li
                        key={notification.id}
                        className={`flex items-center space-x-2 text-sm p-4 rounded-lg bg-white hover:bg-gray-200 cursor-pointer transition-all duration-200 ${notification.type === "student"
                          ? "text-blueColor"
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


              {/* {/ buttons after login /} */}
              <div className="hidden md:flex space-x-4">
                <NavLink
                  to={
                    role === "admin"
                      ? "/dashboard/admin"
                      : role === "instructor"
                        ? "/dashboard/teacherdashboard"
                        : role === "student"
                          ? "/dashboard/studentdashboard"
                          : "/login"
                  }
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blueColor/90 text-white rounded-md"
                      : " text-blueColor"
                  }
                  end
                >
                  <button className="px-4 py-2 border  border-grayColor rounded-md   transition">
                    Dashboard
                  </button>
                </NavLink>
                {role === "admin" ? "" : <Cart /> }
                
                <NavLink>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-blueColor  rounded-md text-blueColor hover:bg-blueColor hover:text-white"
                  >
                    Logout
                  </button>
                </NavLink>
              </div>{" "}
            </>
          ) : (
            <>
              {/* {/ buttons before login /} */}
              <div className="hidden md:flex space-x-4">
                <NavLink
                  end
                  to={"/teachoninpath"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blueColor text-white rounded-md"
                      : " text-grayColor"
                  }
                >
                  <button className="px-4 py-2 hover:bg-blueColor hover:text-white   rounded-md ">
                    Teach On INPATH
                  </button>
                </NavLink>

                <NavLink
                  end
                  to={"/studentsignup"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blueColor text-white rounded-md"
                      : " text-grayColor"
                  }
                >
                  <button className="px-4 py-2   hover:bg-blueColor hover:text-white rounded-md ">
                    Sign up
                  </button>
                </NavLink>
                <NavLink
                  end
                  to={"/login"}
                  className={({ isActive }) => (isActive ? " rounded-md" : "")}
                >
                  <button className="md:px-2 lg:px-4 py-2 border bg-blueColor border-blueColor rounded-md hover:text-blueColor hover:bg-white transition text-white">
                    Log in
                  </button>
                </NavLink>

                <div className="flex justify-center items-center">
                  <img width={40} src={icon} alt="language-icon" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* {/ Drawer Menu /} */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="absolute top-0 right-0 w-64 bg-blueColor h-full shadow-lg">
            <button
              className="p-4 text-white font-montserrat"
              onClick={toggleDrawer}
            >
              close
            </button>
            <div className="p-4">
              {/* {/ Search Bar in Drawer /} */}
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring w-full"
              />
            </div>
            <div className="flex flex-col p-4 space-y-2">
              <NavLink
                to="/teachoninpath"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "bg-grayColor rounded-md"
                    : "border-b-2 border-white"
                }
              >
                <button className="w-full text-left px-4 py-2 text-white hover:bg-grayColor ">
                  Teach On In Path
                </button>
              </NavLink>
              <NavLink
                to="/login"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "bg-grayColor rounded-md"
                    : "border-b-2 border-white"
                }
              >
                <button className="w-full text-left px-4 py-2 text-white hover:bg-grayColor">
                  Login
                </button>
              </NavLink>
              <NavLink
                to="/studentsignup"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "bg-grayColor rounded-md"
                    : "border-b-2 border-white"
                }
              >
                <button className="w-full text-left px-4 py-2 text-white hover:bg-grayColor">
                  Sign Up
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
