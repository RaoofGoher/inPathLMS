import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddSectionOverlay from './AddSectionOverlay';

const EditCourse = () => {
  const { courseId } = useParams();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOpenOverlay = () => setIsOverlayOpen(true);
  const handleCloseOverlay = () => setIsOverlayOpen(false);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Course - {courseId}</h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleOpenOverlay}
      >
        Add Section
      </button>
      <AddSectionOverlay isOpen={isOverlayOpen} onClose={handleCloseOverlay} courseId={courseId} />
    </div>
  );
};

export default EditCourse;
