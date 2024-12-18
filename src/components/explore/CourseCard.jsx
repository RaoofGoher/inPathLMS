import React, { useState } from "react";
import Modal from "./Modal"; // Assuming you have a separate Modal component for the video

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling the modal
  const [isAddedToCart, setIsAddedToCart] = useState(false); // To track if course is added to cart

  // Function to handle Add to Cart
  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Add logic to dispatch action to add course to cart
  };

  // Function to handle View Course (open modal)
  const handleViewCourse = () => {
    setIsModalOpen(true);
  };

  // Function to handle Checkout
  const handleCheckout = () => {
    // Implement the logic for proceeding to checkout
    console.log("Proceeding to checkout...");
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      {/* Hover effect */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center space-x-4">
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            {isAddedToCart ? "Added" : "Add to Cart"}
          </button>
          <button
            onClick={handleViewCourse}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            View Course
          </button>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
          >
            Checkout
          </button>
        </div>
      )}

      {/* Modal to play course video */}
      {isModalOpen && (
        <Modal
          videoUrl={course.intro_video}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CourseCard;
