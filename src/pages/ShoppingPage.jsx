import React, { useReducer, useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
} from "react-icons/fa"; 
import ScrollToTop from "../components/ScrollToTop";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart as removeItem } from "../features/cart/cartSlice"; // Renamed here
import { useEnrollMultipleCoursesMutation } from "../features/enrollments/enrollApi";
import { clearCart } from '../features/cart/cartSlice';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ShoppingPage = () => {
  const [enrollMultipleCourses, { isLoading, isSuccess, isError, error }] = useEnrollMultipleCoursesMutation();
  const cartItems = useSelector((state) => state.cart.items);
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  // Utility function to calculate discount price
  const calculateDiscountPrice = (price, discountPercentage) => {
    const priceNumber = parseFloat(price);
    const discount = parseFloat(discountPercentage);
    return (priceNumber - (priceNumber * (discount / 100))).toFixed(2);
  };

  const handleRemoveFromCart = (id) => {
    alert("Item removed from cart");
    dispatch(removeItem({id})); // Dispatching the Redux action here
  };

  // Calculate total price considering discount price
  const totalPrice = cartItems.reduce((total, item) => {
    const discountPrice = calculateDiscountPrice(item.price, item.discount_percentage);
    return total + parseFloat(discountPrice) * item.quantity;
  }, 0);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEnroll = async () => {
    // Extract course IDs from cartItems
    const course_ids = cartItems.map((item) => item.id);
  
    try {
      const response = await enrollMultipleCourses({ user_id, course_ids }).unwrap();
      alert(`Enrollment Successful: ${JSON.stringify(response)}`); // Alert the response on success
      dispatch(clearCart());
      navigate("/");
    } catch (err) {
      // Handle the error response
      if (err.status === 400 && err.data && err.data.non_field_errors) {
        alert(`Enrollment Failed: ${err.data.non_field_errors.join(', ')}`);
      } else {
        alert(`Failed to enroll: ${err.message || err}`);
      }
      console.error("Failed to enroll:", err);
    }
  };
  

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-4xl font-semibold text-blueColor text-center mb-8">
          Welcome to Our Learning Hub
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
          {/* Shopping Cart */}
          <div className="bg-white p-6 rounded-lg shadow-grayColor shadow-lg w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blueColor mb-4">
                Shopping Cart
              </h2>
              <Link to="/"><button  className="py-2 px-4 bg-blueColor text-white font-semibold rounded-md hover:bg-blueColor/90">
                View More
              </button>
              </Link>
            </div>
            <ul className="space-y-4">
              {cartItems.map((item) => {
                const discountPrice = calculateDiscountPrice(item.price, item.discount_percentage);
                return (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-grayColor pb-4"
                  >
                    {/* <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    /> */}

                    <div className="flex-1">
                      <span className="font-medium text-dark1">{item.name}</span>
                      <p className="text-sm text-grayColor">{item.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
                      {/* Price Information */}
                      <div className="text-sm sm:text-base">
                        <div className="text-grayColor">
                          <span className="text-xs">Actual Price:</span> $ {item.price}
                        </div>
                        <div className="text-lg text-secondaryColor">
                          <span className="text-xs">Discount Price:</span> $ {discountPrice * item.quantity}
                        </div>
                        <div className="text-xs text-grayColor">
                          <span className="text-xs">Quantity:</span> x {item.quantity}
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)} // Updated function call
                        className="mt-2 sm:mt-0 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 text-xl font-semibold text-dark1">
              <span>Total Price: </span>
              <span className="text-grayColor">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-grayColor shadow-lg w-full lg:w-1/3">
            <h2 className="text-2xl font-bold text-blueColor mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-dark1">Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark1">Original Price:</span>
                <span className="line-through text-grayColor">
                  $
                  {cartItems.reduce(
                    (total, item) => total + parseFloat(item.price) * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark1">Discount Price:</span>
                <span className="text-blueColor">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleEnroll}
              className="w-full py-3 bg-lightColor1 text-white font-semibold rounded-md hover:bg-lightColor1/90 transition"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-grayColor bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-2xl font-semibold text-blueColor mb-4">
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
                    className="w-full p-2 border border-grayColor rounded-md pr-10" 
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
                    className="w-full p-2 border border-grayColor rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-dark1">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="w-full p-2 border border-grayColor rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total: </span>
                <span className="text-blueColor">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex justify-between gap-4">
                <button
                  onClick={closeModal}
                  className="w-full py-2 px-4 bg-grayColor text-white rounded-md hover:bg-grayColor/80"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEnroll}
                  className="w-full py-2 px-4 bg-blueColor text-white rounded-md hover:bg-blueColor/90"
                >
                  Confirm Payment
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
