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
 
      </div>
    </div>
  );
}

export default TeacherDashboard;
