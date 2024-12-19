import React from "react";
import { FaUsers, FaLightbulb, FaRocketchat } from "react-icons/fa";
import ScrollToTop from "../../components/ScrollToTop";
import HomeHero from "../../components/HomeHero";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className=" bg-white">
      <ScrollToTop />

      {/* Hero Section with Gradient */}
      <HomeHero />
      {/* Job Listings Section with Gradient */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blueColor mb-6 text-dark-gray text-center">
            Current Openings
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className=" p-6 shadow-lg border-t-2 border-grayColor rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl shadow-grayColor">
              <h3 className="text-2xl font-semibold text-blueColor mb-2">
                Frontend Developer
              </h3>
              <p className="text-grayColor mb-4">
                Build intuitive and responsive UI for our LMS platform.
              </p>
              <Link to="/page-not-found">
              <button className="mt-4 py-2 px-6 bg-blueColor text-white  rounded-md hover:bg-blueColor/90">
                Apply Now
              </button>
              </Link>
            </div>
            <div className="p-6 shadow-lg border-t-2 border-grayColor rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl shadow-grayColor">
              <h3 className="text-2xl font-semibold text-blueColor mb-2">
                Backend Developer
              </h3>
              <p className="text-grayColor mb-4">
                Work with APIs and databases to scale our platform.
              </p>
              <Link to="/page-not-found">
              <button className="mt-4 py-2 px-6 bg-blueColor text-white  rounded-md hover:bg-blueColor/90">
                Apply Now
              </button>
              </Link>
            </div>
            <div className="p-6 shadow-lg border-t-2 border-grayColor rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl shadow-grayColor">
              <h3 className="text-2xl font-semibold text-blueColor mb-2">
                Product Manager
              </h3>
              <p className="text-grayColor mb-4">
                Oversee the development of new features for the platform.
              </p>
              <Link to="/page-not-found">
              <button className="mt-4 py-2 px-6 bg-blueColor text-white  rounded-md hover:bg-blueColor/90">
                Apply Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section with Gradient */}
      <section className="py-16 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl text-blueColor font-semibold mb-6 ">
            Our Culture
          </h2>
          <p className="text-lg  text-grayColor mb-6">
            We believe in fostering an inclusive and collaborative environment
            where everyone’s ideas are heard. Our team is dedicated to creating
            innovative solutions in education technology.
          </p>
          <div className="flex justify-around mt-8">
            <div className="text-center  p-6 rounded-lg transition-all transform hover:scale-105 border-t-2 border-grayColor shadow-grayColor shadow-md">
              <FaUsers className="text-4xl text-blueColor/90  mx-auto" />
              <p className="mt-4 text-grayColor ">Collaboration</p>
            </div>
            <div className="text-center  p-6 rounded-lg transition-all transform hover:scale-105 border-t-2 border-grayColor shadow-grayColor shadow-md ">
              <FaLightbulb className="text-4xl text-blueColor/90 mx-auto" />
              <p className="mt-4 text-grayColor ">Innovation</p>
            </div>
            <div className="text-center  p-6 rounded-lg transition-all transform hover:scale-105  border-t-2 border-grayColor shadow-grayColor shadow-md">
              <FaRocketchat className="text-4xl  text-blueColor/90 mx-auto" />
              <p className="mt-4 text-grayColor">Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section with Gradient */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blueColor">
            How to Apply
          </h2>
          <p className="text-lg text-grayColor mb-4">
            Our application process is simple and transparent. Follow the steps
            below to apply for your next role with us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center rounded-md space-x-4 justify-center p-4 border-t-2 border-grayColor shadow-grayColor shadow-md">
              <span className="p-2 text-blueColor text-xl">1</span>
              <p className="text-lg text-grayColor">
                Submit your resume and cover letter online.
              </p>
            </div>
            <div className="flex items-center space-x-4 rounded-md justify-center p-4 border-t-2 border-grayColor shadow-grayColor shadow-md">
              <span className="p-2 text-blueColor text-xl">2</span>
              <p className="text-lg text-grayColor">
                Our team will review your application and contact you for an
                interview.
              </p>
            </div>
            <div className="flex items-center space-x-4 rounded-md justify-center p-4 border-t-2 border-grayColor shadow-grayColor shadow-md">
              <span className="p-2 rounded-full text-blueColor text-xl">3</span>
              <p className="text-lg text-grayColor">
                If you're selected, we’ll make you an offer to join our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Gradient */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blueColor mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-grayColor mb-6">
            Reach out to us and we'll be happy to assist you!
          </p>
          <button className="py-2 px-6 bg-blueColor  hover:bg-blueColor/90  text-white rounded-md shadow-lg hover:shadow-xl transition-all">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
