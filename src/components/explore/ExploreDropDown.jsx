import React, { useState } from "react";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useGetCoursesQuery } from "../../features/explore/getall";

const Dropdown = ({ closeDropdown }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // Fetch data using RTK Query
  const { data: categories, isLoading, isError } = useGetCoursesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load categories.</div>;

  const topCategories = categories.slice(0, 10);

  return (
    <div
      onMouseLeave={closeDropdown}
      className="absolute z-10 bg-white rounded-md top-20 w-[70vw] max-w-[250px] shadow-md  shadow-grayColor"
    >
      <div className="w-full">
        <ul className="flex flex-col justify-center items-start py-2   ">
          {/* Render categories */}
          {topCategories.map((category, index) => (
            <li
              onMouseEnter={() => setActiveCategory(index)} // Hover effect for categories
              onMouseLeave={() => setActiveCategory(null)} // Reset on leave
              key={category.categoryId}
              className="relative group w-full rounded-md"
            >
              <span className=" px-4 gap-24  py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
                {category.name}
                {category.subcategories.length > 0 && (
                  <FaChevronRight className="ml-2" />
                )}
              </span>

              {/* Subcategories dropdown */}
              {activeCategory === index &&
                category.subcategories.length > 0 && (
                  <ul
                    className="absolute w-[200px] -top-4 left-56 ml-6 bg-white  rounded-md p-2 z-10"
                    style={{ transform: "translateY(10px)" }} // Positioned below the category
                  >
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li
                        onMouseEnter={() => setActiveSubcategory(subIndex)} // Hover effect for subcategories
                        onMouseLeave={() => setActiveSubcategory(null)} // Reset subcategory on leave
                        key={subcategory.subcategoryId}
                        className="relative group"
                      >
                        {/* Move hover effect to span */}
                        <span className=" px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
                          {subcategory.name}
                          {subcategory.courses?.length > 0 && (
                            <FaChevronRight className="ml-2" />
                          )}
                        </span>

                        {/* Courses dropdown */}
                        {activeSubcategory === subIndex &&
                          subcategory.courses?.length > 0 && (
                            <ul
                              className="absolute -top-4 left-44 ml-2 bg-white  rounded-md p-2 w-48"
                              style={{ transform: "translateY(10px)" }} // Positioned below the subcategory
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
