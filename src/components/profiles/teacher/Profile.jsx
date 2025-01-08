import React from "react";
import image from "../../../assets/profile1.jpg";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blueColor text-white h-40 flex items-center px-8 sm:px-16 md:px-32 lg:px-64">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold">
            Jhon Son
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-xl">
            Passionate educator and lifelong learner, helping individuals unlock
            their potential through accessible and engaging learning
            experiences.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 gap-8 sm:px-32">
        <div className="flex flex-col items-center text-center sm:text-left">
          <img
            className="rounded-full w-28 h-28 sm:w-36 sm:h-36 shadow-lg"
            src={image}
            alt="Profile picture of Jhon Son"
          />
          <div className="mt-4 flex gap-4 justify-center sm:justify-start items-center" >
            {/* Social Media Icons */}
          
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-gray-600 text-2xl hover:text-blue-600 transition-all duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-600 text-2xl hover:text-blue-700 transition-all duration-300" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-gray-600 text-2xl hover:text-red-600 transition-all duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="X"
            >
              <span className=" font-bold text-gray-600 text-2xl hover:text-dark1 transition-all duration-300">
                X
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl text-gray-800 text-sm sm:text-sm">
          <p>
            I am a dedicated educator with years of experience in [Your
            Industry/Field]. My mission is to make learning enjoyable, engaging,
            and practical, helping students from all walks of life gain
            real-world skills. Whether you’re looking to upskill, transition
            into a new career, or dive deeper into a subject, my courses are
            designed to provide clear, actionable insights and foster growth.
          </p>
          <p className="mt-4">
            I believe that learning should be accessible and fun, so I
            incorporate real-life examples, hands-on exercises, and step-by-step
            guidance into my lessons. I am committed to empowering my students
            to reach their full potential and achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
