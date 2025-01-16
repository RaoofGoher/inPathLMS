import React, { useState, useEffect } from 'react';
import { useGetTeacherProfileQuery, useUpdateTeacherProfileMutation } from "../../../features/profile/teacher/teacherProfile";
import { useSelector } from "react-redux";
import UploadProfilePicture from './UploadPicture';

const ProfileUpdateModal = ({ isOpen, onClose, profileData, onSuccess }) => {
  const [updateTeacherProfile, { isLoading, error }] = useUpdateTeacherProfileMutation();
  const [formData, setFormData] = useState(profileData || {});
  const { user_id } = useSelector((state) => state.auth);
  const { refetch } = useGetTeacherProfileQuery(user_id);

  useEffect(() => {
    if (profileData && profileData.full_name) {
      const [first_name, last_name] = profileData.full_name.split(' ');
      setFormData({
        ...profileData,
        first_name: first_name || '',
        last_name: last_name || '',
      });
    }
  }, [profileData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { first_name, last_name, ...rest } = formData;
      await updateTeacherProfile({
        id: user_id,
        data: { first_name, last_name, ...rest },
      }).unwrap();
      await refetch();

      onSuccess('Profile updated successfully!');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Failed to update profile');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <UploadProfilePicture />

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="degrees" className="block text-sm font-medium">Degrees</label>
              <input
                type="text"
                id="degrees"
                name="degrees"
                value={formData.degrees || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="teaching_experience" className="block text-sm font-medium">Teaching Experience</label>
              <input
                type="text"
                id="teaching_experience"
                name="teaching_experience"
                value={formData.teaching_experience || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="specialization" className="block text-sm font-medium">Specialization</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="teaching_history" className="block text-sm font-medium">Teaching History</label>
              <input
                type="text"
                id="teaching_history"
                name="teaching_history"
                value={formData.teaching_history || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            {/* Empty spaces for alignment if fields are uneven */}
            <div></div>
            <div></div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update Profile'}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">Failed to update profile. Please try again.</p>}
        <button onClick={onClose} className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
