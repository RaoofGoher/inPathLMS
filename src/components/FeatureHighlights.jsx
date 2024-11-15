import React from "react";
import { FaChalkboardTeacher, FaComments, FaLaptop, FaLock } from "react-icons/fa"; // Import the icons

const FeatureHighlights = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher size={40} />, // Icon for Interactive Learning
      title: "Interactive Learning",
      description:
        "Engage with interactive content, including quizzes, video lessons, and more, making learning both fun and effective.",
    },
    {
      icon: <FaComments size={40} />, // Icon for Community Interaction
      title: "Community Interaction",
      description:
        "Connect with peers and instructors, ask questions, share resources, and build a supportive learning community.",
    },
    {
      icon: <FaLaptop size={40} />, // Icon for Customizable Courses
      title: "Customizable Courses",
      description:
        "Create, modify, and personalize your courses to fit your learning needs, whether you're a student or an instructor.",
    },
    {
      icon: <FaLock size={40} />, // Icon for Secure & Private
      title: "Secure , Private & Safe",
      description:
        "Your data and progress are protected with top-notch security and privacy measures to ensure your learning is safe.",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#F7F9FC" }}> {/* lightColor2 */}
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2
          className="text-5xl font-extrabold mb-6"
          style={{ color: "#4A90E2" }} // primaryColor
        >
          Key Features of Our Platform
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto mb-12"
          style={{ color: "#7F8C8D" }} // light3
        >
          Explore the key features that make our learning platform unique and effective for students and instructors.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group transform transition-all duration-500 hover:scale-105"
            >
              {/* Card container */}
              <div
                className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform-style-preserve-3d"
                style={{
                  border: "2px solid #50E3C2", // secondaryColor
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Icon Section */}
                <div
                  className="flex justify-center items-center mb-6"
                  style={{ color: "#F5A623" }} // lightColor1
                >
                  {feature.icon}
                </div>

                {/* Title Section */}
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#4A90E2" }} // primaryColor
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-md text-gray-500 mb-6">{feature.description}</p>

                {/* Flip Effect (Back of the Card) */}
                <div
                  className="absolute inset-0 bg-[#50E3C2] p-8 rounded-3xl flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Learn More</h3>
                  <p className="text-md text-white">
                    Dive deeper into the features and learn how they can help enhance your learning experience.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
