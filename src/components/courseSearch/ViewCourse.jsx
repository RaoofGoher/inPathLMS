import React, { useState } from "react";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import Courses from "./Courses.jsx";

const ViewCourse = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Courses</h1>

      {/* Categories Component */}
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* SubCategories Component */}
      {selectedCategory && (
        <SubCategories
          category={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          onSelectSubCategory={setSelectedSubCategory}
        />
      )}
      {/* Courses Component */}
      {selectedSubCategory && (
        <Courses subCategory={selectedSubCategory} />
      )}
    </div>
  );
};

export default ViewCourse;
