import React from "react";
import { FaUsers, FaLightbulb, FaRocketchat } from "react-icons/fa";
import ScrollToTop from "../../components/ScrollToTop";

const Careers = () => {
  return (
    <div className="bg-light-gray">
      <ScrollToTop />

      {/* Hero Section with Gradient */}
      <section className="text-center py-24 bg-gradient-to-r from-primaryColor  to-secondaryColor relative">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <h1 className="text-5xl font-extrabold text-white z-10">Join Our Team</h1>
        <p className="text-xl text-white mt-4 z-10">Find your next opportunity with us</p>
      </section>

      {/* Job Listings Section with Gradient */}
      <section className="py-12 bg-gradient-to-r from-light-gray via-turquoise to-skyblue">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-dark-gray text-center">Current Openings</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-turquoise">
              <h3 className="text-2xl font-semibold text-skyblue mb-2">Frontend Developer</h3>
              <p className="text-gray-600 mb-4">Build intuitive and responsive UI for our LMS platform.</p>
              <button className="mt-4 py-2 px-6 bg-turquoise text-white rounded-full transition-colors hover:bg-skyblue">
                Apply Now
              </button>
            </div>
            <div className="border p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-turquoise">
              <h3 className="text-2xl font-semibold text-skyblue mb-2">Backend Developer</h3>
              <p className="text-gray-600 mb-4">Work with APIs and databases to scale our platform.</p>
              <button className="mt-4 py-2 px-6 bg-turquoise text-white rounded-full transition-colors hover:bg-skyblue">
                Apply Now
              </button>
            </div>
            <div className="border p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-turquoise">
              <h3 className="text-2xl font-semibold text-skyblue mb-2">Product Manager</h3>
              <p className="text-gray-600 mb-4">Oversee the development of new features for the platform.</p>
              <button className="mt-4 py-2 px-6 bg-turquoise text-white rounded-full transition-colors hover:bg-skyblue">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section with Gradient */}
      <section className="py-16 bg-gradient-to-r from-primaryColor  to-secondaryColor">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Our Culture</h2>
          <p className="text-lg text-white mb-6">
            We believe in fostering an inclusive and collaborative environment where everyone’s ideas are heard.
            Our team is dedicated to creating innovative solutions in education technology.
          </p>
          <div className="flex justify-around mt-8">
            <div className="text-center hover:bg-white p-6 rounded-lg transition-all transform hover:scale-105">
              <FaUsers className="text-4xl text-skyblue mx-auto" />
              <p className="mt-4  text-white">Collaboration</p>
            </div>
            <div className="text-center hover:bg-white p-6 rounded-lg transition-all transform hover:scale-105">
              <FaLightbulb className="text-4xl text-skyblue mx-auto" />
              <p className="mt-4 text-white">Innovation</p>
            </div>
            <div className="text-center hover:bg-white p-6 rounded-lg transition-all transform hover:scale-105">
              <FaRocketchat className="text-4xl text-skyblue mx-auto" />
              <p className="mt-4 text-white">Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section with Gradient */}
      <section className="py-16 bg-gradient-to-r from-light-gray via-skyblue to-turquoise">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-dark-gray">How to Apply</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our application process is simple and transparent. Follow the steps below to apply for your next role with us.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-4 justify-center">
              <span className="bg-skyblue text-white p-4 rounded-full">1</span>
              <p className="text-lg text-gray-600">Submit your resume and cover letter online.</p>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <span className="bg-skyblue text-white p-4 rounded-full">2</span>
              <p className="text-lg text-gray-600">Our team will review your application and contact you for an interview.</p>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <span className="bg-skyblue text-white p-4 rounded-full">3</span>
              <p className="text-lg text-gray-600">If you're selected, we’ll make you an offer to join our team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Gradient */}
      <section className="py-16 bg-gradient-to-r from-primaryColor  to-secondaryColor text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white mb-4">Have Questions?</h2>
          <p className="text-lg text-white mb-6">Reach out to us and we'll be happy to assist you!</p>
          <button className="py-2 px-6  text-white rounded-full shadow-lg hover:shadow-xl transition-all">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
