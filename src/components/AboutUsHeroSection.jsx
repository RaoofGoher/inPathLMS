import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUsHeroSection = () => {
  const [showNewContent, setShowNewContent] = useState(false);

  // Handle scroll to trigger new content visibility
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNewContent(true);  // Show new content after scrolling down
    } else {
      setShowNewContent(false);  // Hide new content when scrolling back up
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative py-32 bg-white h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Effect for the Background */}
      <div className="absolute inset-0 bg-cover bg-center transform scale-110"></div>

      <div className="container mx-auto text-center px-6 relative z-10">
        {/* Initial Statement without animations */}
        <h1 className="text-5xl lg:text-6xl font-extrabold text-blueColor mb-6">
          Empowering Learning, Enabling Success
        </h1>

        <p className="text-lg lg:text-2xl text-grayColor max-w-2xl mx-auto mb-8">
          At our core, we believe in leveraging technology to revolutionize education and learning experiences across the globe.
        </p>

        {/* New Content without animations */}
        {showNewContent && (
          <div>
            <h2 className="text-3xl font-bold text-blueColor mb-6">
              Innovating the Future of Education
            </h2>
            <p className="text-lg lg:text-xl text-grayColor max-w-2xl mx-auto mb-8">
              With a focus on personalized learning, we empower educators and students to reach their fullest potential using innovative tools.
            </p>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="bg-blueColor text-white py-4 px-10 rounded-full text-xl font-semibold shadow-lg hover:bg-blueColor/90"
          >
            Explore Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
