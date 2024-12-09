import React from "react";
import {useFetchCourseCategoriesQuery} from '../../features/courseCategory/courseCatgeoriesApiSlice'
const Categories = ({ selectedCategory, onSelectCategory }) => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useFetchCourseCategoriesQuery();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      <ul className="flex gap-4">
        {categories?.map((category) => (
          <li
            key={category.id}
            className={`px-4 py-2 rounded cursor-pointer ${
              selectedCategory === category.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
