import React from "react";
import { useSelector } from "react-redux"; // For accessing Redux state
import { useNavigate } from "react-router-dom";
const CartDetails = ({ closeOverlay }) => {
  // Example cart state from Redux
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart?.items || []);
  console.log("cartItems",cartItems)
const shopping = ()=>{
  navigate("/shopping")
}
  return (
    <div className="absolute z-10 top-12 right-0 w-80 bg-white shadow-lg rounded-lg p-4">
      {/* Close Button */}
      <button
        onClick={closeOverlay}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        &times;
      </button>

      <h3 className="text-lg font-semibold mb-4">Cart Items</h3>

      {cartItems?.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="font-semibold">{item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={shopping}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartDetails;
