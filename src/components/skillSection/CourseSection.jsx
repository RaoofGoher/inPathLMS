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
    <div className="my-12" >
     <div className="px-4 sm:px-12">
          <h1 className=" text-blueColor font-semibold mb-2 text-base sm:text-xl lg:text-5xl font-montserrat">
            All the skills you need in one place
          </h1>
          <p className=" text-base sm:text-xl mb-2 font-nunito">
            From critical skills to technical topics, INPATH supports your
            professional development. (select a category to get started)
          </p>
        </div>
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
        <CourseSlider courses={selectedSubCategory.courses}  />
      )}
    </div>
  );
};

export default LearningPlatform;
