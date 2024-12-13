import React, { useState } from "react";
import { FaChevronRight, FaTimes  } from "react-icons/fa"; // Importing the chevron-right icon

const dummyCategories = [
  {
    name: "Technology",
    subcategories: ["Web Development", "AI & Machine Learning", "Mobile Apps"],
  },
  {
    name: "Design",
    subcategories: ["Graphic Design", "UI/UX", "Animation"],
  },
  {
    name: "Business",
    subcategories: [],
  },
];

const Dropdown = ({ closeDropdown }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div
      className="absolute bg-white shadow-lg rounded-md mt-[200px] ml-[100px] w-[70vw] max-w-[200px] p-4"
      style={{ zIndex: 10 }}
      onMouseLeave={closeDropdown} // Close the dropdown when mouse leaves
    >

      <ul className="flex flex-col space-y-2">
        {dummyCategories.map((category, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <span className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
              {category.name}
              {/* Conditionally render the chevron icon for categories with subcategories */}
              {category.subcategories.length > 0 && (
                <FaChevronRight className="ml-2" />
              )}
            </span>
            {activeCategory === index && category.subcategories.length > 0 && (
              <ul
                className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-md p-2 w-48"
              >
                {category.subcategories.map((subcategory, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={closeDropdown}
        className="top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Dropdown;
