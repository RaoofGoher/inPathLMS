import React, { useState } from "react";
import { useSelector } from "react-redux"; // For accessing Redux state if needed
import CartDetails from "./CartDetails";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Example cart state from Redux (replace with your actual state)
  const cartItems = useSelector((state) => state.cart?.items || []);

  const toggleCartDetails = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button
        onClick={toggleCartDetails}
        className="flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 2.8c-.1.2-.2.4-.2.6a1 1 0 001 1h12m-8-4v6m4-6v6"
          />
        </svg>
        {cartItems?.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
            {cartItems?.length}
          </span>
        )}
      </button>

      {/* Cart Details Overlay */}
      {isOpen && <CartDetails closeOverlay={toggleCartDetails} />}
    </div>
  );
};

export default Cart;
