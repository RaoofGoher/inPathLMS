import React from "react";
import { FaBook, FaUsers, FaHeadset } from "react-icons/fa"; // Import relevant icon

const TeacherResources = () => {
  return (
    <div className="py-16">
      <div>
        <h1 className="text-3xl font-bold text-dark1 mb-8"> Resources</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-around p-6 mb-24  md:mb-64">
        <div className=" cursor-pointer hover:bg-grayColor/20 text-center flex flex-col items-center justify-center  p-8 shadow-grayColor shadow-lg">
          <FaBook size={40} className="text-dark1" />
          <h3 className="text-lg font-semibold mt-2 text-blueColor">Teaching Center</h3>
          <p className="text-gray-600">
            Find articles on Udemy teaching — from course creation to marketing.
          </p>
        </div>

        <div className="cursor-pointer hover:bg-grayColor/20 text-center flex flex-col items-center justify-center  p-8 shadow-grayColor shadow-lg">
          <FaUsers size={40} className="text-dark1"/>
          <h3 className="text-lg font-semibold mt-2 text-blueColor">Instructor Community</h3>
          <p className="text-gray-600">
            Share your progress and ask other instructors questions in our
            community.
          </p>
        </div>

        <div className="cursor-pointer hover:bg-grayColor/20 text-center flex flex-col items-center justify-center  p-8 shadow-grayColor shadow-lg">
          <FaHeadset size={40} className="text-dark1" />
          <h3 className="text-lg font-semibold mt-2 text-blueColor">Help and Support</h3>
          <p className="text-gray-600">
            Can’t find what you need? Our support team is happy to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherResources;
