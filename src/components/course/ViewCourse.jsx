import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetCourseSectionsQuery } from "../../features/courseCategory/getCourseSection";
import { useSelector } from "react-redux";

const ViewCourse = () => {
  const { course_id } = useParams();
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetCourseSectionsQuery(course_id);
  const { user_id } = useSelector((state) => state.auth);

  const [currentVideo, setCurrentVideo] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  // Initialize with the first video when data is loaded
  useEffect(() => {
    if (courses && courses.sections && courses.sections.length > 0) {
      const firstSection = courses.sections.find(
        (section) => section.lectures.length > 0
      );
      if (firstSection) {
        setCurrentVideo(firstSection.lectures[0].video_file);
      }
    }
  }, [courses]);

  const toggleSection = (sectionId) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  const playVideo = (videoFile) => {
    setCurrentVideo(videoFile);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !courses) return <div>Error loading course.</div>;

  return (
    <div className="flex flex-col lg:flex-row-reverse bg-white h-screen rounded-lg shadow-md overflow-hidden">
      {/* Course Sections */}
      <div
        className="lg:w-2/5 w-full lg:border-r border-blueColor p-4 overflow-y-auto bg-white order-2 lg:order-1"
        style={{ height: "60vh" }}
      >
        
        <h2 className="text-xl font-bold text-blueColor mb-4">
          {courses.course_title}
        </h2>
        {courses.sections.map((section) => (
          <div key={section.section_id} className="mb-4">
            {/* Section Title */}
            <div
              onClick={() => toggleSection(section.section_id)}
              className="cursor-pointer font-semibold bg-blueColor text-white px-4 py-2 rounded-md hover:bg-blueColor/90 transition-colors"
            >
              {section.section_title}
            </div>

            {/* Lectures */}
            {expandedSections[section.section_id] && (
              
              <div className="mt-2 pl-4">
                {section.lectures.map((lecture) => (
                  <div
                    key={lecture.lecture_id}
                    onClick={() => playVideo(lecture.video_file)}
                    className={`cursor-pointer text-grayColor px-2 py-1 rounded hover:bg-blueColor transition-colors ${
                      lecture.video_file === currentVideo
                        ? "text-white bg-blueColor font-medium"
                        : "hover:text-white"
                    }`}
                  >
                    {lecture.lecture_title}
                  </div>
                ))} 
                {section.lectures.length === 0 && (
                  <div className="text-dark2 italic">
                    No lectures available.
                  </div>
                )}
              </div>
              
            )}
          </div>
        ))}
      </div>

      {/* Video Player Section */}
      
      <div
        className="lg:flex-1 w-full lg:order-2 order-1 flex-col flex items-center gap-2 justify-center bg-white p-6"
        style={{
          height: "calc(100vh - 40vh)", // Adjust height based on viewport
        }}  
      >
        <div className="flex items-center justify-end w-full">
        <Link to={`/dashboard/studentdashboard/mycourses/${course_id}`} >
          <button
            className="bg-blueColor font-semibold text-white px-2 py-2 rounded-md shadow-md 
                 hover:bg-blueColor/90 transition-all"
          >
          Back
          </button>
        </Link>
        </div>
   
        {currentVideo ? (
          <video
            controls
            autoPlay
            className="rounded-md border border-blueColor"
            style={{
              width: "80%", // Maintain a consistent video size
              height: "80%", // Relative to its container
            }}
          >
            <source src={currentVideo} type="video/mp4" className="text-blueColor" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="text-dark1 text-center text-lg font-medium">
            Welcome to the course, please select a video to continue.
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ViewCourse;
