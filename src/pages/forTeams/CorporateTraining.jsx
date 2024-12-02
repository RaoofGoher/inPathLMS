import React from "react";
import {Link} from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const CorporateTraining = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* scrolltotop section import here */}
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white py-24 text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
          Empower Your Workforce with Corporate Training
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Tailored training programs designed to enhance skills, inspire
          innovation, and align with your business goals.
        </p>
        <button
         onClick={() => scrollToSection("#training-section")}
          className="mt-8 px-12 py-4 bg-[#F5A623] text-white font-bold text-lg rounded-full shadow-lg hover:bg-primaryColor hover:shadow-xl transition duration-300"
        >
          Get Started
        </button>
      </section>

      {/* Why Corporate Training? */}
      <section
        id="training-section"
        className="py-20 bg-[#EAF4FA] text-center px-6 md:px-12 lg:px-24"
      >
        <h2 className="text-4xl font-extrabold text-gray-800">
          Why Corporate Training?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Empower your team with customized learning paths, targeted skill
          development, and measurable outcomes.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[#4A90E2]">
              Upskill Employees
            </h3>
            <p className="mt-4 text-gray-600">
              Equip your workforce with industry-leading skills for better
              performance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[#4A90E2]">
              Boost Productivity
            </h3>
            <p className="mt-4 text-gray-600">
              Enhance operational efficiency through impactful learning
              solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[#4A90E2]">
              Retain Talent
            </h3>
            <p className="mt-4 text-gray-600">
              Foster loyalty by offering growth opportunities and career
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Training Programs */}
      <section className="py-20 bg-gray-100 px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">
          Our Training Programs
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-center">
          Explore our comprehensive training options, crafted for organizational
          growth and success.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {[
            {
              title: "Leadership Development",
              description:
                "Cultivate leadership skills and strategic thinking.",
            },
            {
              title: "Technology Training",
              description: "Empower your team with the latest tech expertise.",
            },
            {
              title: "Compliance Training",
              description: "Ensure regulatory compliance with robust programs.",
            },
            {
              title: "Soft Skills Enhancement",
              description:
                "Improve communication, collaboration, and problem-solving.",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="w-80 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#4A90E2]">
                {program.title}
              </h3>
              <p className="mt-4 text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#F7F9FC] px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">
          Key Features
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          Leverage powerful tools and features to ensure impactful training
          experiences.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {[
            {
              feature: "Custom Learning Paths",
              description: "Tailor training to meet unique team goals.",
            },
            {
              feature: "Real-time Progress Tracking",
              description: "Monitor and measure employee growth effectively.",
            },
            {
              feature: "Gamification",
              description: "Boost engagement with rewards and challenges.",
            },
            {
              feature: "Mobile Access",
              description:
                "Enable learning anytime, anywhere with mobile-friendly solutions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-72 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
            >
              <h3 className="text-xl font-semibold text-[#4A90E2]">
                {item.feature}
              </h3>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-gradient-to-r from-[#50E3C2] to-[#4A90E2] text-white text-center px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold">
          Ready to Transform Your Workforce?
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Reach out today to discuss how we can help your organization succeed
          with tailored corporate training.
        </p>
        <Link to="/help-center">
        <button className="mt-8 px-12 py-4 bg-[#F5A623] hover:bg-primaryColor text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl  transition duration-300">
          Contact Us
        </button></Link>
      </section>
    </div>
  );
};

export default CorporateTraining;
