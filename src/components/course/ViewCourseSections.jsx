import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCourseSectionsQuery } from '../../features/courseCategory/getCourseSection';
import AddLectureOverlay from './AddLectureOverlay';
import AddAssignmentOverlay from "./AddAssignmentOverlay";

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
        <video
          className="w-full rounded-md"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          autoPlay
        />
      </div>
    </div>
  );
};

const ViewCourseSection = () => {
  const { courseId } = useParams();
  const { data, error, isLoading } = useGetCourseSectionsQuery(courseId);
  const [sections, setSections] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isAssignmentOverlayOpen, setIsAssignmentOverlayOpen] = useState(false);


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
  };

  const handleLectureClick = (videoUrl) => {
    setVideoUrl(videoUrl);
  };

  const handleVideoClose = () => {
    setVideoUrl(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Course Sections for {data.course_title}</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.section_id}
            className="border rounded shadow-md p-4 hover:shadow-lg"
          >
            <h2 className="font-semibold text-lg">{section.section_title}</h2>
            <p>Order: {section.order}</p>
            <p>Lectures: {section.lectures.length}</p>
            <ul className="list-disc pl-4">
              {section.lectures.map((lecture) => (
                <li key={lecture.lecture_id}>
                  <button
                    className="text-blue-500 underline"
                    onClick={() => handleLectureClick(lecture.video_file)}
                  >
                    {lecture.lecture_title}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleAddLectureClick(section.section_id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Lecture
            </button>
            <button
              onClick={() => handleAddAssignmentClick(section.section_id)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Assignment
            </button>
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
      {videoUrl && <VideoModal videoUrl={videoUrl} onClose={handleVideoClose} />}
      {isAssignmentOverlayOpen && (
        <AddAssignmentOverlay
          sectionId={selectedSectionId}
          onClose={handleAssignmentOverlayClose}
          onSuccess={handleAssignmentAdded}
        />
      )}
    </div>
  );
};

export default ViewCourseSection;
