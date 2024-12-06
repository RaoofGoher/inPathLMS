import React, { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
} from "react-icons/fa"; // Importing the icons
import ScrollToTop from "../components/ScrollToTop";

const ShoppingPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "React for Beginners",
      description: "Learn the basics of React, a popular JavaScript library.",
      price: 100,
      discountPrice: 80,
      quantity: 1,
      image: "https://via.placeholder.com/150?text=React",
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      description: "Dive deep into JavaScript and master the language.",
      price: 120,
      discountPrice: 100,
      quantity: 2,
      image: "https://via.placeholder.com/150?text=JavaScript",
    },
    {
      id: 3,
      name: "CSS Mastery",
      description: "Become an expert in styling with CSS and Flexbox.",
      price: 80,
      discountPrice: 60,
      quantity: 1,
      image: "https://via.placeholder.com/150?text=CSS",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountPrice * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {" "}
      <ScrollToTop />
      <div className="min-h-screen bg-lightColor2 p-6">
        <h1 className="text-4xl font-semibold text-primaryColor text-center mb-8">
          Welcome to Our Learning Hub
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
          {/* Shopping Cart */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-primaryColor mb-4">
                Shopping Cart
              </h2>
              <button className="py-2 px-4 bg-lightColor1 text-white font-semibold rounded-md hover:bg-primaryColor">
                View More
              </button>
            </div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-gray-200 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <span className="font-medium text-dark1">{item.name}</span>
                    <p className="text-sm text-light3">{item.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
                    {/* Price Information */}
                    <div className="text-sm sm:text-base">
                      <div className="line-through text-light3">
                        <span className="text-xs">Actual Price:</span> $
                        {item.price}
                      </div>
                      <div className="text-lg text-secondaryColor">
                        <span className="text-xs">Discount Price:</span> $
                        {item.discountPrice * item.quantity}
                      </div>
                      <div className="text-xs text-light3">
                        <span className="text-xs">Quantity:</span> x
                        {item.quantity}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 sm:mt-0 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xl font-semibold text-secondaryColor">
              <span>Total Price: </span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
            <h2 className="text-2xl font-bold text-primaryColor mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-dark1">Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark1">Original Price:</span>
                <span className="line-through text-light3">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark1">Discount Price:</span>
                <span className="text-secondaryColor">${totalPrice}</span>
              </div>
            </div>
            <button
              onClick={openModal}
              className="w-full py-3 bg-lightColor1 text-white font-semibold rounded-md hover:bg-primaryColor transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-light3 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">
                Payment Information
              </h2>
              <div className="space-y-4 mb-6">
                <label className="block text-dark1">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9876 5432"
                    className="w-full p-2 border border-gray-300 rounded-md pr-10" // Add padding-right for icon
                  />

                  <div className="absolute top-1/2 flex gap-2 right-3 transform -translate-y-1/2">
                    <FaCcVisa className="text-blue-700" />
                    <FaCcMastercard className="text-red-500" />
                    <FaCcDiscover className="text-yellow-400" />
                    <FaCcAmex className="text-red-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-dark1">Expiration Date</label>
                  <input
                    type="text"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-dark1">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total: </span>
                <span className="text-secondaryColor">${totalPrice}</span>
              </div>
              <div className="mt-4 flex justify-between gap-4">
                <button
                  onClick={closeModal}
                  className="w-1/2 py-2 bg-gray-300 text-dark1 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    alert("Payment Completed!");
                  }}
                  className="w-1/2 py-2 bg-lightColor1 text-white font-semibold rounded-md hover:bg-primaryColor"
                >
                  Complete Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingPage;
