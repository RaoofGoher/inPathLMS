import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useGetCoursesQuery } from '../features/explore/getall'; // Import the API hook
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  // Use the API query to get all courses
  const { data: courses, isLoading, isError } = useGetCoursesQuery();
  console.log("courses search", courses);

  // Filter courses based on search query
  const filteredCourses = courses?.flatMap(category => 
    category?.subcategories?.flatMap(subcategory => 
      subcategory?.courses?.filter(course => 
        course?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      ).map(course => ({
        ...course,
        subcategoryId: subcategory.id // Add the subcategory ID to the course object
      }))
    )
  );

  const handleCourseClick = (subcategoryId) => {
    navigate(`/exploredcourses/${subcategoryId}`)
  };

  return (
    <div className="relative">
      <FaSearch className="hidden md:block absolute top-1/2 left-3 w-4 h-4 text-gray-400 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search for anything"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
        className="hidden md:block pl-10 pr-4 py-2 bg-white text-black rounded-[20px] focus:outline-none focus:ring md:w-auto lg:w-[30vw]"
      />

      {/* Display search results if available */}
      {searchQuery && filteredCourses?.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border rounded-md shadow-md max-h-60 overflow-y-auto z-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleCourseClick(course.subcategoryId)} // Call handleCourseClick with subcategory ID
            >
              <p>{course.title}</p>
            </div>
          ))}
        </div>
      )}

      {/* Loading and error handling */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching courses</p>}
    </div>
  );
};

export default SearchBar;
