import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Example icon library
import image from "../assets/onboarding-matters.png";

const WhyOnboardingMatters = () => {
  return (
    <section className="py-8 bg-white px-8 sm:px-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight text-blueColor">
          Why Onboarding Matters
        </h2>
        <p className="mt-4 text-lg text-grayColor">
          Discover the impact of a strong onboarding process.
        </p>
      </div>

      <div className="  flex flex-col lg:flex-row items-center ">
        {/* Left Side: Image */}
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-lg shadow-2xl overflow-hidden hover:scale-105 transform transition-all duration-500">
            <img
              src={image}
              alt="Onboarding"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grayColor/40 via-transparent to-black/0 rounded-lg"></div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          className="lg:w-1/2 lg:pl-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-grayColor leading-relaxed mb-6">
            A robust onboarding process in an LMS is crucial for setting
            learners up for success. It ensures users understand the platform,
            feel confident navigating it, and can maximize their learning
            experience from the start.
          </p>
          <ul className="space-y-6">
            {[
              {
                icon: <FaCheckCircle className="text-blueColor" />,
                title: "Enhances Learner Engagement",
                description:
                  "An intuitive onboarding process familiarizes users with the LMS interface, helping them feel comfortable and motivated to explore courses and tools.",
              },
              {
                icon: <FaCheckCircle className="text-blueColor" />,
                title: "Speeds Up Course Adoption",
                description:
                  "Clear instructions and guided tutorials enable learners to quickly access and start utilizing learning resources, ensuring a smooth transition into the platform.",
              },
              {
                icon: <FaCheckCircle className="text-blueColor" />,
                title: "Improves Retention and Performance",
                description:
                  "With effective onboarding, learners are more likely to stay engaged, complete their courses, and achieve their educational goals efficiently.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-4 mt-1">{item.icon}</span>
                <div>
                  <h4 className="text-xl font-semibold text-blueColor">
                    {item.title}
                  </h4>
                  <p className="text-grayColor mt-2">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button className="px-6 py-3  bg-blueColor text-white text-lg rounded-md shadow-md hover:bg-blueColor/90  ">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOnboardingMatters;
