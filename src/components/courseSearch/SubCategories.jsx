import React, { useState } from "react";
import { useGetSubcategoriesQuery } from "../../features/courseCategory/subCategorySlice";

const SubCategories = ({ category, onSelectSubCategory }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const { data: subcategories, isLoading, isError } = useGetSubcategoriesQuery(category);

  if (isLoading) return <div>Loading subcategories...</div>;
  if (isError) return <div>Error loading subcategories.</div>;

  return (
    <div className="mt-2 mx-6 ">
      <h2 className="text-xl sm:text-2xl text-center text-primaryColor font-semibold mb-2">Subcategories</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {subcategories?.map((subCategory) => (
          <li
            key={subCategory.id} 
            className={`px-4 py-2 rounded-md cursor-pointer ${
              selectedSubCategory === subCategory.id
                ? "bg-lightColor1 text-white"
                : "  border-b-2 border-lightColor1 font-semibold text-primaryColor"
            }`}
            onClick={() => {
              setSelectedSubCategory(subCategory.id);
              onSelectSubCategory(subCategory);
            }} // Store the selected subcategory ID
          >
            {subCategory.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategories;
