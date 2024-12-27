import React, { useState } from "react";

const TeachOnTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      destination: "New York, USA",
      review:
        "Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income. The platform is user-friendly, and the community of learners is amazing!",
    },
    {
      id: 2,
      name: "Jane Smith",
      destination: "Paris, France",
      review:
        "The experience has been incredible! Not only did I gain more exposure as an instructor, but I also got to interact with a global audience. The tools Udemy provides make creating and managing courses so much easier.",
    },
    {
      id: 3,
      name: "Mary Johnson",
      destination: "London, UK",
      review:
        "I've been teaching on Udemy for over a year now, and it has been an amazing journey. I can reach a wide audience, and the income has been a great side benefit. It's a great platform for anyone passionate about teaching.",
    },
    // Add more testimonials if needed
  ];

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-[500px] mx-auto overflow-hidden px-6">
      <div className="bg-lightBlue shadow-lg rounded-lg p-6 md:p-8 text-start flex flex-col items-start">
        <p className="text-sm sm:text-lg md:text-xl italic text-justify mb-4">
          "{currentTestimonial.review}"
        </p>
        <div className="flex flex-col items-start justify-start">
          <div className="text-start">
            <h4 className="text-lg md:text-xl font-semibold">
              {currentTestimonial.name}
            </h4>
            <p className="text-sm text-gray-500">
              {currentTestimonial.destination}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 z-20 -left-4 -right-4 flex justify-between transform -translate-y-1/2 px-4">
        <button
          className="bg-black text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:bg-gray-800"
          onClick={goPrev}
        >
          &lt;
        </button>
        <button
          className="bg-black text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:bg-gray-800"
          onClick={goNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TeachOnTestimonial;
