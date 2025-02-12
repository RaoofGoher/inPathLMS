import React, { useState, useRef } from "react";
import { navbarData, cardData } from "./CardData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CardComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const sliderRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Show all cards for 'All' category, limit to 4 cards for others
  const filteredCards =
    selectedCategory === "All"
      ? cardData // Show all cards when 'All' is selected
      : cardData
          .filter((card) => card.category === selectedCategory)
          .slice(0, 4);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleBuyNowClick = () => {
    navigate("/courses"); // Open modal when "Buy Now" is clicked
  };

  // const closeModal = () => {
  //   setIsModalOpen(false); // Close modal
  //    // Redirect to the billing page when the modal is closed
  // };

  return (
    <div className="flex justify-center py-12 bg-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
        {/* Navbar */}
        {/* <nav className="bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex space-x-4 overflow-x-auto py-4 px-6">
            <button
              onClick={() => handleCategoryClick("All")}
              className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 
                ${
                  selectedCategory === "All"
                    ? "bg-[#F5A623] text-white shadow-lg"
                    : "text-white hover:bg-[#F5A623] hover:text-white hover:shadow-md"
                }`}
            >
              All
            </button>
            {navbarData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(item.name)}
                className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 
                    ${
                      selectedCategory === item.name
                        ? "bg-[#F5A623] text-white shadow-lg"
                        : "text-white hover:bg-[#F5A623] hover:text-white hover:shadow-md"
                    }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav> */}

        {/* Slider Section */}
        <div className="relative mt-8">
          <button
            onClick={scrollLeft}
            className="absolute z-10 -left-4 top-1/2 transform -translate-y-1/2 bg-blueColor text-white p-4 rounded-full shadow-lg hover:bg-blueColor/90 hover:scale-110 transition-all duration-300"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <div
            ref={sliderRef}
            className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide "
          >
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="min-w-[320px] bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative"
              >
                <div className="w-full h-48 overflow-hidden rounded-t-xl transition-all duration-300 transform hover:scale-110 relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blueColor hover:text-blueColor/90 transition duration-300">
                    {card.title}
                  </h3>
                  <div className="text-light3 mt-2">
                    <span className="block">
                      Instructor:{" "}
                      <span className="font-semibold text-dark1">
                        {card.instructor}
                      </span>
                    </span>
                    <span className="block mt-1">
                      Rating:{" "}
                      <span className="font-semibold text-[#F5A623]">
                        {card.rating} ★
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-800 font-semibold mt-4">
                    {card.price}
                  </p>
                  <button
                    onClick={handleBuyNowClick}
                    className="w-full mt-4 bg-blueColor text-white font-semibold py-2 rounded-xl shadow-md hover:bg-blueColor/90 transition duration-300"
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-blueColor text-white p-4 rounded-full shadow-lg hover:bg-blueColor/90 hover:scale-110 transition-all duration-300"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CardComponent;
