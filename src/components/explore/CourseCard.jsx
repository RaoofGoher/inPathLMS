import React, { useState } from "react";

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-500 font-bold">${course.price}</span>
        <span className="text-red-500 text-sm">{course.discount_percentage}% Off</span>
      </div>

      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
