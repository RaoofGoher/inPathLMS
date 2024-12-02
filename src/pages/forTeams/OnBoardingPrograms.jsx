import React from 'react';
import ScrollToTop from '../../components/ScrollToTop';

const OnBoardingPrograms = () => {
  return (
    <div className="bg-lightColor2">
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-primaryColor to-blue-600 text-white flex items-center justify-center bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl tracking-tight">Welcome to Onboarding Programs</h1>
          <p className="mt-6 text-lg sm:text-xl">Empower your team with structured, easy-to-follow onboarding experiences that help them thrive.</p>
          <button className="mt-8 px-8 py-4 bg-lightColor1 text-darkColor1 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-lightColor3 font-semibold text-xl focus:outline-none focus:ring-2 focus:ring-lightColor1">
            Get Started
          </button>
        </div>
      </section>

      {/* Section 1: Importance of Onboarding */}
      <section className="py-20 bg-lightColor3 text-darkColor1">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold leading-tight">Why Onboarding Matters</h2>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto opacity-80">
            Onboarding is the foundation for success. A well-executed onboarding program helps new employees integrate smoothly and feel confident in their roles from day one.
          </p>
        </div>
      </section>

      {/* Section 2: Our Approach */}
      <section className="py-20 bg-lightColor2 text-darkColor1">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold leading-tight">Our Approach</h2>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
            We design personalized onboarding experiences that integrate seamlessly with your company’s culture, ensuring a smooth transition and lasting impact on new hires.
          </p>
        </div>
      </section>

      {/* Section 3: Program Benefits */}
      <section className="py-20 bg-lightColor3 text-darkColor1">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold leading-tight">Program Benefits</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-3">
              <h3 className="text-2xl font-semibold flex items-center">
                <i className="fas fa-clock mr-3"></i> Faster Integration
              </h3>
              <p className="mt-4 text-lg">
                Onboard your new hires quickly and effectively with structured learning modules, ensuring a smooth integration process.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-3">
              <h3 className="text-2xl font-semibold flex items-center">
                <i className="fas fa-heart mr-3"></i> Increased Retention
              </h3>
              <p className="mt-4 text-lg">
                Effective onboarding leads to higher job satisfaction, which means new employees are more likely to stay with your company long-term.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-3">
              <h3 className="text-2xl font-semibold flex items-center">
                <i className="fas fa-users mr-3"></i> Stronger Team Culture
              </h3>
              <p className="mt-4 text-lg">
                New hires feel welcomed and aligned with your company’s mission and values, fostering a positive, collaborative culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Onboarding Process Flow */}
      <section className="py-20 bg-lightColor2 text-darkColor1">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold leading-tight">Our Onboarding Process</h2>
          <div className="mt-12 flex justify-center space-x-8">
            <div className="w-1/4 bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">Step 1: Welcome</h3>
              <p className="mt-4 text-lg">Introduce your new hires to the company culture, mission, and values.</p>
            </div>
            <div className="w-1/4 bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">Step 2: Training</h3>
              <p className="mt-4 text-lg">Provide role-specific training through interactive learning modules.</p>
            </div>
            <div className="w-1/4 bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">Step 3: Integration</h3>
              <p className="mt-4 text-lg">Facilitate team introductions and practical experience to ensure smooth integration.</p>
            </div>
            <div className="w-1/4 bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">Step 4: Feedback</h3>
              <p className="mt-4 text-lg">Review the progress and provide constructive feedback for growth and improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20 bg-lightColor3 text-darkColor1">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold leading-tight">What Our Clients Say</h2>
          <div className="mt-12 flex justify-center space-x-8">
            <div className="w-1/3 p-6 bg-white shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <p className="italic">"This program helped us onboard new hires in record time!"</p>
              <p className="font-semibold mt-4">John Doe</p>
              <p className="text-sm text-gray-500">HR Manager</p>
            </div>
            <div className="w-1/3 p-6 bg-white shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <p className="italic">"An essential tool for effective onboarding!"</p>
              <p className="font-semibold mt-4">Jane Smith</p>
              <p className="text-sm text-gray-500">Operations Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact or Support */}
      <section className="py-20 bg-primaryColor text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold leading-tight">Need Help? Get in Touch</h2>
          <p className="mt-6 text-lg sm:text-xl">Our support team is here to assist you with any questions or issues.</p>
          <button className="mt-8 px-8 py-4 bg-lightColor1 text-darkColor1 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-lightColor3 font-semibold text-xl">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default OnBoardingPrograms;
