import React, { useState } from 'react';

const ManageStudents = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', enrollmentDate: '2024-01-15', status: 'Active' },
    { id: 2, name: 'John Smith', email: 'john.smith@example.com', enrollmentDate: '2024-02-20', status: 'Inactive' },
    { id: 3, name: 'Alex Johnson', email: 'alex.johnson@example.com', enrollmentDate: '2024-03-10', status: 'Active' },
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-lightColor2 rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold mb-6 text-dark1">Manage Students</h1>

      {/* Search Section */}
      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          className="p-3 w-1/3 border-2 border-lightColor1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
        />
      </div>

      {/* Student List Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-dark1">Student List</h2>
        <table className="w-full table-auto border-collapse border border-lightColor1 rounded-lg">
          <thead>
            <tr className="bg-lightColor1">
              <th className="border px-6 py-3 text-left text-dark1">Name</th>
              <th className="border px-6 py-3 text-left text-dark1">Email</th>
              <th className="border px-6 py-3 text-left text-dark1">Enrollment Date</th>
              <th className="border px-6 py-3 text-left text-dark1">Status</th>
              <th className="border px-6 py-3 text-left text-dark1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-lightColor1">
                <td className="border px-6 py-3">{student.name}</td>
                <td className="border px-6 py-3">{student.email}</td>
                <td className="border px-6 py-3">{student.enrollmentDate}</td>
                <td className="border px-6 py-3">{student.status}</td>
                <td className="border px-6 py-3">
                  <button
                    className="text-primaryColor hover:underline"
                    onClick={() => handleViewDetails(student)}
                  >
                    View Details
                  </button>
                  <button
                    className="ml-4 text-dark2 hover:underline"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Details Section */}
      {selectedStudent && (
        <div className="mt-6 bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-dark1">Student Details</h2>
          <div className="space-y-4">
            <div>
              <strong className="text-dark1">Name:</strong> {selectedStudent.name}
            </div>
            <div>
              <strong className="text-dark1">Email:</strong> {selectedStudent.email}
            </div>
            <div>
              <strong className="text-dark1">Enrollment Date:</strong> {selectedStudent.enrollmentDate}
            </div>
            <div>
              <strong className="text-dark1">Status:</strong> {selectedStudent.status}
            </div>
          </div>

          <button
            onClick={() => setSelectedStudent(null)} // Close details
            className="mt-4 text-dark2 hover:underline"
          >
            Close Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageStudents;
