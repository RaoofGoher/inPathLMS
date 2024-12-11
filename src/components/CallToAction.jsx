import React from 'react';

const CallToAction = ({ title, description,textColorDescription , buttonText, buttonColor, buttonHoverColor, textColor, imageSrc,imageShadowColor, bgColor }) => {
  return (
    <section className={`py-20 mx-4 sm:mx-8 md:mx-16 ${bgColor}`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-6 animate__animated animate__fadeIn">
          <h2 className={`text-4xl font-extrabold mb-6 ${textColor}`}>{title}</h2>
          <p className={`mb-8 text-xl opacity-80 ${textColorDescription} animate__animated animate__fadeIn animate__delay-1s`}>
            {description}
          </p>
          <button
            className={`hover:text-dark1 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform ${buttonColor} hover:${buttonHoverColor} hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-opacity-50`}
          >
            {buttonText}
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={imageSrc}
            alt="Call to action visual"
            className={`w-full shadow-md  shadow-${imageShadowColor} hover:scale-95 duration-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full animate__animated animate__fadeInRight`}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
