// src/components/UploadProfilePicture.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUploadProfilePictureMutation } from '../../../features/profile/teacher/profilePicture';
import { updateUserProfilePicture } from '../../../features/auth/authSlice';
import { useGetTeacherProfileQuery} from "../../../features/profile/teacher/teacherProfile";

const UploadProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const { user_id } = useSelector((state) => state.auth);
  const [uploadProfilePicture, { isLoading }] = useUploadProfilePictureMutation();
  const dispatch = useDispatch();
  const { refetch } = useGetTeacherProfileQuery(user_id);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 3 * 1024 * 1024) {
        setError('File size should not exceed 3MB');
        return;
      }
      setError('');
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    try {
      const response = await uploadProfilePicture({ profile_picture: file, user_id }).unwrap();
      dispatch(updateUserProfilePicture(response.profile_picture_url)); // Assuming API returns the new profile picture URL
      setFile(null);
      await refetch();
      alert('Profile picture updated successfully!');
    } catch (err) {
      setError('Failed to upload profile picture');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto border-2">
      <h2 className="text-xl font-bold mb-4">Upload Profile Picture</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 mb-4"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleUpload}
        disabled={isLoading}
        className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadProfilePicture;
