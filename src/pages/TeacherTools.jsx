import React from "react";
import { FaVideo, FaChartLine, FaFileCsv } from "react-icons/fa"; // New icons for Test Video, Marketplace Insights, and Bulk Coupon Creation
import { FaBook, FaUsers, FaHeadset } from "react-icons/fa"; // Existing icons for Teaching Center, Instructor Community, and Help and Support

const TeacherTools = () => {
  return (
    <div className="py-16">
      <div>
        <h1 className="text-3xl font-bold text-dark1 mb-8">Tools</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-around p-6 mb-24 md:mb-64">
        {/* Test Video */}
        <div className="cursor-pointer hover:bg-grayColor/20 text-center flex flex-col items-center justify-center p-8 shadow-grayColor shadow-lg">
          <FaVideo size={40} className="text-dark1" />
          <h3 className="text-lg font-semibold mt-2 text-blueColor">
            Test Video
          </h3>
          <p className="text-gray-600">
            Get free feedback from Udemy video experts on your audio, video, and
            delivery
          </p>
        </div>

        {/* Marketplace Insights */}
        <div className="cursor-pointer hover:bg-grayColor/20 text-center flex flex-col items-center justify-center p-8 shadow-grayColor shadow-lg">
          <FaChartLine size={40} className="text-dark1" />
          <h3 className="text-lg font-semibold mt-2 text-blueColor">
            Marketplace Insights
          </h3>
          <p className="text-gray-600">
            Get Udemy-wide market data to create successful courses.
          </p>
        </div>

        {/* Bulk Coupon Creation */}
        <div className="cursor-pointer hover:bg-grayColor/20 text-center flex flex-col items-center justify-center p-8 shadow-grayColor shadow-lg">
          <FaFileCsv size={40} className="text-dark1" />
          <h3 className="text-lg font-semibold mt-2 text-blueColor">
            Bulk Coupon Creation
          </h3>
          <p className="text-gray-600">
            Create multiple coupons at once via CSV upload.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherTools;
