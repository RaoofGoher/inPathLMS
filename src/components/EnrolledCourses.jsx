import React from "react";
import { useSelector } from "react-redux";
import { useGetEnrolledCoursesQuery } from "../features/enrollments/enrolledCourseAPi";
import { useNavigate } from "react-router-dom";

const EnrolledCourses = () => {
  const { user_id } = useSelector((state) => state.auth);
  const { data: courses, error, isLoading } = useGetEnrolledCoursesQuery(user_id, {
    skip: !user_id, // Skip query if user_id is not available
  });
  const navigate = useNavigate()
console.log(courses, user_id)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || "Failed to load coursesss."}</div>;
  const handleViewCourse = (course_id)=>{
    navigate(`/dashboard/studentdashboard/mycourses/viewcourse/${course_id}`)
  } 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Enrolled Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-200 rounded-lg shadow-lg p-4"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-500 font-bold">
                ${course.price}
              </span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>{handleViewCourse(course.id)}}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
