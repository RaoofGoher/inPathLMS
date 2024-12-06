import React, { useState } from "react";
import { FaPencilAlt, FaTrash, FaSearch } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ManageTeachers = () => {
  // Dummy data for the teachers
  const [teachers, setTeachers] = useState([
    { id: 1, name: "John Doe", subject: "Math" },
    { id: 2, name: "Jane Smith", subject: "Science" },
    { id: 3, name: "Mark Johnson", subject: "History" },
    { id: 4, name: "Alice Brown", subject: "Literature" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [newTeacherData, setNewTeacherData] = useState({
    name: "",
    subject: "",
  });

  // Handle Delete Teacher
  const handleDeleteTeacher = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    }
  };

  // Handle Edit Teacher
  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher.id);
    setNewTeacherData({ name: teacher.name, subject: teacher.subject });
  };

  const handleSaveEdit = (id) => {
    setTeachers(
      teachers.map((teacher) =>
        teacher.id === id ? { ...teacher, ...newTeacherData } : teacher
      )
    );
    setEditingTeacher(null); // Exit edit mode
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Count the number of teachers per subject
  const subjectCount = teachers.reduce((acc, teacher) => {
    acc[teacher.subject] = (acc[teacher.subject] || 0) + 1;
    return acc;
  }, {});

  // Pie chart data for subject distribution
  const pieChartData = {
    labels: Object.keys(subjectCount),
    datasets: [
      {
        data: Object.values(subjectCount),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Example colors
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primaryColor">
          Manage Teachers
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Edit or remove teachers from the system.
        </p>
      </div>

      {/* Pie Chart Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-secondaryColor mb-4">
          Teacher Distribution by Subject
        </h2>
        <div
          className="w-full"
          style={{ position: "relative", height: "300px" }}
        >
          <Pie
            data={pieChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false, // Ensures the chart resizes properly
            }}
          />
        </div>
      </div>

      {/* Search/Filter Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-secondaryColor mb-4">
          Search Teachers
        </h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or subject"
            className="w-full sm:w-1/2 p-2 border rounded-md"
          />
          <button className="bg-primaryColor text-white p-2 rounded-md flex items-center gap-2">
            <FaSearch />
            Search
          </button>
        </div>
      </div>

      {/* Teachers Table Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-secondaryColor mb-4">
          All Teachers
        </h2>
        {filteredTeachers.length === 0 ? (
          <p className="text-center text-gray-600">No teachers found</p>
        ) : (
          <table className="w-full table-auto text-left text-gray-700">
            <thead>
              <tr>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Subject</th>
                <th className="p-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="p-2 border-b">
                    {editingTeacher === teacher.id ? (
                      <input
                        type="text"
                        value={newTeacherData.name}
                        onChange={(e) =>
                          setNewTeacherData({
                            ...newTeacherData,
                            name: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded-md"
                      />
                    ) : (
                      teacher.name
                    )}
                  </td>
                  <td className="p-2 border-b">
                    {editingTeacher === teacher.id ? (
                      <input
                        type="text"
                        value={newTeacherData.subject}
                        onChange={(e) =>
                          setNewTeacherData({
                            ...newTeacherData,
                            subject: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded-md"
                      />
                    ) : (
                      teacher.subject
                    )}
                  </td>
                  <td className="p-2 border-b flex space-x-2">
                    {editingTeacher === teacher.id ? (
                      <button
                        onClick={() => handleSaveEdit(teacher.id)}
                        className="text-green-500 hover:underline"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditTeacher(teacher)}
                        className="text-yellow-500 hover:underline"
                      >
                        <FaPencilAlt />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteTeacher(teacher.id)}
                      className="text-red-500 hover:underline"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageTeachers;
