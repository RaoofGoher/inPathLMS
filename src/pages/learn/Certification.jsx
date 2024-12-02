import React from "react";
import ScrollToTop from "../../components/ScrollToTop";

const Certification = () => {
  
  // Scroll to the "certifications" section when the button is clicked
  const handleScrollToCertification = (e) => {
    e.preventDefault(); // Prevent default link behavior to handle scrolling manually
    const section = document.getElementById("certifications"); // Correct target section ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to that section
    }
  };
  const handleScrollToHeroSection = (e) => {
    e.preventDefault(); // Prevent default link behavior to handle scrolling manually
    const section = document.getElementById("hero-section"); // Correct target section ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to that section
    }
  };

  return (
    <div>
      <ScrollToTop />
      {/* Hero Section */}
      <section id="hero-section" className="h-screen text-center bg-gradient-to-r from-primaryColor to-secondaryColor flex flex-col justify-center items-center p-8 gap-4">
        <h1 className="text-4xl font-bold mb-4 text-lightColor2">
          Earn Your Certification and Boost Your Career
        </h1>
        <p className="text-lg mb-8 text-lightColor2">
          Unlock new opportunities and gain the skills you need to succeed in
          your professional journey with our industry-recognized certifications.
        </p>
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-xl text-lightColor2">
            Join thousands of professionals who have advanced their careers with
            our expert-led training programs.
          </p>
          <div className="flex gap-4">
            <span className="bg-lightColor2 px-4 py-2 rounded-md text-darkColor1 font-semibold">
              500+ Courses
            </span>
            <span className="bg-lightColor2 px-4 py-2 rounded-md text-darkColor1 font-semibold">
              10,000+ Graduates
            </span>
          </div>
        </div>
        <a
          href="#certifications" // Use anchor link targeting #certifications
          onClick={handleScrollToCertification} // Call scroll logic on click
          className="bg-lightColor1 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:bg-secondaryColor hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50"
        >
          Explore Certifications
        </a>
      </section>

      {/* Certification Benefits Section */}
      <section className="bg-[#EAF4FA] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-primaryColor">
            Why Get Certified?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-bl from-[#50E3C2] to-[#4A90E2] text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Career Advancement
              </h3>
              <p className="text-white">
                Certification can open doors to new job opportunities and higher
                salary potential.
              </p>
            </div>
            <div className="bg-gradient-to-bl from-[#50E3C2] to-[#4A90E2] text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Industry Recognition
              </h3>
              <p className="text-white">
                Gain credibility in your field and stand out to employers and
                peers.
              </p>
            </div>
            <div className="bg-gradient-to-bl from-[#50E3C2] to-[#4A90E2] text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Skill Mastery</h3>
              <p className="text-white">
                Demonstrate your mastery of key skills with proven expertise
                through certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* List of Available Certifications */}
      <section id="certifications" className="py-16 bg-[#EAF4FA]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-primaryColor">
            Our Popular Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Certified Web Developer
              </h3>
              <p className="text-white mb-4">
                Complete our comprehensive course and gain certification as a
                web developer.
              </p>
              <a
                href="#"
                className="text-[#4A90E2] font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
            <div className="bg-dark1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Data Science Certification
              </h3>
              <p className="text-white mb-4">
                Master data analysis, visualization, and machine learning
                concepts with this certification.
              </p>
              <a
                href="#"
                className="text-[#4A90E2] font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
            <div className="bg-dark1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Digital Marketing Expert
              </h3>
              <p className="text-white mb-4">
                Get certified in the latest digital marketing techniques and
                tools.
              </p>
              <a
                href="#"
                className="text-[#4A90E2] font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-primaryColor py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-darkColor1">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-bl from-[#50E3C2] to-[#4A90E2] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Step 1: Choose Your Certification
              </h3>
              <p>
                Browse our list of certifications and choose the one that best
                fits your career goals.
              </p>
            </div>
            <div className="bg-gradient-to-bl from-[#50E3C2] to-[#4A90E2] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Step 2: Complete the Course
              </h3>
              <p>
                Follow our online courses, which include videos, assignments,
                and quizzes to help you master the skills.
              </p>
            </div>
            <div className="bg-gradient-to-bl from-[#50E3C2] to-[#4A90E2] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Step 3: Take the Exam
              </h3>
              <p>
                After completing the course, take the exam to demonstrate your
                knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-[#4A90E2] text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Certified?</h2>
        <p className="text-lg mb-8">
          Start your certification journey today and take the first step toward
          advancing your career.
        </p>
        <a
          href="#hero-section"
          onClick={handleScrollToHeroSection}
          className="bg-lightColor1 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:bg-secondaryColor hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default Certification;
