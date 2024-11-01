// Navbar.js
import React from 'react';

const Navbar = ({ bgColor = '#ffffff', textColor = '#022763', logo = 'Logo' }) => {
  return (
    <nav style={{ backgroundColor: bgColor }} className="my-4 shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div style={{ color: textColor }}>
          <img src = {logo} className='w-[250px] h-[70px]' />
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input 
          style={{ backgroundColor:textColor}}
            type="text" 
            placeholder="Search..." 
            className="px-4 py-2  rounded-md focus:outline-none focus:ring"
          />
        </div>
        
        {/* Login & Signup Buttons */}
        <div className="flex space-x-4">
          <button style={{ color: textColor, borderColor: textColor }} className="px-4 py-2 border rounded-md hover:text-white transition">
            Login
          </button>
          <button style={{ backgroundColor: textColor, color:bgColor }} className="px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
