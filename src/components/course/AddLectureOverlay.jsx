import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddLectureOverlay = ({ sectionId, onClose, onSuccess }) => {
  const { user_id } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: '',
    order: '',
    video: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, video: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = new FormData();
    payload.append('title', formData.title);
    payload.append('order', formData.order);
    payload.append('video_file', formData.video);
    payload.append('section', sectionId);
    payload.append('instructor', user_id);

    try {
      const response = await axios.post(
        'https://api.inpath.us/teacher/api/lectures/',
        payload
      );
      onSuccess(response.data);
      onClose(); // Close the overlay on success
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Add Lecture</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-1">
              Lecture Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="order" className="block font-medium mb-1">
              Order
            </label>
            <input
              type="number"
              id="order"
              name="order"
              value={formData.order}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="video" className="block font-medium mb-1">
              Video File
            </label>
            <input
              type="file"
              id="video"
              name="video"
              onChange={handleFileChange}
              className="w-full"
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Add Lecture'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLectureOverlay;
