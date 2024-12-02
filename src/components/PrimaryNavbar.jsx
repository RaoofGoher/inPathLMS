// Navbar.js
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "../assets/logos/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate(); // Use the navigate hook to redirect to other pages
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="my-4 shadow-md px-16 py-4 bg-primaryColor">
      <div className="container mx-auto flex items-center justify-between">
        {/* {/ Left Side: Logo /} */}
        <div className="flex items-center flex-1">
          <NavLink to={"/"}>
            <img src={Logo} className="mr-16 w-[4rem]" alt="Logo" />
          </NavLink>
          {/* {/ Search Bar on Larger Screens Only /} */}
          <SearchBar />
        </div>

        {/* {/ Right Side: Drawer Button and Login & Signup Buttons /} */}
        <div className="flex items-center">
          <button className="md:hidden text-white" onClick={toggleDrawer}>
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
              {/* {/ buttons after login /} */}
              <div className="hidden md:flex space-x-4">
                <NavLink
                  to={
                    role === "admin"
                      ? "/admin-dashboard"
                      : role === "instructor"
                      ? "/dashboard/teacherdashboard"
                      : role === "student"
                      ? "/dashboard/studentdashboard"
                      : "/login"
                  }
                  className={({ isActive }) =>
                    isActive ? "bg-lightColor1 rounded-md" : ""
                  }
                  end
                >
                  <button className="px-4 py-2 border text-white border-secondaryColor rounded-md hover:text-secondaryColor transition text-secondaryColor">
                    Dashboard
                  </button>
                </NavLink>
                <NavLink>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-secondaryColor hover:text-secondaryColor rounded-md text-white"
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
                  to={"/teachersignup"}
                  className={({ isActive }) =>
                    isActive ? "bg-lightColor1 rounded-md" : ""
                  }
                >
                  <button className="px-4 py-2 hover:text-secondaryColor rounded-md text-white">
                    Teach On In Path
                  </button>
                </NavLink>
                <NavLink
                  end
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive ? "bg-lightColor1 rounded-md" : ""
                  }
                >
                  <button className="px-4 py-2 border text-white border-secondaryColor rounded-md hover:text-secondaryColor transition text-secondaryColor">
                    Login
                  </button>
                </NavLink>
                <NavLink
                  end
                  to={"/studentsignup"}
                  className={({ isActive }) =>
                    isActive ? "bg-lightColor1 rounded-md" : ""
                  }
                >
                  <button className="px-4 py-2 border border-secondaryColor hover:text-secondaryColor rounded-md text-white">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>

      {/* {/ Drawer Menu /} */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="absolute top-0 right-0 w-64 bg-primaryColor h-full shadow-lg">
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
                to="/teachersignup"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "bg-lightColor1"
                    : "border-b-2 border-secondaryColor"
                }
              >
                <button className="w-full text-left px-4 py-2 text-white hover:text-secondaryColor">
                  Teach On In Path
                </button>
              </NavLink>
              <NavLink
                to="/login"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "bg-lightColor1"
                    : "border-b-2 border-secondaryColor"
                }
              >
                <button className="w-full text-left px-4 py-2 text-white hover:text-secondaryColor">
                  Login
                </button>
              </NavLink>
              <NavLink
                to="/studentsignup"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "bg-lightColor1"
                    : "border-b-2 border-secondaryColor"
                }
              >
                <button className="w-full text-left px-4 py-2 text-white hover:text-secondaryColor">
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
