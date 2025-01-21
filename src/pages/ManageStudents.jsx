import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ScrollToTop from "../components/ScrollToTop";

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  // Fetch students from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://api.inpath.us/students/details/"
        );
        console.log("Fetched students:", response.data);
        setStudents(
          Array.isArray(response.data) ? response.data : [response.data]
        );
      } catch (error) {
        setError("Error fetching student data");
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleDeleteStudent = (id) => {
    if (id) {
      setStudents(students.filter((student) => student.id !== id));
    } else {
      console.error("No valid ID to delete");
    }
  };

  const filteredStudents = students.filter((student) =>
    `${student.first_name} ${student.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Pie Chart Data: Distribution of students by language
  const languageCount = students.reduce((acc, student) => {
    const language = student.language || "Unknown";
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        data: Object.values(languageCount),
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
          Manage Students
        </h1>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Pie Chart Section */}
        <div className="mb-6 hidden md:flex flex-col justify-center items-center ">
          <h2 className="text-xl  font-semibold mb-4 text-blueColor">
            Student Language Distribution
          </h2>
          <div className="w-1/3">
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

        {/* Student List Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-blueColor">
            Student List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto rounded-lg">
              <thead>
                <tr className="bg-grayColor text-white">
                  <th className="border px-6 py-3 text-left">Name</th>
                  <th className="border px-6 py-3 text-left">Email</th>
                  <th className="border px-6 py-3 text-left">Language</th>
                  <th className="border px-6 py-3 text-left">Headline</th>
                  <th className="border px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto" style={{ maxHeight: "300px" }}>
                {filteredStudents.slice(0, 10).map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-blueColor group text-grayColor hover:text-white"
                  >
                    <td className="border px-6 py-3">{`${student.first_name} ${student.last_name}`}</td>
                    <td className="border px-6 py-3">
                      {student.email || "Not available"}
                    </td>
                    <td className="border px-6 py-3">
                      {student.profile?.language || "Not available"}
                    </td>
                    <td className="border px-6 py-3">
                      {student.profile?.headline || "Not available"}
                    </td>
                    <td className="border px-6 py-3">
                      <button
                        className="text-blueColor group-hover:text-white hover:underline"
                        onClick={() => handleViewDetails(student)}
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

        {/* Student Details Modal */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-blueColor">
                Student Details
              </h2>
              <div className="space-y-4 text-grayColor">
                <div>
                  <strong className="text-dark1">Name:</strong> {`${selectedStudent.first_name} ${selectedStudent.last_name}`}
                </div>
                <div>
                  <strong className="text-dark1">Email:</strong> {selectedStudent.email || "Not available"}
                </div>
                <div>
                  <strong className="text-dark1">Headline:</strong> {selectedStudent.headline || "Not available"}
                </div>
                <div>
                  <strong className="text-dark1">Biography:</strong> {selectedStudent.biography || "Not available"}
                </div>
                <div>
                  <strong className="text-dark1">Language:</strong> {selectedStudent.language || "Not available"}
                </div>
                <div>
                  <strong className="text-dark1">Website:</strong> {" "}
                  <a
                    href={selectedStudent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedStudent.website}
                  </a>
                </div>
                <div>
                  <strong className="text-dark1">Social Links:</strong>
                  <ul>
                    {selectedStudent.facebook && (
                      <li>
                        <a
                          href={selectedStudent.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                      </li>
                    )}
                    {selectedStudent.linkedin && (
                      <li>
                        <a
                          href={selectedStudent.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                      </li>
                    )}
                    {selectedStudent.youtube && (
                      <li>
                        <a
                          href={selectedStudent.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <strong className="text-dark1">Profile Picture:</strong>
                  <img
                    src={selectedStudent.profile_picture || "fallback-image-url"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full"
                  />
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="mt-4 text-dark2 hover:underline"
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

export default ManageStudents;
