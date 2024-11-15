import React, { useState } from "react";

const VideoIntroduction = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20" style={{ backgroundColor: "#F7F9FC" }}>
      {/* lightColor2 */}
      <div className="container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center">
        {/* Left Column - Video Embed Section */}
        <div
          className="relative w-full lg:w-1/2 mb-10 lg:mb-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="relative rounded-lg shadow-lg overflow-hidden w-full h-64 sm:h-96"
            style={{
              border: "3px solid #50E3C2", // secondaryColor
            }}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/pE9numxxEA8${
                isHovered ? "?autoplay=1" : ""
              }`}
              title="Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>

        {/* Right Column - Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left ml-9">
          <h2 className="text-5xl font-extrabold mb-6" style={{ color: "#4A90E2" }}>
            {/* primaryColor */}
            Explore Our Platform
          </h2>
          <p className="text-lg max-w-2xl mx-auto lg:mx-0 mb-12" style={{ color: "#7F8C8D" }}>
            {/* light3 */}
            Watch this quick video to see how our LMS helps students and instructors connect and thrive.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Seamless course management</li>
            <li>Interactive tools for instructors and students</li>
            <li>Personalized learning paths for every student</li>
            <li>Collaborative features for discussions and feedback</li>
          </ul>
          <div className="mt-10">
            <button
              className="px-8 py-3 rounded-full text-white font-semibold text-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#50E3C2" }} // secondaryColor
            >
              Start Your Journey Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
