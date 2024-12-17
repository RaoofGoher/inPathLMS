import React from "react";
import { useGetCoursesQuery } from "../features/explore/getall";

const CourseOfferings = () => {
  const { data: categories, isLoading, isError } = useGetCoursesQuery();
  console.log("here is data from course offering",categories)
  // Define an array of course titles
  const courseTitles = [
    { title: "Certification Preparation" },
    { title: "Development" },
    { title: "Business" },
    { title: "Finance & Accounting" },
    { title: "IT & Software" },
    { title: "Office Productivity" },
    { title: "Personal Development" },
    { title: "Design" },
    { title: "Marketing" },
    { title: "Lifestyle" },
    { title: "Photography & Video" },
    { title: "Teaching & Academic" },
  ];

  return (
    <section className="bg-white px-16 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blueColor underline">
          Course Offerings
        </h1>
      </div>

      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-12">
        {/* Mapping through courseTitles array to create buttons */}
        {categories?.map((course, index) => (
          <button
            key={index}
            className="hover:bg-blueColor text-xs sm:text-lg  font-bold hover:text-white border-2 hover:border-white hover:ring-2 ring-blueColor border-blueColor text-blueColor px-4 py-2 rounded-xl"
          >
            {course.name}
          </button>
        ))} 
      </div>
      <button className="w-full text-3xl hover:bg-blueColor/90 bg-blueColor text-white font-bold px-4 py-2 rounded-xl mt-8"> More </button>
    </section>
  );
};

export default CourseOfferings;
