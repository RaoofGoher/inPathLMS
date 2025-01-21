import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ScrollToTop from "../components/ScrollToTop";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null); // For error handling

  // Fetch teachers from API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          "https://api.inpath.us/teacher/all/profile/"
        );
        setTeachers(response.data); // Assuming the API returns an array of teachers
      } catch (error) {
        setError("Error fetching teacher data");
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchTeachers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleCloseModal = () => {
    setSelectedTeacher(null);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    `${teacher.full_name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Prepare data for the pie chart (distribution by specialization)
  const specializationCount = teachers.reduce((acc, teacher) => {
    const specialization = teacher.specialization || "Unknown";
    acc[specialization] = (acc[specialization] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(specializationCount),
    datasets: [
      {
        data: Object.values(specializationCount),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <>
      <ScrollToTop />
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6 text-blueColor">
          Manage Teachers
        </h1>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Pie Chart Section */}
        <div className="mb-6 hidden md:flex flex-col justify-center items-center ">
          <h2 className="text-xl font-semibold mb-4 text-blueColor">
            Teacher Specialization Distribution
          </h2>
          <div>
            <Pie data={chartData} />
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name..."
            className="p-3 w-1/3 border-2 border-blueColor rounded-lg focus:outline-none"
          />
        </div>

        {/* Teacher List Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-blueColor">
            Teacher List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto rounded-lg">
              <thead>
                <tr className="bg-grayColor text-white">
                  <th className="border px-6 py-3 text-left">Name</th>
                  <th className="border px-6 py-3 text-left">Specialization</th>
                  <th className="border px-6 py-3 text-left">Experience</th>
                  <th className="border px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTeachers.map((teacher) => (
                  <tr
                    key={teacher.user}
                    className="hover:bg-blueColor group text-grayColor hover:text-white"
                  >
                    <td className="border px-6 py-3">{teacher.full_name}</td>
                    <td className="border px-6 py-3">
                      {teacher.specialization || "Not available"}
                    </td>
                    <td className="border px-6 py-3">
                      {teacher.teaching_experience || "Not available"}
                    </td>
                    <td className="border px-6 py-3">
                      <button
                        className="text-blueColor group-hover:text-white hover:underline"
                        onClick={() => handleViewDetails(teacher)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>

        {/* Modal for Teacher Details */}
        {selectedTeacher && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-blueColor">
                Teacher Details
              </h2>
              <div className="space-y-4 text-grayColor">
                <div>
                  <strong>Name:</strong> {selectedTeacher.full_name}
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  {selectedTeacher.email || "Not available"}
                </div>
                <div>
                  <strong>Specialization:</strong>{" "}
                  {selectedTeacher.specialization || "Not available"}
                </div>
                <div>
                  <strong>Biography:</strong>{" "}
                  {selectedTeacher.bio || "Not available"}
                </div>
                <div>
                  <strong>Teaching Experience:</strong>{" "}
                  {selectedTeacher.teaching_experience || "Not available"}
                </div>
                <div>
                  <strong>Degrees:</strong>{" "}
                  {selectedTeacher.degrees || "Not available"}
                </div>
                <div>
                  <strong>Website:</strong>{" "}
                  <a
                    href={selectedTeacher.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedTeacher.website}
                  </a>
                </div>
                <div>
                  <strong>Profile Picture:</strong>
                  <img
                    src={selectedTeacher.profile_picture || "fallback-image-url"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full"
                  />
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-4 text-red-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageTeachers;
