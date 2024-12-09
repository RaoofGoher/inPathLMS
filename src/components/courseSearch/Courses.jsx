import React from "react";
import { useGetCoursesBySubcategoryQuery } from "../../features/searchCourse/courseSlice";
import CourseCard from "./CourseCard";

const Courses = ({ subCategory }) => {
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetCoursesBySubcategoryQuery(subCategory.id, { skip: !subCategory });

  if (!subCategory) {
    return <div>Please select a subcategory to view courses.</div>;
  }
  console.log("Subcategory passed to Courses:", subCategory.id || "No subcategory selected");
  console.log("here are courses,",courses)
    if (isLoading) return <div>Loading courses...</div>;
  if (isError) return <div>Error loading courses.</div>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Courses in {subCategory.id}</h2>
      <ul className="grid grid-cols-3 gap-4">
        {courses?.map((course) => (
          <li key={course.id} className="px-4 py-2 bg-gray-100 rounded shadow-md">
           <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
