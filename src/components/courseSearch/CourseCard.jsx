// import { FaCartPlus, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return ( 
    <div className="p-2 border-2 border-primaryColor rounded-lg shadow-lg">
      {/* Course Thumbnail */}
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-40 border-2 border-primaryColor object-cover rounded-lg mb-4 md:h-48 lg:h-56"
      />

      {/* Course Title */}
      <h3 className="text-lg font-semibold text-primaryColor mb-2 truncate md:text-xl lg:text-2xl">
        {course.title}
      </h3>

      {/* Course Description */}
      <p className="text-sm text-lightColor1 mb-4 line-clamp-2 md:text-base lg:line-clamp-3">
        {course.description}
      </p>

      {/* Price and Discount */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-bold text-green-500 md:text-2xl">${course.final_price.toFixed(2)}</span>
        {course.discount_percentage && (
          <span className="text-sm text-red-500 md:text-base">{course.discount_percentage}% OFF</span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        <button className="flex-1 px-4 py-2 bg-primaryColor text-white rounded-md hover:bg-lightColor2 hover:border font-semibold hover:border-primaryColor hover:text-dark1 flex items-center justify-center gap-2 transition-all duration-300 md:px-6 md:py-3">
          View Course
        </button>

        <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center gap-2 transition-all duration-300 md:px-6 md:py-3">
         Add to Cart
        </button>

        <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center justify-center gap-2 transition-all duration-300 md:px-6 md:py-3">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;