import React, { useState, useEffect } from "react";
import { useGetStudentProfileQuery } from "../../../features/studentProfile/studentProfileApi";
import { useUploadProfilePictureMutation } from "../../../features/studentProfile/studentProfileImageApi";

const ProfilePhotoUpload = ({ id }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const { data, isLoading, refetch } = useGetStudentProfileQuery(id);
  const [uploadProfilePicture, { isLoading: isUploading }] = useUploadProfilePictureMutation();
console.log("data",data);
  useEffect(() => {
    if (data && data.profile && data.profile.profile_picture) {
      setImagePreview(data.profile.profile_picture);
    }
  }, [data]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput?.files[0];
    
    if (file) {
      try {
       const response =  await uploadProfilePicture({ profile_picture: file, user_id: id }).unwrap();
       refetch(); 
       alert("Profile photo saved!");
      } catch (error) {
        console.error("Error uploading profile picture", error);
        alert("Failed to upload profile photo.");
      }
    } else {
      alert("No image selected.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Photo</h1>
      <p className="text-gray-600 mb-4">Add a nice photo of yourself for your profile.</p>
      <div className="border border-gray-300 rounded-lg p-4 flex justify-center items-center">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-md"
          />
        ) : (
          <p className="text-gray-500">No picture available</p>
        )}
      </div>
      <div className="mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
        />
      </div>
      <button
        onClick={handleSave}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        disabled={isUploading}
      >
        {isUploading ? 'Uploading...' : 'Save'}
      </button>
    </div>
  );
};

export default ProfilePhotoUpload;
