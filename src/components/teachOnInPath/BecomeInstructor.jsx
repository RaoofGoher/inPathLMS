import React from "react";
import { Link } from "react-router-dom";

const BecomeInstructor = () => {
  return (
    <div className="bg-blueColor text-white text-center py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="text-3xl sm:text-4xl  font-semibold mb-4">
        Become an instructor today
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl">
        Join one of the world's largest online learning platforms.
      </p>
      <Link to={"/teachersignup"}>
        <button className="bg-blueColor px-12 sm:px-16 md:px-24 text-white border border-white hover:text-blueColor hover:bg-white py-2 mt-4 rounded-md">
          Start Teaching
        </button>
      </Link>
    </div>
  );
};

export default BecomeInstructor;
