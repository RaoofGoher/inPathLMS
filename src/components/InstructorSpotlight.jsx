import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import Arrow Icons for navigation
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// import instructor1 from "../assets/student6.jpg";
// import instructor2 from "../assets/student5.jpg";
import instructor3 from "../assets/student9.jpg"; // Assuming you have the image

const instructors = [
  {
    name: "Dr. Nancy Jhon",
    expertise: "Artificial Intelligence",
    image: instructor3,
  },
  {
    name: "Dr. Sarah Johnson",
    expertise: "Full Stack Development",
    image: instructor3,
  },
  {
    name: "Dr. Emily Davis",
    expertise: "Data Science",
    image: instructor3,
  },
  {
    name: "Dr. Emily Davis",
    expertise: "Data Science",
    image: instructor3,
  },
  {
    name: "Dr. Emily Davis",
    expertise: "Data Science",
    image: instructor3,
  },
  {
    name: "Dr. Emily Davis",
    expertise: "Data Science",
    image: instructor3,
  },
];

const InstructorSpotlight = () => {
  const sliderRef = useRef();

  // Function to scroll left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // Function to scroll right
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="hidden sm:block sm:py-20 py-6 px-6 sm:px-16 bg-blueColor">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-2 text-white underline">
          Meet Our Instructors
        </h2>
        <p className="text-lg mx-auto mb-6 text-white">
          Learn from experienced educators and professionals who bring their
          expertise to every lesson.
        </p>
      </div>

      {/* Container for scrollable content */}
      <div className="relative">
        {/* Left Arrow */}
        <FaArrowLeft
          onClick={scrollLeft}
          className="text-4xl bg-white rounded-full text-blueColor absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        />

        {/* Right Arrow */}
        <FaArrowRight
          onClick={scrollRight}
          className="text-4xl bg-white rounded-full text-blueColor absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        />

        {/* Scrollable container */}
        <Link  to="/page-not-found">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 sm:gap-12 sm:py-4 sm:px-16 scrollbar-hidden" // Increased gap for more space between cards
          style={{
            maxWidth: "calc(100% - 3rem)", // Adjusts the width of the scrollable area
            overflowX: "hidden", // Prevents scrollbar from appearing
          }}
        >
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-[21rem]" // Adjusts width for responsive layout
            >
              <div className="rounded-xl bg-white flex flex-col items-center shadow-lg">
                {/* Image */}
                <img
                  src={instructor.image}
                  className="w-full h-56 mb-4 object-cover rounded-t-xl" // Decreased height for smaller cards
                  alt={instructor.name}
                />

                {/* Name */}
                <h3 className="text-xl md:text-3xl text-center font-bold text-blueColor">
                  {instructor.name}
                </h3>

                {/* Short Heading */}
                <p className="md:text-lg text-center text-black mb-6">
                  {instructor.expertise}
                </p>

                {/* View Profile Button */}
                
                <div className="w-full p-2">
                  <button
                   
                    className="bg-blueColor w-full text-2xl text-white px-6 py-6 rounded-b-lg font-semibold hover:bg-blue-600 transition duration-300"
                  >
                    View Profile
                  </button>
                </div>
             
              </div>
            </div>
          ))}
        </div>
           </Link>
      </div>
    </section>
  );
};

export default InstructorSpotlight;
