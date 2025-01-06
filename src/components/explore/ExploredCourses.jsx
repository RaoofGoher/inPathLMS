import React from "react";
import { useSelector } from "react-redux";
import { useGetCoursesBySubcategoryQuery } from "../../features/searchCourse/courseSlice";
import CourseCard from "./CourseCard";
import { useParams } from "react-router-dom";
import ScrollToTop  from "../ScrollToTop"

const ExploredCourses = () => {
  const subCategoryID = useSelector((state) => state.exploreSubCategoryID.subCategoryID);
  const { id } = useParams(); // Corrected destructuring
  
  // Conditional subCategoryID assignment: if there's no subCategoryID from Redux, use the one from params
  const finalSubCategoryID = subCategoryID || id;

  // Fetch courses based on the selected subcategory
  const { data: courses, isLoading, isError } = useGetCoursesBySubcategoryQuery(finalSubCategoryID);

  if (!finalSubCategoryID) return <div>Please select a subcategory to view courses.</div>;
  if (isLoading) return <div>Loading courses...</div>;
  if (isError) return <div>Failed to load courses.</div>;

  return (
   <>
   <ScrollToTop />
   
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
   </>
  );
};

export default ExploredCourses;
