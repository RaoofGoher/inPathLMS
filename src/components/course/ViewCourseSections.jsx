import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCourseSectionsQuery } from '../../features/courseCategory/getCourseSection';
import AddLectureOverlay from './AddLectureOverlay';

const ViewCourseSection = () => {
  const { courseId } = useParams();
  const { data, error, isLoading } = useGetCourseSectionsQuery(courseId);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(null);

  const handleAddLectureClick = (sectionId) => {
    setSelectedSectionId(sectionId);
    setIsOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
    setSelectedSectionId(null);
  };

  const handleLectureAdded = (newLecture) => {
    console.log('Lecture Added:', newLecture);
    // Optionally, you can update the section data dynamically
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Course Sections for {data.course_title}</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.sections.map((section) => (
          <div
            key={section.section_id}
            className="border rounded shadow-md p-4 hover:shadow-lg"
          >
            <h2 className="font-semibold text-lg">{section.section_title}</h2>
            <p>Order: {section.order}</p>
            <p>Lectures: {section.lectures.length}</p>
            <button
              onClick={() => handleAddLectureClick(section.section_id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Lecture
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
    </div>
  );
};

export default ViewCourseSection;
