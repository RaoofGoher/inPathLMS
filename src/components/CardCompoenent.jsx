import React, { useState, useRef } from 'react';
import { navbarData, cardData } from './CardData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CardComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const sliderRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate

    // Show all cards for 'All' category, limit to 4 cards for others
    const filteredCards = selectedCategory === 'All'
        ? cardData // Show all cards when 'All' is selected
        : cardData.filter(card => card.category === selectedCategory).slice(0, 4);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
    };

    const handleBuyNowClick = () => {
        setIsModalOpen(true); // Open modal when "Buy Now" is clicked
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
        navigate('/billing'); // Redirect to the billing page when the modal is closed
    };

    return (
        <div className="flex justify-center py-12 bg-gray-50">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Navbar */}
                <nav className="bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] shadow-lg rounded-lg">
                    <div className="flex space-x-6 overflow-x-auto py-4 px-6">
                        <button
                            onClick={() => handleCategoryClick('All')}
                            className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${selectedCategory === 'All' ? 'bg-[#F5A623] text-white' : 'text-white hover:bg-[#F5A623] hover:text-white'}`}
                        >
                            All
                        </button>
                        {navbarData.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(item.name)}
                                className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${selectedCategory === item.name ? 'bg-[#F5A623] text-white' : 'text-white hover:bg-[#F5A623] hover:text-white'}`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Slider Section */}
                <div className="relative mt-8">
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#4A90E2] text-white p-3 rounded-full shadow-lg hover:bg-[#50E3C2] focus:outline-none transition duration-300"
                    >
                        <FaArrowLeft />
                    </button>

                    <div ref={sliderRef} className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide">
                        {filteredCards.map((card) => (
                            <div key={card.id} className="min-w-[320px] bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative">
                                <div className="w-full h-48 overflow-hidden rounded-t-xl transition-all duration-300 transform hover:scale-110 relative">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-t-xl" />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 hover:text-[#F5A623] transition duration-300">{card.title}</h3>
                                    <div className="text-gray-600 mt-2">
                                        <span className="block">Instructor: <span className="font-semibold text-gray-800">{card.instructor}</span></span>
                                        <span className="block mt-1">Rating: <span className="font-semibold text-[#F5A623]">{card.rating} ★</span></span>
                                    </div>
                                    <p className="text-gray-800 font-semibold mt-4">{card.price}</p>
                                    <button
                                        onClick={handleBuyNowClick}
                                        className="w-full mt-4 bg-[#F5A623] text-white font-semibold py-2 rounded-xl shadow-md hover:bg-[#4A90E2] transition duration-300"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#4A90E2] text-white p-3 rounded-full shadow-lg hover:bg-[#50E3C2] focus:outline-none transition duration-300"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl transform transition-all duration-300 scale-105">
                        <h2 className="text-2xl font-bold text-center text-[#F5A623]">Thank You!</h2>
                        <p className="text-lg text-center text-gray-700 mt-4">Thank you for buying our course. We hope you enjoy learning!</p>
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={closeModal} // Close modal and navigate to billing page
                                className="px-6 py-3 bg-[#F5A623] text-white font-semibold rounded-lg shadow-md hover:bg-[#50E3C2] transition duration-300"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardComponent;
