import { useState } from "react";
import axios from "axios";

const AddAssignmentOverlay = ({ sectionId, onClose, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 15 * 1024 * 1024) {
      setError("File size must not exceed 15MB.");
    } else {
      setFile(selectedFile);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !order || !file || !description) {
      setError("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("order", order);
    formData.append("section_id", sectionId);
    formData.append("file", file);
    formData.append("description", description);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.inpath.us/teacher/assignments/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onSuccess(response.data);
      console.log("assignemnt", response.data); // Pass the new assignment to the parent
      onClose(); // Close the overlay
    } catch (error) {
      setError("Failed to add assignment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2">
        <h2 className="text-lg font-bold mb-4 text-blueColor">Add Assignment</h2>
        {error && <p className="text-grayColor">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Order</label>
            <input
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>  
          <div className="mb-4">
            <label className="block text-sm font-medium">File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border rounded px-3 py-2 text-blueColor"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-grayColor hover:bg-grayColor/90 text-white px-4 py-2 rounded "
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blueColor hover:bg-blueColor/90 text-white px-4 py-2 rounded "
            >
              {loading ? "Adding..." : "Add Assignment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignmentOverlay;
