import React, { useState } from "react";
import { useGetSubcategoriesQuery } from "../../features/courseCategory/subCategorySlice";

const SubCategories = ({ category, onSelectSubCategory }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const { data: subcategories, isLoading, isError } = useGetSubcategoriesQuery(category);

  if (isLoading) return <div>Loading subcategories...</div>;
  if (isError) return <div>Error loading subcategories.</div>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Subcategories of {category}</h2>
      <ul className="flex gap-4">
        {subcategories?.map((subCategory) => (
          <li
            key={subCategory.id}
            className={`px-4 py-2 rounded cursor-pointer ${
              selectedSubCategory === subCategory.id
                ? "bg-green-500 text-white"
                : "bg-gray-200"
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
