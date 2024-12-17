import React from "react";
import {
  FaChalkboardTeacher,
  FaClipboardList,
  FaChartLine,
  FaUserGraduate,
  FaPlusCircle,
  FaBook,
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
    <div className="p-4 h-screen">
      <ScrollToTop />
      <h1 className="text-2xl md:text-4xl text-blueColor font-bold mb-6">
        Teacher Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* My Classes */}
        <div className="group  duration-300 transition-all hover:translate-y-1 hover:bg-blueColor/90 bg-blueColor p-6 rounded-lg shadow-md shadow-grayColor  flex items-center space-x-4 ">
          <FaChalkboardTeacher className="text-white text-3xl" />
          <div>
            <h2 className="text-xl font-bold text-white  duration-150 transition-all ">
              My Classes
            </h2>
            <p className="text-white  group-hover:font-semibold">
              Manage and view your classes.
            </p>
          </div>
        </div>

        {/* Assignments */}
        <div className="group duration-300 transition-all hover:translate-y-1 hover:bg-blueColor/90 bg-blueColor p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4 ">
          <FaClipboardList className=" text-white text-3xl" />
          <div>
            <h2 className="text-xl font-bold text-white  duration-150 transition-all">
              Assignments
            </h2>
            <p className="text-white  group-hover:font-semibold">
              Create and grade assignments.
            </p>
          </div>
        </div>

        {/* Student Performance */}
        <div className="group  duration-300 transition-all hover:translate-y-1 hover:bg-blueColor/90 bg-blueColor p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4 ">
          <FaChartLine className="text-white text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">
              Performance Reports
            </h2>
            <p className="text-white">
              Track student progress and performance.
            </p>
          </div>
        </div>

        {/* Student List */}
        <div className="group  duration-300 transition-all hover:translate-y-1 hover:bg-blueColor/90 bg-blueColor p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4 ">
          <FaUserGraduate className="text-white text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">
              Student List
            </h2>
            <p className="text-white">
              View and manage students in your classes.
            </p>
          </div>
        </div>

        {/* Add Course */}

        <div className="group  duration-300 transition-all hover:translate-y-1 hover:bg-blueColor/90 bg-blueColor p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4 ">
          <FaPlusCircle className="text-white text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">
              Add Course
            </h2>
            <Link to={"/dashboard/teacherdashboard/addCourse"}>
              <p className="text-white">
                Click here to create and add new courses.
              </p>
            </Link>
          </div>
        </div>

        {/* View Course */}
        <div className="group  duration-300 transition-all hover:translate-y-1 hover:bg-blueColor/90 bg-blueColor p-6 rounded-lg shadow-md shadow-grayColor flex items-center space-x-4 ">
          <FaBook className="text-white text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">
              View My Courses
            </h2>
            <Link to={"/dashboard/teacherdashboard/viewCourse"}>
              <p className="text-white">
                Click here to browse and manage courses.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
