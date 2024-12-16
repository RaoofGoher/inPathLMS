import React, { useState, useEffect, useRef } from "react";
import { useGetCoursesQuery } from "../../features/explore/getall"; // Adjust import path
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderComponent = () => {
  const { data, isLoading, isError } = useGetCoursesQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const categoryRef = useRef(null);
  const subcategoryRef = useRef(null);
  const courseRef = useRef(null);

  useEffect(() => {
    if (data && !selectedCategory) {
      setSelectedCategory(data[0]);
      setSelectedSubcategory(data[0]?.subcategories[0]);
    }
  }, [data]);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="slider-container">
      {/* Categories Section */}
      <div className="slider-section">
        <h2 className="section-title">All the skills you need in one place</h2>
        <p>From critical skills to technical topics, InPATH supports your professional development.</p>
        <div className="slider-wrapper">
          <button
            className="slider-button left-button"
            onClick={() => handleScroll(categoryRef, "left")}
          >
            <FaChevronLeft/>
          </button>
          
          <div className="slider-content" ref={categoryRef}>
            {data.map((category) => (
              <div
                key={category.categoryId}
                className={`slider-item ${
                  selectedCategory?.categoryId === category.categoryId
                    ? "active-item"
                    : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubcategory(category.subcategories[0]);
                }}
              >
                {category.name}
              </div>
            ))}
          </div>
          <button
            className="slider-button right-button"
            onClick={() => handleScroll(categoryRef, "right")}
          >
            <FaChevronRight/>
          </button>
        </div>
      </div>

      {/* Subcategories Section */}
      {selectedCategory && (
        <div className="slider-section" style={{background:"#E5F2FF"}}>
          <div className="slider-wrapper">
            <button
              className="slider-button left-button"
              onClick={() => handleScroll(subcategoryRef, "left")}
            >
              <FaChevronLeft/>
            </button>
            <div className="slider-content" ref={subcategoryRef}>
              {selectedCategory.subcategories.map((subcategory) => (
                <div
                  key={subcategory.subcategoryId}
                  className={`slider-item ${
                    selectedSubcategory?.subcategoryId ===
                    subcategory.subcategoryId
                      ? "active-item"
                      : ""
                  }`}
                  onClick={() => setSelectedSubcategory(subcategory)}
                >
                  {subcategory.name}
                </div>
              ))}
            </div>
            <button
              className="slider-button right-button"
              onClick={() => handleScroll(subcategoryRef, "right")}
            >
              <FaChevronRight/>
            </button>
          </div>
        </div>
      )}

      {/* Courses Section */}
      {selectedSubcategory && (
        <div className="slider-section">
          <h2 className="section-title">Courses</h2>
          <div className="slider-wrapper">
            <button
              className="slider-button left-button"
              onClick={() => handleScroll(courseRef, "left")}
            >
              <FaChevronLeft/>
            </button>
            <div className="slider-content" ref={courseRef}>
              {selectedSubcategory.courses.map((course) => (
                <div key={course.courseId} className="course-card">
                  <div className="card-inner">
                    <div className="card-front">
                      <h3>{course.title}</h3>
                    </div>
                    <div className="card-back">
                      <p>More Details</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="slider-button right-button"
              onClick={() => handleScroll(courseRef, "right")}
            >
              <FaChevronRight/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
