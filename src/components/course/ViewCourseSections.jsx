import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCourseSectionsQuery } from "../../features/courseCategory/getCourseSection";
import AddLectureOverlay from "./AddLectureOverlay";
import AddAssignmentOverlay from "./AddAssignmentOverlay";
import { useSelector } from "react-redux";

import { useGetTeacherProfileQuery } from "../../features/profile/teacher/teacherProfile";
// Video Modal Component
const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full z-10"
          onClick={onClose}
        >
          X
        </button>
        <video className="w-full rounded-md" src={videoUrl} controls autoPlay />
      </div>
    </div>
  );
};

const ViewCourseSection = () => {
  const { courseId } = useParams();
  const { data, error, isLoading, refetch } =
    useGetCourseSectionsQuery(courseId);
  const [sections, setSections] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isAssignmentOverlayOpen, setIsAssignmentOverlayOpen] = useState(false);
  const { user_id } = useSelector((state) => state.auth);
  const { data: profile } = useGetTeacherProfileQuery(user_id, {
    skip: !user_id, // Avoid fetching if user_id is not available
  });

  const handleAddAssignmentClick = (sectionId) => {
    setSelectedSectionId(sectionId);
    setIsAssignmentOverlayOpen(true);
  };

  const handleAssignmentOverlayClose = () => {
    setIsAssignmentOverlayOpen(false);
    setSelectedSectionId(null);
  };

  const handleAssignmentAdded = (newAssignment) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.section_id === selectedSectionId
          ? {
              ...section,
              assignments: [...(section.assignments || []), newAssignment],
            }
          : section
      )
    );
    handleAssignmentOverlayClose(); // Close the overlay after successful addition
  };

  // Sync sections from API response
  useEffect(() => {
    if (!isLoading && !error && data && sections.length === 0) {
      setSections(data.sections);
    }
  }, [isLoading, error, data, sections.length]);

  const handleAddLectureClick = (sectionId) => {
    setSelectedSectionId(sectionId);
    setIsOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
    setSelectedSectionId(null);
  };

  const handleLectureAdded = (newLecture) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.section_id === selectedSectionId
          ? {
              ...section,
              lectures: [...section.lectures, newLecture],
            }
          : section
      )
    );
    handleOverlayClose(); // Close the overlay
    refetch().then((response) => {
      // After refetch, update sections with the new data
      if (response?.data?.sections) {
        setSections(response.data.sections);
      }
    });
  };

  const handleLectureClick = (videoUrl) => {
    setVideoUrl(videoUrl);
    console.log("video lecture", videoUrl);
  };

  const handleVideoClose = () => {
    setVideoUrl(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log("sections", sections);
  return (
    <div className="p-6 bg-white">
      {profile ? (
        <>
          <h1 className="text-blueColor  text-2xl font-bold mb-4">
            Course Sections for {data.course_title}
          </h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {sections.map((section) => (
              <div
                key={section.section_id}
                className="border-2 shadow-md border-blueColor border-x-2 rounded-lg p-4 bg-white text-grayColor hover:shadow-lg transition-shadow"
              >
                <h2 className="font-semibold text-lg text-blueColor">
                  {section.section_title}
                </h2>
                <p>
                  Order:{" "}
                  <span className="font-medium text-dark1">
                    {section.order}
                  </span>
                </p>
                <p>
                  Lectures:{" "}
                  <span className="font-medium text-dark1">
                    {section.lectures.length}
                  </span>
                </p>
                <ul className="list-disc pl-4">
                  <li className="underline list-none text-dark1">Videos</li>
                  {section.lectures.map((lecture) => (
                    <li key={lecture.lecture_id}>
                      <button
                        className="text-blueColor underline hover:text-grayColor"
                        onClick={() => handleLectureClick(lecture.video_file)}
                      >
                        {lecture.lecture_title}
                      </button>
                    </li>
                  ))}
                </ul>
                <ul className="list-disc pl-4">
                  <li className="underline list-none text-dark1">
                    Assignments
                  </li>
                  {section.assignments.map((lecture) => (
                    <li key={lecture.lecture_id}>
                      <a
                        href={lecture.doc_files}
                        className="text-blueColor underline hover:text-grayColor"
                        // onClick={() => handleLectureClick(lecture.video_file)}
                      >
                        {lecture.assignment_title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap  justify- gap-4">
                  <button
                    onClick={() => handleAddLectureClick(section.section_id)}
                    className="  w-full sm:w-auto mt-2 text-sm bg-blueColor text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform hover:bg-blueColor/90 "
                  >
                    Add Lecture
                  </button>
                  <button
                    onClick={() => handleAddAssignmentClick(section.section_id)}
                    className="w-full sm:w-auto mt-2 bg-grayColor text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform hover:bg-grayColor/90 "
                  >
                    Add Assignment
                  </button>
                </div>
              </div>
            ))}
          </div>
          {isOverlayOpen && (
            <AddLectureOverlay
              sectionId={selectedSectionId}
              onClose={handleOverlayClose}
              onSuccess={handleLectureAdded}
            />
          )}
          {videoUrl && (
            <VideoModal videoUrl={videoUrl} onClose={handleVideoClose} />
          )}
          {isAssignmentOverlayOpen && (
            <AddAssignmentOverlay
              sectionId={selectedSectionId}
              onClose={handleAssignmentOverlayClose}
              onSuccess={handleAssignmentAdded}
            />
          )}
        </>
      ) : (
        <div className="text-center text-blueColor font-semibold">
          Please create your profile first.
        </div>
      )}
    </div>
  );
};

export default ViewCourseSection;
