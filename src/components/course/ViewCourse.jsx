import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCourseSectionsQuery } from "../../features/courseCategory/getCourseSection";

const ViewCourse = () => {
  const { courseId } = useParams();
  const { data: courses, isLoading, isError } = useGetCourseSectionsQuery(courseId);

  const [currentVideo, setCurrentVideo] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  // Initialize with the first video when data is loaded
  useEffect(() => {
    if (courses && courses.sections && courses.sections.length > 0) {
      const firstSection = courses.sections.find((section) => section.lectures.length > 0);
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
  if (isError || !courses) return <div>Error loading course sections.</div>;

  return (
    <div style={{ display: "flex", height: "60vh" }}>
      {/* Video Player Section */}
      <div style={{ flex: 2, padding: "20px" }}>
        {currentVideo ? (
          <video controls autoPlay style={{ width: "100%", height: "100%" }}>
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div>Welcome to the course please select a video to continue.</div>
        )}
      </div>

      {/* Course Sections */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          borderLeft: "1px solid #ddd",
          padding: "10px 20px",
        }}
      >
        <h2>{courses.course_title}</h2>
        {courses.sections.map((section) => (
          <div key={section.section_id} style={{ marginBottom: "20px" }}>
            <div
              onClick={() => toggleSection(section.section_id)}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                background: "#f5f5f5",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {section.section_title}
            </div>
            {expandedSections[section.section_id] && (
              <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
                {section.lectures.map((lecture) => (
                  <div
                    key={lecture.lecture_id}
                    onClick={() => playVideo(lecture.video_file)}
                    style={{
                      cursor: "pointer",
                      padding: "5px 0",
                      color: lecture.video_file === currentVideo ? "blue" : "black",
                    }}
                  >
                    {lecture.lecture_title}
                  </div>
                ))}
                {section.lectures.length === 0 && <div>No lectures available.</div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCourse;
