import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const Analytics = () => {
  // Example data for charts
  const courseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Courses Completed',
        data: [5, 15, 30, 50, 65, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const studentData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Students',
        data: [100, 200, 300, 400, 500, 600],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const instructorData = {
    labels: ['Instructor 1', 'Instructor 2', 'Instructor 3', 'Instructor 4', 'Instructor 5'],
    datasets: [
      {
        label: 'Courses Taught',
        data: [5, 8, 12, 7, 4],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const financialData = {
    labels: ['Revenue', 'Expenses', 'Profit'],
    datasets: [
      {
        data: [5000, 3000, 2000],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Engagement Analytics Data
  const engagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Engagement Score',
        data: [10, 30, 45, 60, 80, 90], // Example engagement data
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const financialOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const engagementOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-semibold mb-6 text-blueColor">Admin Analytics</h1>

      {/* Overview Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-grayColor shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blueColor">Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-blueColor rounded-lg text-center text-white">
            <h3 className="font-medium ">Total Students</h3>
            <p className="text-2xl">1200</p>
          </div>
          <div className="p-4 bg-blueColor text-white rounded-lg text-center">
            <h3 className="font-medium ">Active Students</h3>
            <p className="text-2xl">950</p>
          </div>
          <div className="p-4 bg-blueColor text-white rounded-lg text-center">
            <h3 className="font-medium ">Total Courses</h3>
            <p className="text-2xl">85</p>
          </div>
          <div className="p-4 bg-blueColor text-white rounded-lg text-center">
            <h3 className="font-medium ">Instructors</h3>
            <p className="text-2xl">30</p>
          </div>
        </div>
      </section>

      {/* Course Analytics Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-grayColor shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blueColor">Course Analytics</h2>
        <div className="h-64">
          <Line data={courseData} />
        </div>
      </section>

      {/* Student Analytics Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-grayColor shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blueColor">Student Analytics</h2>
        <div className="h-64">
          <Bar data={studentData} />
        </div>
      </section>

      {/* Instructor Analytics Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-grayColor shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blueColor">Instructor Analytics</h2>
        <div className="h-64">
          <Bar data={instructorData} />
        </div>
      </section>

      {/* Financial Analytics Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-grayColor shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blueColor">Financial Analytics</h2>
        <div className="h-64 md:h-96">
          <Doughnut data={financialData} options={financialOptions} />
        </div>
      </section>

      {/* Engagement Analytics Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-grayColor shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blueColor  ">Engagement Analytics</h2>
        <div className="h-64 md:h-96">
          <Line data={engagementData} options={engagementOptions} />
        </div>
      </section>

      {/* Alerts & Notifications Section */}
      <section className="bg-white text-white p-6 shadow-grayColor rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blueColor">Alerts & Notifications</h2>
        <ul className="space-y-4">
          <li className="bg-blueColor p-4 rounded-lg">
            <strong>New Student Sign-Up:</strong> John Doe
          </li>
          <li className="bg-blueColor p-4 rounded-lg">
            <strong>Course Expiration:</strong> React for Beginners Course
          </li>
          <li className="bg-blueColor p-4 rounded-lg">
            <strong>System Alert:</strong> Database backup successful
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Analytics;
