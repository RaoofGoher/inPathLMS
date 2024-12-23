import React from "react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primaryColor to-secondaryColor text-white text-center relative overflow-hidden">
      {/* Background animation effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryColor to-turquoise opacity-30 blur-sm animate-pulse"></div>

      {/* Main content */}
      <h2 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn">
        Get Started Today and Transform Your Learning Experience!
      </h2>
      <p className="text-xl mb-6 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
        Sign up now to start your 14-day free trial and explore all the premium features!
      </p>
      <button className="bg-lightColor1 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:bg-blue-500 hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50">
        Start Your Free Trial
      </button>
    </section>
  );
};

export default CTABanner;
