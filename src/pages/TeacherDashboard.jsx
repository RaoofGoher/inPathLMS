import React from 'react';
import { FaChalkboardTeacher, FaClipboardList, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';

function TeacherDashboard() {
  return (
    <div className="p-4">
      <ScrollToTop/>
      <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* My Classes */}
        <div className="bg-primaryColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaChalkboardTeacher className="text-secondaryColor text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">My Classes</h2>
            <p className="text-white">Manage and view your classes.</p>
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-primaryColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaClipboardList className="text-secondaryColor text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">Assignments</h2>
            <p className="text-white">Create and grade assignments.</p>
          </div>
        </div>

        {/* Student Performance */}
        <div className="bg-primaryColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaChartLine className="text-secondaryColor text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">Performance Reports</h2>
            <p className="text-white">Track student progress and performance.</p>
          </div>
        </div>

        {/* Student List */}
        <div className="bg-primaryColor p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaUserGraduate className="text-secondaryColor text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-white">Student List</h2>
            <p className="text-white">View and manage students in your classes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
