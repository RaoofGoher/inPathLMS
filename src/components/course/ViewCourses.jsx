import React from "react";
import { useSelector } from "react-redux";
import { useGetCoursesByTeacherIdQuery } from "../../features/courseCategory/getCourse";
import { useNavigate , Link } from "react-router-dom";
import { useGetTeacherProfileQuery } from "../../features/profile/teacher/teacherProfile";

const ViewCourses = () => {
  const { user_id } = useSelector((state) => state.auth);
  const { data: courses, isLoading } = useGetCoursesByTeacherIdQuery(user_id);
  const { data: profile } = useGetTeacherProfileQuery(user_id, {
    skip: !user_id,
  });
  const navigate = useNavigate();

  const handleAddCourseSection = (courseId) => {
    navigate(`/dashboard/teacherdashboard/editcourse/${courseId}`);
  };
  const handleViewCourseSection = (courseId) => {
    navigate(
      `/dashboard/teacherdashboard/viewcourse/viecoursesections/${courseId}`
    );
  };
  const handleViewCourse = (courseId) => {
    navigate(`/dashboard/teacherdashboard/viewcourse/${courseId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="w-full flex justify-end items-center mb-8">
        <Link to={"/dashboard/teacherdashboard"}>
          <button
            className="  bg-dark2 font-semibold text-white px-2 py-2 rounded-md shadow-md 
                 hover:bg-light3 hover:text-dark1 transition-all"
          >
            Back
          </button>
        </Link>
      </div>

      <h2 className="text-3xl font-extrabold text-center text-primaryColor mb-8">
        Your Courses
      </h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primaryColor border-opacity-80"></div>
        </div>
      ) : profile ? (
        courses?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={
                      course.thumbnail || "https://via.placeholder.com/300x200"
                    }
                    alt={course.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3 bg-primaryColor text-white text-xs px-2 py-1 rounded">
                    {course.isNew ? "New" : "Featured"}
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="text-xl font-semibold text-dark1 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow mb-4">
                    {course.description || "No description available."}
                  </p>
                  <div className="flex justify-between items-center space-x-2">
                    <button
                      className="flex-1 bg-secondaryColor text-white text-sm py-2 rounded hover:bg-primaryColor transition-all"
                      onClick={() => handleViewCourseSection(course.id)}
                    >
                      View Sections
                    </button>
                    <button
                      className="flex-1 bg-lightColor1 text-white text-sm py-2 rounded hover:bg-orange-500 transition-all"
                      onClick={() => handleAddCourseSection(course.id)}
                    >
                      Add Section
                    </button>
                    <button
                      className="flex-1 bg-dark2 text-white text-sm py-2 rounded hover:bg-red-600 transition-all"
                      onClick={() => handleViewCourse(course.id)}
                    >
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <img
              src="https://via.placeholder.com/150"
              alt="No courses"
              className="mx-auto w-40 mb-6"
            />
            <p className="text-lg text-gray-500 mb-4">
              You don't have any courses yet. Start creating one!
            </p>
            <button
              className="bg-primaryColor text-white py-2 px-6 rounded hover:bg-secondaryColor transition-all"
              onClick={() =>
                navigate("/dashboard/teacherdashboard/createcourse")
              }
            >
              Create Course
            </button>
          </div>
        )
      ) : (
        <div className="text-center mt-20">
          <img
            src="https://via.placeholder.com/150"
            alt="No profile"
            className="mx-auto w-40 mb-6"
          />
          <p className="text-lg text-gray-500 mb-4">
            You don't have a profile yet.
          </p>
          <button
            className="bg-primaryColor text-white py-2 px-6 rounded hover:bg-secondaryColor transition-all"
            onClick={() =>
              navigate("/dashboard/teacherdashboard/createprofile")
            }
          >
            Create Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewCourses;
