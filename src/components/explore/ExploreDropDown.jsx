import React, { useState } from "react";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useGetCoursesQuery } from "../../features/explore/getall";
import { useDispatch } from "react-redux";
import { setSubCategoryID } from "../../features/searchCourse/ExploreSubCategoryID";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ closeDropdown }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const dispatch = useDispatch();

  // Fetch data using RTK Query
  const { data: categories, isLoading, isError } = useGetCoursesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load categories.</div>;

  const topCategories = categories.slice(0, 10);

  const handleCategoryMouseEnter = (index) => {
    setActiveCategory(index);
    setActiveSubcategory(null); // Reset subcategory when switching categories
  };

  const handleSubcategoryMouseEnter = (subIndex) => {
    setActiveSubcategory(subIndex);
  };

  return (
    <div
      onMouseLeave={closeDropdown}
      className="absolute z-30 bg-white rounded-md top-20 shadow-lg"
    >
      <div className="flex">
        {/* Categories */}
        <ul className="w-[25vw] border-r border-gray-200">
          {topCategories.map((category, index) => (
            <li
              key={category.categoryId}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                activeCategory === index ? "bg-gray-100" : ""
              }`}
              onMouseEnter={() => handleCategoryMouseEnter(index)}
              onMouseLeave={() => setActiveSubcategory(null)}
              style={{
                wordBreak: "break-word",  // Ensures long words break onto the next line
                overflowWrap: "break-word", // Ensures long words wrap properly
                whiteSpace: "normal", // Allows text to wrap normally
              }}
            >
              <div className="flex justify-between items-center">
                {category.name}
                {category.subcategories.length > 0 && (
                  <FaChevronRight className="text-gray-500" />
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Subcategories */}
        {activeCategory !== null &&
          topCategories[activeCategory]?.subcategories.length > 0 && (
            <ul className="w-[25vw] border-r border-gray-200 break-words">
              {topCategories[activeCategory].subcategories.map(
                (subcategory, subIndex) => (
                  <li
                    key={subcategory.subcategoryId}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      activeSubcategory === subIndex ? "bg-gray-100" : ""
                    }`}
                    onMouseEnter={() => handleSubcategoryMouseEnter(subIndex)}
                    style={{
                      wordBreak: "break-word",  // Ensures long words break onto the next line
                      overflowWrap: "break-word", // Ensures long words wrap properly
                      whiteSpace: "normal", // Allows text to wrap normally
                    }}
                  >
                    <div className="flex justify-between items-center">
                      {subcategory.name}
                      {subcategory.courses?.length > 0 && (
                        <FaChevronRight className="text-gray-500" />
                      )}
                    </div>
                  </li>
                )
              )}
            </ul>
          )}

        {/* Courses */}
        {activeSubcategory !== null &&
          topCategories[activeCategory]?.subcategories[activeSubcategory]
            ?.courses.length > 0 && (
            <ul className="w-[25vw]">
              {topCategories[activeCategory].subcategories[activeSubcategory].courses.map((course) => (
                <li
                  key={course.courseId}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    dispatch(
                      setSubCategoryID(
                        topCategories[activeCategory].subcategories[activeSubcategory].id
                      )
                    );
                    navigate(
                      `/exploredcourses/${
                        topCategories[activeCategory].subcategories[activeSubcategory].id
                      }`
                    );
                  }}
                  style={{
                    wordBreak: "break-word",  // Ensures long words break onto the next line
                    overflowWrap: "break-word", // Ensures long words wrap properly
                    whiteSpace: "normal", // Allows text to wrap normally
                  }}
                >
                  {course.title}
                </li>
              ))}
            </ul>
          )}
      </div>

      {/* Close Button */}
      <button
        onClick={closeDropdown}
        className="right-2 text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Dropdown;
