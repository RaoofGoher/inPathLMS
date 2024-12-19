import React from "react";
import Slider from "react-slick"; // Import react-slick
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons for navigation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.webp";
import profile4 from "../assets/profile4.webp";
import profile5 from "../assets/profile5.jpg";
import instructor3 from "../assets/student9.jpg"; // Assuming you have the image

const instructors = [
  {
    name: "Dr. Mickel Jhon",
    expertise: "Artificial Intelligence",
    image: profile1,
  },
  {
    name: "Dr. Sarah Johnson",
    expertise: "Full Stack Development",
    image: profile2,
  },
  {
    name: "Dr. Emily Davis",
    expertise: "Data Science",
    image: profile3,
  },
  {
    name: "Dr. Jennifer Lee",
    expertise: "Java Script",
    image: profile4,
  },
  {
    name: "Dr. Sonia James",
    expertise: "Python",
    image: profile5,
  },
  {
    name: "Dr. Raven Smith",
    expertise: "Laravel",
    image: instructor3,
  },
];

const InstructorSpotlight = () => {
  const settings = {
    infinite: true, // Enables looping of slides
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 3, // Scroll 3 cards at a time
    nextArrow:<span className="bg-white"> <FaArrowRight  /> </span>, // Custom next button
    prevArrow: <span className="bg-white"><FaArrowLeft  /></span>, // Custom prev button
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 3, // Show 3 cards
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 cards
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1, // Show 1 card
          slidesToScroll: 1,
        },
      },
    ],
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

      {/* Slider Component */}
      <Slider {...settings}>
        {instructors.map((instructor, index) => (
          <div key={index} className="px-2">
            <div className="rounded-xl bg-white flex flex-col items-center shadow-lg">
              {/* Image */}
              <img
                src={instructor.image}
                className="w-full h-56 mb-4 object-cover rounded-t-xl"
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
      </Slider>
    </section>
  );
};

export default InstructorSpotlight;
