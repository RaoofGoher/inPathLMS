import React, { useState } from "react";
import axios from "axios";

const CompleteCourseButton = ({ courseId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleCompleteCourse = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post(
        `https://api.inpath.us/teacher/course/complete/${courseId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("Course Submitted successfully!");
      console.log(response.data);

      // Show success message as an alert
      alert("Course Submitted successfully!");
    } catch (error) {
      setError("Error submitting the course.");
      console.error(error);

      // Show error message as an alert
      alert("Error submitting the course.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={handleCompleteCourse}
        className="flex-1 bg-green-500 text-white text-sm py-2 rounded hover:bg-green-400 transition-all"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default CompleteCourseButton;
