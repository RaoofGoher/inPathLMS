import React from "react";
import { FaChalkboardTeacher, FaComments, FaLaptop, FaLock } from "react-icons/fa"; // Import the icons

const FeatureHighlights = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher size={40} />, // Icon for Interactive Learning
      title: "Interactive Learning",
      description:
        "Engage with interactive content, including quizzes, video lessons, and more, making learning both fun and effective.",
      flipDescription: "Learn at your own pace with our interactive learning platform.",
      },
    {
      icon: <FaComments size={40} />, // Icon for Community Interaction
      title: "Community Interaction",
      description:
        "Connect with peers and instructors, ask questions, share resources, and build a supportive learning community.",
      flipDescription: "Join a community of learners and instructors to enhance your learning experience.",
      },
    {
      icon: <FaLaptop size={40} />, // Icon for Customizable Courses
      title: "Customizable Courses",
      description:
        "Create, modify, and personalize your courses to fit your learning needs, whether you're a student or an instructor.",
      flipDescription: "Tailor your learning experience to your unique needs with customizable courses.",
      },
    {
      icon: <FaLock size={40} />, // Icon for Secure & Private
      title: "Secure , Private & Safe",
      description:
        "Your data and progress are protected with top-notch security and privacy measures to ensure your learning is safe.",
      flipDescription: "Rest assured, your data and progress are secure and private.",
      },
  ];

  return (
    <section className="py-20 bg-white"> {/* lightColor2 */}
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2
          className="text-5xl font-extrabold mb-6 text-blueColor"
      
        >
          Key Features of Our Platform
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto mb-12 text-light3"
         
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
                className="relative border-blueColor border-2 hover:border-none bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform-style-preserve-3d"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Icon Section */}
                <div
                  className="flex justify-center items-center mb-6 text-blueColor " 
                >
                  {feature.icon}
                </div>

                {/* Title Section */}
                <h3
                  className="text-2xl font-bold mb-4 text-blueColor" 
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-md text-light3 mb-6">{feature.description}</p>

                {/* Flip Effect (Back of the Card) */}
                <div
                  className="absolute inset-0 bg-blueColor p-8 rounded-3xl flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  
                >
                  <p className="text-md text-white">
                   {feature.flipDescription}
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
