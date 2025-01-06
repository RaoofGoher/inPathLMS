import React, { useState } from "react";
import { useGetCoursesQuery } from "../features/explore/getall";
import { useNavigate } from "react-router-dom";

const CourseOfferings = () => {
  const { data: categories, isLoading, isError } = useGetCoursesQuery();
  const [visibleCount, setVisibleCount] = useState(16); // Initially showing 16 categories
  const [activeCategory, setActiveCategory] = useState(null); // Active category for click
  const [activeSubcategory, setActiveSubcategory] = useState(null); // Active subcategory for click
  const navigate = useNavigate(); // Hook to navigate

  const topCategories = categories?.slice(0, 10); // Display top 10 categories

  // Handler to show more categories
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 16); // Increase the count by 16
  };

  // Loading and Error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading courses.</div>;

  // Dynamic text for the "More" button
  const moreButtonText =
    visibleCount < categories?.length ? "More" : "No More Categories";

  // Handler for category click
  const handleCategoryClick = (index) => {
    // Toggle the active category, close any previously open subcategory
    setActiveCategory(index === activeCategory ? null : index); // Toggle active category
    setActiveSubcategory(null); // Close the previous subcategory if any
  };

  // Handler for subcategory click
  const handleSubcategoryClick = (subIndex) => {
    // Toggle the active subcategory, close it if it's already open
    setActiveSubcategory(subIndex === activeSubcategory ? null : subIndex); // Toggle active subcategory
  };

  // Navigate to the course page or subcategory-related courses
  const handleCourseClick = (subcategoryId) => {
    navigate(`/exploredcourses/subcategory/${subcategoryId}`);
  };

  return (
    <section className="bg-white px-16 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blueColor underline">
          Course Offerings
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-12">
        {/* Categories */}
        {categories?.slice(0, visibleCount).map((category, index) => (
          <div key={category.id} className="relative">
            <button
              onClick={() => handleCategoryClick(index)} // Click to toggle category
              className="w-full h-16 text-xs sm:text-lg font-bold hover:bg-blueColor hover:text-white border-2 hover:border-white hover:ring-2 ring-blueColor border-blueColor text-blueColor px-4 py-2 rounded-xl flex items-center justify-center overflow-hidden text-ellipsis"
            >
              {category.name}
            </button>

            {/* Subcategories (show on category click) */}
            {activeCategory === index && category.subcategories?.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 rounded-lg mt-1">
                <div className="flex flex-col">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <button
                      key={subcategory.id}
                      onClick={() => handleSubcategoryClick(subIndex)} // Click to toggle subcategory
                      className="py-2 px-4 text-sm text-blueColor hover:bg-blueColor hover:text-white border-b-2 border-blueColor last:border-0"
                    >
                      {subcategory.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Courses for Subcategory (show on subcategory click) */}
            {activeSubcategory !== null &&
              category.subcategories[activeSubcategory]?.courses?.length >
                0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 rounded-lg mt-1">
                  <ul>
                    {category.subcategories[activeSubcategory].courses.map(
                      (course) => (
                        <li
                          key={course.id}
                          onClick={() => {
                            navigate(
                              `/exploredcourses/${category.subcategories[activeSubcategory].id}`
                            );
                          }}
                          className="py-2 px-4 text-sm bg-grayColor text-white  hover:bg-blueColor hover:text-white border-b-2 cursor-pointer border-white last:border-0"
                        >
                          {course.title}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>

      {/* "More" button with dynamic text */}
      {visibleCount < categories?.length && (
        <button
          onClick={handleShowMore}
          className="w-full h-16 text-lg sm:text-2xl lg:text-3xl hover:bg-blueColor/90 bg-blueColor text-white font-bold px-4 py-2 rounded-xl mt-8 flex items-center justify-center"
        >
          {moreButtonText}
        </button>
      )}
    </section>
  );
};

export default CourseOfferings;
