import React from "react";
import { useFetchCourseCategoriesQuery } from "../../features/courseCategory/courseCatgeoriesApiSlice";
const Categories = ({
  selectedCategory,
  onSelectCategory,
  onSelectSubCategory,
}) => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useFetchCourseCategoriesQuery();
  return (
    // <div>
    //   <h2 className="text-xl text-primaryColor font-semibold mb-2">Categories</h2>
    //   <ul className="flex gap-4">
    //     {categories?.map((category) => (
    //       <li
    //         key={category.id}
    //         className={`px-4 py-2 rounded cursor-pointer ${
    //           selectedCategory === category.id
    //             ? "bg-primaryColor text-white"
    //             : "bg-light3"
    //         }`}
    //         onClick={() => {onSelectCategory(category.id);onSelectSubCategory(null)}}
    //       >
    //         {category.name}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="overflow-y-auto  h-[35vh]  scrollbar-thumb-secondaryColor  scrollbar-track-transparent scrollbar-thin  ">
      <h2 className="text-xl sm:text-2xl text-center text-primaryColor font-semibold mb-4">
        Categories
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories?.map((category) => (
          <li
            key={category.id}
            className={`px-4 py-2 rounded-md font-semibold  cursor-pointer text-center ${
              selectedCategory === category.id
                ? "bg-lightColor1 text-white"
                : "bg-lightColor2 border-b-2 text-primaryColor border-lightColor1"
            }`}
            onClick={() => {
              onSelectCategory(category.id);
              onSelectSubCategory(null);
            }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
