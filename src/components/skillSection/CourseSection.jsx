import React, { useState } from "react";
import CategorySlider from "./CategorySlider";
import SubCategorySlider from "./SubCategorySlider";
import CourseSlider from "./CourseSlider";
import { useGetCoursesQuery } from "../../features/explore/getall"; // Adjust import path

const LearningPlatform = () => {
  const { data, isLoading, isError } = useGetCoursesQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Reset subcategory
  };

  const handleSubCategorySelect = (subcategory) => {
    setSelectedSubCategory(subcategory);
  };

  return (
    <div className="border-4 border-red-800" >
      <CategorySlider
        categories={data}
        onCategorySelect={handleCategorySelect}
      />
      {selectedCategory && (
        <SubCategorySlider
          subcategories={selectedCategory.subcategories}
          onSubCategorySelect={handleSubCategorySelect}
        />
      )}
      {selectedSubCategory && (
        <CourseSlider courses={selectedSubCategory.courses} className="ml-8" />
      )}
    </div>
  );
};

export default LearningPlatform;
