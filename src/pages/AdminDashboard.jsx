import React from "react";
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
  FaBook,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

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
  // Static data for the bar chart
  const barChartData = {
    labels: ["Teachers", "Students", "Courses"],
    datasets: [
      {
        label: "Total Members",
        data: [25, 120, 15],
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

  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blueColor">
           Dashboard
        </h1>
        <p className="text-sm sm:text-base text-grayColor">
          Manage teachers, students, and courses effectively.
        </p>
      </div>
      {/* Overview Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 flex items-center">
          <div className="bg-blueColor text-white rounded-full p-4 mr-4">
            <FaChalkboardTeacher size={28} />
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-semibold text-dark1">
              Total Teachers
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-blueColor">
              25
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 flex items-center">
          <div className="bg-blueColor text-white rounded-full p-4 mr-4">
            <FaUserGraduate size={28} />
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-semibold text-dark1">
              Total Students
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-blueColor">
              120
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 flex items-center">
          <div className="bg-blueColor text-white rounded-full p-4 mr-4">
            <FaBook size={28} />
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-semibold text-dark1">
              Active Courses
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-blueColor">
              15
            </p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6">
          <h2 className="text-lg sm:text-2xl font-bold text-blueColor mb-4">
            Approval Requests - Pie Chart
          </h2>
          <div className="h-64 sm:h-80">
            <Pie data={pieChartData} options={chartOptions} />
          </div>
        </div>
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
      <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6 mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-blueColor mb-4">
          Monthly Payments - Line Chart
        </h2>
        <div className="h-64 sm:h-80">
          <Line data={lineChartData} options={chartOptions} />
        </div>
      </div>
      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-2xl font-bold text-blueColor">
              Teachers
            </h2>
            <button className="text-blueColor hover:underline text-sm sm:text-base">
              View More
            </button>
          </div>
          <table className="w-full table-auto text-left text-grayColor">
            <thead className="text-dark1">
              <tr>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Subject</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">John Doe</td>
                <td className="p-2 border-b">Math</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Jane Smith</td>
                <td className="p-2 border-b">Science</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Mark Johnson</td>
                <td className="p-2 border-b">History</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Alice Brown</td>
                <td className="p-2 border-b">Literature</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-lg shadow-grayColor rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-2xl font-bold text-blueColor">
              Students
            </h2>
            <button className="text-blueColor hover:underline text-sm sm:text-base">
              View More
            </button>
          </div>
          <table className="w-full table-auto text-left text-grayColor">
            <thead className="text-dark1">
              <tr>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Course</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">Emma Williams</td>
                <td className="p-2 border-b">Math</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Oliver Miller</td>
                <td className="p-2 border-b">Science</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Sophia Garcia</td>
                <td className="p-2 border-b">History</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Liam Taylor</td>
                <td className="p-2 border-b">Literature</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
