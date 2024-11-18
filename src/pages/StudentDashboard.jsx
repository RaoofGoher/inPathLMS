import React from 'react';
import { FaBook, FaClipboardList, FaChartLine } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';

function StudentDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* My Courses */}
        <div className="bg-primaryColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaBook className="text-secondaryColor text-3xl" />
          <div>
            <h2 className="text-xl text-white font-semibold">My Courses</h2>
            <p className="text-white">View all enrolled courses.</p>
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-primaryColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaClipboardList className="text-secondaryColor text-3xl" />
          <div>
            <h2 className="text-xl text-white font-semibold">Assignments</h2>
            <p className="text-white">Check and submit assignments.</p>
          </div>
        </div>

        {/* Grades */}
        <div className="bg-primaryColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaChartLine className="text-secondaryColor text-3xl" />
          <div>
            <h2 className="text-xl text-white font-semibold">Grades</h2>
            <p className="text-white">Review your academic performance.</p>
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default StudentDashboard;
