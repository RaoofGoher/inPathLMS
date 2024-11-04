import React from 'react'

const SearchBar = () => {
  return (
    <div>
       <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-4 py-2 bg-lightColor2 text-black rounded-md focus:outline-none focus:ring w-full md:w-auto"
          />
    </div>
  )
}

export default SearchBar
