import React from 'react';
import { FaBook, FaClipboardList, FaChartLine } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

function StudentDashboard() {
  const navigate = useNavigate(); // Use the navigate hook to redirect to other pages
  const dispatch = useDispatch();
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-blueColor">Student Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* My Courses */}
        <div className="bg-blueColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaBook className="text-white text-3xl" />
          <div>
            <h2 className="text-xl text-white font-semibold">My Courses</h2>
            <Link to={`/dashboard/studentdashboard/mycourses/${user_id}`}> <p className="text-white">View all enrolled courses.</p> </Link>
          </div>
        </div>

        {/* Assignments */}
        {/* <div className="bg-blueColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaClipboardList className="text-white text-3xl" />
          <div>
            <h2 className="text-xl text-white font-semibold">Assignments</h2>
            <p className="text-white">Check and submit assignments.</p>
          </div>
        </div> */}

        {/* Grades */}
        {/* <div className="bg-blueColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaChartLine className="text-white text-3xl" />
          <div>
            <h2 className="text-xl text-white font-semibold">Grades</h2>
            <p className="text-white">Review your academic performance.</p>
          </div>
        </div> */}
      </div>
      <ScrollToTop />
    </div>
  );
}

export default StudentDashboard;
