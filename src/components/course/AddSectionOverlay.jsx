import React, { useState } from 'react';
import { useAddCourseSectionMutation } from '../../features/courseCategory/addCourseSectionApi';
import { useSelector } from 'react-redux';

const AddSectionOverlay = ({ isOpen, onClose , courseId }) => {
const { user_id } = useSelector((state) => state.auth); // Get teacherId from Redux store
; // Get course ID from route params
  const userId = user_id; // Replace with the actual user ID
  const [title, setTitle] = useState('');
  const [order, setOrder] = useState(null);

  const [addCourseSection, { isLoading, isError, isSuccess }] =
    useAddCourseSectionMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      order,
      course: courseId,
      instructor: userId,
    };

    try {
      await addCourseSection(payload).unwrap();
      alert('Section added successfully!');
      onClose(); // Close the overlay after successful submission
    } catch (err) {
      console.error('Failed to add section:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-blueColor">Add Course Section</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Order</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={order || ''}
              onChange={(e) => setOrder(Number(e.target.value))}
            />
          </div>
          <button
            type="submit"
            className="bg-blueColor hover:bg-blueColor/90 text-white py-2 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Section'}
          </button>
          <button
            type="button"
            className="bg-grayColor hover:bg-grayColor/90 text-white py-2 px-4 rounded ml-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
        {isError && <p className="text-red-500 mt-2">Failed to add section.</p>}
        {isSuccess && <p className="text-green-500 mt-2">Section added!</p>}
      </div>
    </div>
  );
};

export default AddSectionOverlay;
