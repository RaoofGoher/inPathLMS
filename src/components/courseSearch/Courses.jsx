import React from "react";
import { useState } from "react";
import { useGetCoursesBySubcategoryQuery } from "../../features/searchCourse/courseSlice";
import CourseCard from "./CourseCard";

const Courses = ({ subCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetCoursesBySubcategoryQuery(subCategory.id, { skip: !subCategory });

  if (!subCategory) {
    return <div>Please select a subcategory to view courses.</div>;
  }

  if (isLoading) return <div>Loading courses...</div>;
  if (isError) return <div>Error loading courses.</div>;
  const totalPages = Math.ceil(courses?.length / itemsPerPage);
  const currentCourses = courses?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl sm:text-2xl text-lightColor2 mb-4 text-center font-semibold">Courses </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mx-6 gap-4">
        {currentCourses?.map((course) => (
          <li key={course.id} className="px-4 py-2 bg-gray-100 rounded shadow-md">
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-4">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Courses;
