import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TemporaryNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center mt-4">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          This is temporary navbar for reviewng components
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Links & Button (Visible on larger screens) */}
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} space-x-4`}>
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-700 rounded" activeClassName="bg-gray-700">
            Home
          </NavLink>
          <NavLink to="/dashboard/studentdashboard" className="block px-4 py-2 hover:bg-gray-700 rounded" activeClassName="bg-gray-700">
            Student Dashobard
          </NavLink>
          <NavLink to="/dashboard/teacherdashboard" className="block px-4 py-2 hover:bg-gray-700 rounded" activeClassName="bg-gray-700">
            Teacher Dashboard
          </NavLink>
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-700 rounded" activeClassName="bg-gray-700">
            Contact
          </NavLink>
        </div>

        {/* Button */}
       
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-700" activeClassName="bg-gray-700">
            Home
          </NavLink>
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-700" activeClassName="bg-gray-700">
            Services
          </NavLink>
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-700" activeClassName="bg-gray-700">
            About
          </NavLink>
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-700" activeClassName="bg-gray-700">
            Contact
          </NavLink>
          
        </div>
      )}
    </nav>
  );
};

export default TemporaryNavbar;
