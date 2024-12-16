import React from "react";
import hero from "../assets/homeHero.png";

const HomeHero = () => {
  return (
    <section className="bg-white">
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: " right",
        }}
        className=" bg-cover sm:bg-contain  bg-no-repeat md:h-[600px] "
      >
        <div className="flex flex-col gap-6 justify-start items-center sm:items-start px-4 sm:px-16 py-16">
          <div className="flex flex-col p-6 shadow-md shadow-grayColor w-full sm:w-[30rem] bg-white">
            <h2 className="text-4xl font-bold text-center text-blueColor">
              Get Started Today!
            </h2>
            <p className="text-sm mt-2 break-words">
              Discover a range of features tailored to meet your needs. From
              user-friendly interfaces to advanced functionalities, we offer
              tools designed to enhance your productivity and efficiency.
            </p>
          </div>
          <button className="bg-blueColor hover:bg-blueColor/90 text-white text-xl font-bold py-2 px-4 rounded-md w-full sm:w-[30rem]">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
