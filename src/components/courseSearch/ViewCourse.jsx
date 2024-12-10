import React, { useState } from "react";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import Courses from "./Courses.jsx";

const ViewCourse = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  return (
    <div className="p-4 my-8 flex flex-col gap-4 justify-center rounded-md items-center bg-lightColor2">
      <h1 className="text-2xl text-center md:text-4xl font-bold text-primaryColor mb-4">Our Courses</h1>

      {/* Categories Component */}
      <Categories 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}  
        onSelectSubCategory={setSelectedSubCategory}
      />

      {/* SubCategories Component */}
      <div className="flex flex-col">
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
    </div>
  );
};

export default ViewCourse;
