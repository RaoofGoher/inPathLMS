import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa"; // For approval icon

const AdminApproval = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Fetch courses with a 'pending' status
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://api.inpath.us/teacher/courses?status=pending"
        );
        setCourses(response.data);
      } catch (error) {
        setError("Error fetching pending courses.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Function to approve a course
  const handleApproveCourse = async (courseId) => {
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await axios.patch(
        `https://api.inpath.us/teacher/admin/course/approve/${courseId}`,
        {
          // You can add other data here if required by the API
          status: "approved", // Change status to 'approved'
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response is successful
      if (response.status === 200) {
        setMessage("Course approved successfully!");
        // Optionally, remove the approved course from the list
        setCourses(courses.filter((course) => course.id !== courseId));
      } else {
        setError("Error approving the course.");
      }
    } catch (error) {
      setError("Error approving the course.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-center text-blueColor mb-8">
        Pending Courses for Review
      </h2>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : message ? (
        <div className="text-green-500">{message}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-grayColor transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={
                    course.thumbnail || "https://via.placeholder.com/300x200"
                  }
                  alt={course.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 right-3 bg-blueColor text-white text-xs px-2 py-1 rounded">
                  {course.isNew ? "New" : "Featured"}
                </div>
              </div>
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-xl font-semibold text-blueColor mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-grayColor flex-grow mb-4">
                  {course.description || "No description available."}
                </p>
                <div className="flex justify-between items-center space-x-2">
                  {/* Approve Button */}
                  <button
                    className="flex-1 bg-green-600 text-white text-sm py-2 rounded hover:bg-green-500 transition-all"
                    onClick={() => handleApproveCourse(course.id)}
                  >
                    <FaCheckCircle className="mr-2" />
                    Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminApproval;
