import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AddLectureOverlay = ({ sectionId, onClose, onSuccess }) => {
  const { user_id } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    order: "",
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
    payload.append("title", formData.title);
    payload.append("order", formData.order);
    payload.append("video_file", formData.video);
    payload.append("section", sectionId);
    payload.append("instructor", user_id);
    try {
      const response = await axios.post(
        "https://api.inpath.us/teacher/lectures/",
        payload
      );
      onSuccess(response.data);
      onClose(); // Close the overlay on success
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4 text-blueColor">Add Lecture</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block font-medium mb-1 text-dark1"
            >
              Lecture Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full rounded p-2 text-dark1 focus:outline-none focus:ring-2 focus:ring-blueColor"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="order"
              className="block font-medium mb-1 text-dark1"
            >
              Order
            </label>
            <input
              type="number"
              id="order"
              name="order"
              value={formData.order}
              onChange={handleInputChange}
              className="w-full border border-lightColor3 rounded p-2 text-dark1 focus:outline-none focus:ring-2 focus:ring-blueColor"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="video"
              className="block font-medium mb-1 text-dark1"
            >
              Video File
            </label>
            <input
              type="file"
              id="video"
              name="video"
              onChange={handleFileChange}
              className="w-full text-blueColor focus:outline-none focus:ring-2 focus:ring-blueColor p-2 rounded-md"
              required
            />
          </div>
          {error && <p className="text-grayColor mb-4">{error}</p>}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-grayColor text-white hover:bg-grayColor/90 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blueColor hover:bg-blueColor/90 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-lightColor1"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Add Lecture"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLectureOverlay;
