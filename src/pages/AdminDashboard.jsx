import React, { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUsers, // New icon for total users
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { use } from "react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static data for the bar chart
  const barChartData = {
    labels: ["Teachers", "Students", "Total Users"],
    datasets: [
      {
        label: "Total Members",
        data: [teachers.length, students.length, teachers.length + students.length], // Combining teachers and students count
        backgroundColor: ["#4caf50", "#2196f3", "#ffeb3b"],
        borderColor: ["#4caf50", "#2196f3", "#ffeb3b"],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Pending Requests", "Approved", "Rejected"],
    datasets: [
      {
        data: [10, 80, 10],
        backgroundColor: ["#ff9800", "#4caf50", "#f44336"],
        hoverBackgroundColor: ["#ffa726", "#66bb6a", "#e57373"],
      },
    ],
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Payments",
        data: [4000, 4500, 4200, 5000, 4800, 5200],
        borderColor: "#ff5722",
        backgroundColor: "rgba(255, 87, 34, 0.3)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Admin Dashboard Statistics" },
    },
  };

  // Fetch teacher and student data
  useEffect(() => {
    const fetchTeachersAndStudents = async () => {
      try {
        const teacherResponse = await axios.get(
          "https://api.inpath.us/teacher/all/profile/"
        );
        
        const studentResponse = await axios.get(
          "https://api.inpath.us/students/details/"
        );
        setTeachers(teacherResponse.data); // Assuming data is an array of teachers
        setStudents(studentResponse.data); // Assuming data is an array of students
        console.log("studentssss:", students );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching teacher or student data:", error);
        setLoading(false);
      }
    };

    fetchTeachersAndStudents();
  }, []);


  
  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blueColor">
          Dashboard
        </h1>
        <p className="text-sm sm:text-base text-grayColor">
          Manage teachers and students.
        </p>
      </div>

      {/* Overview Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Link to='/dashboard/admin/manage-teachers' className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 flex items-center">
          <div className="bg-blueColor text-white rounded-full p-4 mr-4">
            <FaChalkboardTeacher size={28} />
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-semibold text-dark1">
              Total Teachers
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-blueColor">
              {loading ? "Loading..." : teachers.length}
            </p>
          </div>
        </Link>
        <Link to="/dashboard/admin/manage-students" className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 flex items-center">
          <div className="bg-blueColor text-white rounded-full p-4 mr-4">
            <FaUserGraduate size={28} />
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-semibold text-dark1">
              Total Students
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-blueColor">
              {loading ? "Loading..." : students.length}
            </p>
          </div>
        </Link>

        {/* Total Users Card */}
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 flex items-center">
          <div className="bg-blueColor text-white rounded-full p-4 mr-4">
            <FaUsers size={28} /> {/* Icon for total users */}
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-semibold text-dark1">
              Total Users
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-blueColor">
              {loading ? "Loading..." : teachers.length + students.length}
            </p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6">
          <h2 className="text-lg sm:text-2xl font-bold text-blueColor mb-4">
            Approval Requests - Pie Chart
          </h2>
          <div className="h-64 sm:h-80">
            <Pie data={pieChartData} options={chartOptions} />
          </div>
        </div> */}
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6">
          <h2 className="text-lg sm:text-2xl font-bold text-blueColor mb-4">
            Total Members - Bar Chart
          </h2>
          <div className="h-64 sm:h-80">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Payments Section */}
      {/* <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-blueColor mb-4">
          Monthly Payments - Line Chart
        </h2>
        <div className="h-64 sm:h-80">
          <Line data={lineChartData} options={chartOptions} />
        </div>
      </div> */}

      {/* Teachers and Students Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Teachers Table */}
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-2xl font-bold text-blueColor">
              Teachers
            </h2>
            <Link to="/dashboard/admin/manage-teachers">
              <button className="text-blueColor hover:underline text-sm sm:text-base">
                View More
              </button>
            </Link>
          </div>
          <table className="w-full table-auto text-left text-grayColor">
            <thead className="text-dark1">
              <tr>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {teachers.slice(0, 5).map((teacher) => ( // Show only top 5 teachers
                <tr key={teacher.id}>
                  <td className="p-2 border-b">{teacher.full_name} </td>
                  <td className="p-2 border-b">{teacher.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Students Table */}
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-2xl font-bold text-blueColor">
              Students
            </h2>
            <Link to="/dashboard/admin/manage-students">
              <button className="text-blueColor hover:underline text-sm sm:text-base">
                View More
              </button>
            </Link>
          </div>
          <table className="w-full table-auto text-left text-grayColor">
            <thead className="text-dark1">
              <tr>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              {students.slice(0, 5).map((student) => ( // Show only top 5 students
                <tr key={student.id}>
                  <td className="p-2 border-b">{student.first_name} {student.last_name}</td>
                  <td className="p-2 border-b">{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
