import React from "react";
import engagingCourse from "../assets/course-explore.jpg";
import VideoCreation from "../assets/Video-Creations.jpg"
import Audience from "../assets/audience.jpg"
import {
  FaChalkboardTeacher,
  FaClipboardList,
  FaChartLine,
  FaUserGraduate,
  FaPlusCircle,
  FaBook,
  FaVideo,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { useSelector, useDispatch } from "react-redux";
import { useGetTeacherProfileQuery } from "../features/profile/teacher/teacherProfile";
function TeacherDashboard() {
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );
  const { data, error, isLoading } = useGetTeacherProfileQuery(user_id);
  console.log("teacher data", data);
  return (
    <div className="p-4 h-screen py-16">
      <ScrollToTop />
      {/* <h1 className="text-2xl md:text-4xl text-blueColor font-bold mb-6">
        Teacher Dashboard
      </h1> */}

      <div className="grid gap-16 grid-cols-1">
        {/* Add Course */}

        <div className="group sm:py-16 flex-col sm:flex-row gap-4  justify-between  duration-300 transition-all hover:translate-y-1  p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4 ">
          <h2 className="flex gap-2 text-xl font-semibold text-dark1">
            <FaPlusCircle className=" text-3xl" />
            Jump Into Course Creation
          </h2>
          <Link to={"/dashboard/teacherdashboard/addCourse"}>
            <p className=" hover:text-white p-4 text-center  rounded hover:bg-blueColor/90 text-blueColor border border-blueColor">
              Create Your Course
            </p>
          </Link>
        </div>

        <div className=" py-6  text-center text-dark1">
          <h1>
            Based on your experience, we think these resources will be helpful.
          </h1>
        </div>
        {/* View Course */}
        <div className="group sm:py-16 flex-col sm:flex-row gap-4  justify-between  duration-300 transition-all hover:translate-y-1  p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4  ">
          <h2 className="flex gap-2 text-xl font-semibold text-dark1">
            <FaBook className=" text-3xl" />
            View My Courses
          </h2>
          <Link to={"/dashboard/teacherdashboard/viewCourse"}>
            <p className="hover:text-white p-4 text-center  rounded hover:bg-blueColor/90 text-blueColor border border-blueColor">
              Click here to browse and manage courses.
            </p>
          </Link>
        </div>
        {/* My Classes */}
        <div className="group p-6 grid grid-cols-1 lg:grid-cols-2 px-6 md:px-16 rounded-lg shadow-md shadow-grayColor">
          <div className="flex justify-center items-center mb-6 md:mb-0">
            <img
              className="w-3/4 md:w-1/2"
              src={engagingCourse}
              alt="engagingCourse"
            />
          </div>
          <div className="py-6 text-dark1 flex flex-col justify-center gap-6 md:gap-8">
            <h1 className="text-2xl text-blueColor text-center md:text-left">
              Create an Engaging Course
            </h1>
            <p className="text-center md:text-left">
              Whether you've been teaching for years or are teaching for the
              first time, you can make an engaging course. We've compiled
              resources and best practices to help you get to the next level, no
              matter where you're starting.
            </p>

            <Link
              to={
                "/dashboard/teacherdashboard/engaging-course-detail-teacher-dashboard"
              }
              className="flex justify-center md:justify-start"
            >
              <span className="underline cursor-pointer hover:text-blueColor/90 text-blueColor text-center md:text-left">
                Get Started
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {/* First Card */}
          <div className=" rounded-lg shadow-md p-6 shadow-grayColor flex flex-col lg:flex-row justify-center items-center mb-6 md:mb-0">
            <img
              className="w-3/4 md:w-1/2 mx-auto lg:mx-0"
              src={VideoCreation}
              alt="VideoCreation"
            />
            <div className="py-6 text-dark1  flex flex-col justify-center gap-6 md:gap-8">
              <h1 className="text-xl text-blueColor text-center md:text-left">
                Get Started with Video
              </h1>
              <p className="text-center md:text-left">
                Quality video lectures can set your course apart. Use our
                resources to learn the basics.
              </p>
              <Link
                to={
                  "/dashboard/teacherdashboard/engaging-course-detail-teacher-dashboard"
                }
                className="flex justify-center md:justify-start"
              >
                <span className="underline cursor-pointer hover:text-blueColor/90 text-blueColor text-center md:text-left">
                  Get Started
                </span>
              </Link>
            </div>
          </div>

          {/* Second Card */}
          <div className="rounded-lg shadow-md p-6 shadow-grayColor flex flex-col lg:flex-row justify-center items-center mb-6 md:mb-0">
            <img
              className="w-3/4 md:w-1/2 mx-auto lg:mx-0"
              src={Audience}
              alt="Audience"
            />
            <div className="py-6 text-dark1 flex flex-col  justify-center gap-6 md:gap-8">
              <h1 className="text-xl text-blueColor text-center md:text-left">
                Build Your Audience
              </h1>
              <p className="text-center md:text-left">
                Build Your Audience. Set your course up for success by building
                your audience.
              </p>
              <Link
                to={
                  "/dashboard/teacherdashboard/engaging-course-detail-teacher-dashboard"
                }
                className="flex justify-center md:justify-start"
              >
                <span className="underline cursor-pointer hover:text-blueColor/90 text-blueColor text-center md:text-left">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Assignments */}
        {/* <div className="group sm:py-16  flex-col sm:flex-row gap-4  justify-between  duration-300 transition-all hover:translate-y-1  p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4">
          <h2 className="flex gap-2 text-xl font-semibold text-dark1">
            <FaClipboardList className="  text-3xl" />
            Assignments
          </h2>
          <p className="hover:text-white p-4 text-center rounded  hover:bg-blueColor/90 text-blueColor border border-blueColor">
            Create and grade assignments.
          </p>
        </div> */}

        {/* Student Performance */}
        {/* <div className="group sm:py-16 flex-col sm:flex-row gap-4  justify-between  duration-300 transition-all hover:translate-y-1  p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4  ">
          <h2 className="flex gap-2 text-xl font-semibold text-dark1">
            <FaChartLine className=" text-3xl" />
            Performance Reports
          </h2>
          <p className="hover:text-white p-4 text-center rounded  hover:bg-blueColor/90 text-blueColor border border-blueColor">
            Track student progress and performance.
          </p>
        </div> */}

        {/* Student List */}
        {/* <div className="group sm:py-16 flex-col sm:flex-row gap-4  justify-between  duration-300 transition-all hover:translate-y-1  p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4 ">
          <h2 className="flex gap-2 text-xl font-semibold text-dark1">
            <FaUserGraduate className=" text-3xl" />
            Student List
          </h2>
          <p className="hover:text-white p-4 text-center  rounded hover:bg-blueColor/90 text-blueColor border border-blueColor">
            View and manage students in your classes.
          </p>
        </div> */}
        <div className=" pt-6 text-center text-dark1">
          <h1>
            Have questions? Here are our most popular instructor resources.
          </h1>
        </div>
        <div className="py-8 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 justify-center">
            {/* Test Video Card */}
            <div className="p-2 flex flex-col items-center">
              <FaVideo size={40} className="text-dark1 mb-4" />
              <h3 className="text-lg text-center text-blueColor mb-2 underline cursor-no-drop">Test Video</h3>
              <p className="text-center text-dark1 mb-2">
                Send us a sample video and get expert feedback.
              </p>
            </div>

            {/* Instructor Community Card */}
            <div className="p-2 flex flex-col items-center">
              <FaUsers size={40} className="text-dark1 mb-4" />
              <h3 className="text-lg text-center text-blueColor underline mb-2 cursor-no-drop">
                Instructor Community
              </h3>
              <p className="text-center text-dark1 mb-2">
                Connect with experienced instructors. Ask questions, browse
                discussions, and more.
              </p>
            </div>

            {/* Teaching Center Card */}
            <div className="p-2 flex flex-col items-center">
              <FaChalkboardTeacher size={40} className="text-dark1 mb-4" />
              <h3 className="text-lg text-center text-blueColor mb-2 underline cursor-no-drop">Teaching Center</h3>
              <p className="text-center text-dark1 mb-2">
                Learn about best practices for teaching on INPATH LMS.
              </p>
            </div>

            {/* Marketplace Insights Card */}
            <div className="p-2 flex flex-col items-center">
              <FaChartLine size={40} className="text-dark1 mb-4" />
              <h3 className="text-lg text-center text-blueColor mb-2 underline cursor-no-drop">
                Marketplace Insights
              </h3>
              <p className="text-center text-dark1 mb-2">
                Validate your course topic by exploring our marketplace supply
                and demand.
              </p>
            </div>

            {/* Help and Support Card */}
            <div className="p-2 flex flex-col items-center">
              <FaHeadset size={40} className="text-dark1 mb-4 " />
              <h3 className="text-lg text-center text-blueColor mb-2 underline cursor-no-drop">
                Help and Support
              </h3>
              <p className="text-center text-dark1 mb-4">
                Browse our Help Center or contact our support team.
              </p>
            </div>
          </div>
        </div>

        {/* are you ready */}
        <div className="py-8 gap-6 sm:py-16 flex justify-center items-center flex-col">
          <h1 className="text-dark1">Are You Ready to Begin?</h1>
          <Link to={"/dashboard/teacherdashboard/addCourse"}>
            <button className="hover:text-white sm:px-16 p-4 text-center rounded  hover:bg-blueColor/90 text-blueColor border border-blueColor">
              Create Your Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
