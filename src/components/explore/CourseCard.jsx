import React, { useState } from "react";
import Modal from "./Modal"; // Assuming you have a separate Modal component for the video
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling the modal
  const [isAddedToCart, setIsAddedToCart] = useState(false); // To track if course is added to cart
    const { token, role, isAuthenticated, user_id } = useSelector(
      (state) => state.auth
    );
      const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
  // Function to handle Add to Cart
  const handleAddToCart = (course) => {
    console.log("Adding to cart...",course);
    if (isAuthenticated) {
      const existingItem = cartItems.find((item) => item.id === course.id);

      if (existingItem) {
        alert("This course is already in your cart!");
      } else {
        dispatch(
          addToCart({
            id: course.id,
            name: course.title,
            price: course.price,
            discount_percentage: course.discount_percentage,
            quantity: 1,
          })
        );
      }
    } else {
      alert("please login to continue");
    }
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
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-start justify-end">
          <button
             onClick={() => handleAddToCart(course)}
            className="m-1 px-4 py-2 bg-green-500 text-white  hover:bg-green-600 transition-colors w-[150px]"
          >
            {isAddedToCart ? "In Cart" : "Add to Cart"}
          </button>
          
          <button
            onClick={handleCheckout}
            className="m-1 px-4 py-2 bg-yellow-500 text-white  hover:bg-yellow-600 transition-colors w-[150px]"
          >
            Checkout
          </button>
          <button
            onClick={handleViewCourse}
            className="m-1 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors w-[150px]"
          >
            View Course
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
