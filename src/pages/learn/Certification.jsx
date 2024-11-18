import React from 'react'
import ScrollToTop from '../../components/ScrollToTop';

const Certification = () => {
  return (
    <div className="bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white py-16">
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Earn Your Certification and Boost Your Career</h1>
        <p className="text-lg mb-8">Unlock new opportunities and gain the skills you need to succeed in your professional journey with our industry-recognized certifications.</p>
        <a href="#certifications" className="bg-lightColor1 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:bg-secondaryColor hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50">Explore Certifications</a>
      </section>

      {/* Certification Benefits Section */}
      <section className="bg-dark1 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Get Certified?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-bl from-secondaryColor to-primaryColor text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Career Advancement</h3>
              <p className='text-white'>Certification can open doors to new job opportunities and higher salary potential.</p>
            </div>
            <div className="bg-gradient-to-bl from-secondaryColor to-primaryColor text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Industry Recognition</h3>
              <p className='text-white'>Gain credibility in your field and stand out to employers and peers.</p>
            </div>
            <div className="bg-gradient-to-bl from-secondaryColor to-primaryColor text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Skill Mastery</h3>
              <p className='text-white'>Demonstrate your mastery of key skills with proven expertise through certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* List of Available Certifications */}
      <section id="certifications" className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Popular Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">Certified Web Developer</h3>
              <p className="text-white mb-4">Complete our comprehensive course and gain certification as a web developer.</p>
              <a href="#" className="text-[#4A90E2] font-semibold hover:underline">Learn More</a>
            </div>
            <div className="bg-dark1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">Data Science Certification</h3>
              <p className="text-white mb-4">Master data analysis, visualization, and machine learning concepts with this certification.</p>
              <a href="#" className="text-[#4A90E2] font-semibold hover:underline">Learn More</a>
            </div>
            <div className="bg-dark1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">Digital Marketing Expert</h3>
              <p className="text-white mb-4">Get certified in the latest digital marketing techniques and tools.</p>
              <a href="#" className="text-[#4A90E2] font-semibold hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-dark1 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-bl from-secondaryColor to-primaryColor p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Choose Your Certification</h3>
              <p>Browse our list of certifications and choose the one that best fits your career goals.</p>
            </div>
            <div className="bg-gradient-to-bl from-secondaryColor to-primaryColor p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Complete the Course</h3>
              <p>Follow our online courses, which include videos, assignments, and quizzes to help you master the skills.</p>
            </div>
            <div className="bg-gradient-to-bl from-secondaryColor to-primaryColor p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Take the Exam</h3>
              <p>After completing the course, take the exam to demonstrate your knowledge and skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-[#4A90E2] text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Certified?</h2>
        <p className="text-lg mb-8">Start your certification journey today and take the first step toward advancing your career.</p>
        <a href="#" className="bg-lightColor1 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:bg-secondaryColor hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50">Get Started</a>
      </section>
    </div>
  )
}

export default Certification;
