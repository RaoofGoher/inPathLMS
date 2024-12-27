import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/teachOnInPath/video-shoot.png";

const InstructorSupportTeam = () => {
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-8 md:px-16 py-8 lg:py-16 text-center justify-center items-center">
      <div className="mb-8 lg:mb-0 flex justify-center items-center">
        <img src={image} alt="Instructor Support Team" className=" w-[500px] lg:w-full h-auto" />
      </div>
      <div>
        <h2 className="text-blueColor font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
          You won’t have to do it alone
        </h2>
        <p className="text-sm sm:text-base md:text-lg flex flex-col space-y-2">
          <span>
            Our <span className="text-blueColor font-bold">Instructor Support Team</span> is here to answer your questions and review
          </span>
          <span>
            your test video, while our <span className="text-blueColor font-bold">Teaching Center</span> gives you plenty of resources to
          </span>
          <span>
            help you through the process. Plus, get the support of experienced instructors
          </span>
          <span>
            in our <span className="text-blueColor font-bold">online community.</span>
          </span>
        </p>
        <Link to="/">
          <p className="underline text-blueColor/90 mt-8 font-semibold text-sm sm:text-base">
            Need more details before you start? Learn more.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default InstructorSupportTeam;
