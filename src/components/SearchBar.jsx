import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="relative">
      <FaSearch className="absolute top-1/2 left-3 w-4 h-4 text-gray-400 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search for anything"
        className="hidden md:block pl-10 pr-4 py-2 bg-gray-200 text-gray-200 rounded-[20px] focus:outline-none focus:ring md:w-auto lg:w-[30vw]"
      />
    </div>
  );
};

export default SearchBar;

