import React from "react";
import image1 from "../assets/custom-train.jpg";

const CustomSolutions = () => {
  return (
    <section className="custom-solutions bg-white px-8 sm:px-16 p-8 min-h-screen  text-center md:text-left flex flex-col md:flex-row items-center justify-between">
      <div className="text-content mb-8 md:mb-0 md:w-1/2 space-y-6">
        <h2 className="text-4xl font-semibold text-blueColor mb-4">
          Custom Training Solutions
        </h2>
        <p className="text-lg text-grayColor">
          We offer tailor-made training solutions designed to enhance the skills
          of your workforce with cutting-edge tools and knowledge.
        </p>
        <p className="text-sm text-dark1 opacity-70">
          Start building the future of your organization today with our
          interactive, scalable learning programs.
        </p>

        {/* New Content Section */}
        <div className="client-testimonials mt-8 text-left text-blueColor space-y-4">
          <h3 className="text-2xl font-semibold">What Our Clients Say</h3>
          <p className="text-lg text-grayColor">
            "The training program was a game-changer for our team! We saw an
            immediate improvement in productivity and engagement."
          </p>
          <p className="text-sm  text-dark1">- Sarah Williams, CEO of TechCorp</p>
          <p className="text-lg mt-4 text-grayColor">
            "Exceptional trainers and content. Our employees are now more
            skilled and motivated than ever!"
          </p>
          <p className="text-sm text-dark1 ">- John Doe, HR Director at InnovateX</p>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="md:w-1/2">
        <img
          src={image1}
          alt="Training Solutions"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default CustomSolutions;
