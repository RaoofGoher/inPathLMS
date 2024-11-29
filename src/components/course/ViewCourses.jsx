// src/components/ViewCourses.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetCoursesByTeacherIdQuery } from '../../features/courseCategory/getCourse';
import { useNavigate } from 'react-router-dom';

const ViewCourses = () => {
  const { user_id } = useSelector((state) => state.auth); // Get teacherId from Redux store
  const { data: courses, isLoading, isError } = useGetCoursesByTeacherIdQuery(user_id); // Fetch courses using RTK Query
  const navigate = useNavigate();

  // Navigate to EditCourse component with courseId
  const handleEditCourse = (courseId) => {
    navigate(`/dashboard/teacherdashboard/editcourse/${courseId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Your Courses</h2>

      {isLoading && <p>Loading courses...</p>}
      {isError && <p>Error fetching courses. Please try again.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={`https://api.inpath.us${course.thumbnail}`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => navigate(`/viewcourse/${course.id}`)}>View Course</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => handleEditCourse(course.id)}>Edit Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCourses;
