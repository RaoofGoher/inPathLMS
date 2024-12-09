import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* Course Thumbnail */}
      <img 
        src={course.thumbnail} 
        alt={course.title} 
        className="w-full h-40 object-cover rounded-lg mb-4" 
      />
      
      {/* Course Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
      
      {/* Course Description */}
      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
      
      {/* Price and Discount */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-800">${course.final_price.toFixed(2)}</span>
        {course.discount_percentage && (
          <span className="text-sm text-red-500">
            {course.discount_percentage}% OFF
          </span>
        )}
      </div>
      
      {/* Call to Action (CTA) Button */}
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        View Course
      </button>
    </div>
  );
};

export default CourseCard;
