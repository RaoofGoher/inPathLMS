import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 

const AboutUsHeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);

  // Handle scroll to trigger animation and switch content
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setAnimate(true);
      setTimeout(() => setShowNewContent(true), 500);  // Delay showing new content after animation
    } else {
      setAnimate(false);
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
    <div className="relative py-32 bg-gradient-to-r from-primaryColor to-secondaryColor h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Effect for the Background */}
      <div className="absolute inset-0 bg-cover bg-center transform scale-110" 
           style={{ transition: 'transform 1.5s ease-out' }}></div>

      <div className="container mx-auto text-center px-6 relative z-10">
        {/* Initial Statement with Zoom-In and Fade */}
        <h1
          className={`text-5xl lg:text-6xl font-extrabold text-white mb-6 transition-all duration-1500 ease-out transform ${
            animate ? 'opacity-0 translate-y-12 scale-110' : 'opacity-100 translate-y-0'
          }`}
        >
          Empowering Learning, Enabling Success
        </h1>

        <p
          className={`text-lg lg:text-2xl text-white max-w-2xl mx-auto mb-8 transition-all duration-1500 ease-out transform ${
            animate ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
          }`}
        >
          At our core, we believe in leveraging technology to revolutionize education and learning experiences across the globe.
        </p>

        {/* New Content with Fade and Slide-In Effect */}
        {showNewContent && (
          <div className="transition-all duration-1500 ease-out transform opacity-100 translate-y-0 scale-105">
            <h2 className="text-3xl font-bold text-white mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              Innovating the Future of Education
            </h2>
            <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-1.5s">
              With a focus on personalized learning, we empower educators and students to reach their fullest potential using innovative tools.
            </p>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="bg-lightColor1 text-primaryColor py-4 px-10 rounded-full text-xl font-semibold shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:bg-primaryColor hover:text-lightColor1 transform focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50"
          >
            Explore Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
