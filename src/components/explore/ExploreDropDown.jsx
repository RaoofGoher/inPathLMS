import React, { useState } from "react";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useGetCoursesQuery } from "../../features/explore/getall";

const Dropdown = ({ closeDropdown }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null); // State to track the active subcategory

  // Fetch data using RTK Query
  const { data: categories, isLoading, isError } = useGetCoursesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load categories.</div>;

  return (
    <div onMouseLeave={closeDropdown} style={{ zIndex: 10 }} className="absolute bg-white shadow-lg rounded-md mt-[400px] ml-[100px] w-[70vw] max-w-[400px] p-4 h-[50vh]" >
    <div
      
      
       // Close the dropdown when mouse leaves
    >
      <ul className="flex flex-col space-y-2">
        {categories.map((category, index) => (
          <li
            key={category.categoryId}
            className="relative group"
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => {
              setActiveCategory(null);
              setActiveSubcategory(null); // Reset subcategory on category leave
            }}
          >
            <span className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center ">
              {category.name}
              {category.subcategories.length > 0 && (
                <FaChevronRight className="ml-2" />
              )}
            </span>
            {activeCategory === index && category.subcategories.length > 0 && (
              <ul
                className="absolute top-0 -left-1 ml-2 bg-white shadow-lg rounded-md p-2 z-50"
                
              >
                {category.subcategories.map((subcategory, subIndex) => (
                  <li
                    key={subcategory.subcategoryId}
                    className="relative group"
                    onMouseEnter={() => setActiveSubcategory(subIndex)}
                    onMouseLeave={() => setActiveSubcategory(null)}
                  >
                    <span className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
                      {subcategory.name}
                      {subcategory.courses?.length > 0 && (
                        <FaChevronRight className="ml-2" />
                      )}
                    </span>
                    {activeSubcategory === subIndex &&
                      subcategory.courses?.length > 0 && (
                        <ul
                          className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-md p-2 w-48"
                        >
                          {subcategory.courses.map((course) => (
                            <li
                              key={course.courseId}
                              className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                              {course.title}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={closeDropdown}
        className="top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>
    </div>
    </div>
  );
};

export default Dropdown;
