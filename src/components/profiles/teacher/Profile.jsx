import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useGetTeacherProfileQuery,
  useUpdateTeacherProfileMutation,
} from '../../../features/profile/teacher/teacherProfile';

const ProfileComponent = () => {
  const { user_id } = useSelector((state) => state.auth); // Get user_id from Redux store

  // Fetch Teacher Profile
  const { data: profile, isLoading, isError, refetch } = useGetTeacherProfileQuery(user_id, {
    skip: !user_id, // Avoid fetching if user_id is not available
  });

  // Mutation for updating profile
  const [updateTeacherProfile, { isLoading: isUpdating }] = useUpdateTeacherProfileMutation();

  // State for managing form data
  const [formData, setFormData] = useState({
    bio: '',
    degrees: '',
    teaching_experience: '',
    specialization: '',
    teaching_history: '',
  });

  // Show form when editing
  const [isEditing, setIsEditing] = useState(false);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      user: user_id, // Add user ID to the payload
    };

    try {
      await updateTeacherProfile({ id: user_id, data: payload }).unwrap();
      alert('Profile updated successfully!');
      setIsEditing(false); // Stop editing after update

      // Refetch the profile to get the latest data
      refetch();
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred while submitting the form.');
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Prefill form if profile data exists
  useEffect(() => {
    if (profile) {
      setFormData({
        bio: profile.bio || '',
        degrees: profile.degrees || '',
        teaching_experience: profile.teaching_experience || '',
        specialization: profile.specialization || '',
        teaching_history: profile.teaching_history || '',
      });
    }
  }, [profile]);

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Error fetching profile. Please try again.</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-primaryColor">Teacher Profile</h2>

      {isEditing ? (
        // Display Update Form
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-gray-700">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Enter your bio"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Degrees */}
          <div>
            <label htmlFor="degrees" className="block text-gray-700">Degrees</label>
            <input
              type="text"
              id="degrees"
              name="degrees"
              value={formData.degrees}
              onChange={handleChange}
              placeholder="Enter your degrees"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Teaching Experience */}
          <div>
            <label htmlFor="teaching_experience" className="block text-gray-700">Teaching Experience</label>
            <input
              type="number"
              id="teaching_experience"
              name="teaching_experience"
              value={formData.teaching_experience}
              onChange={handleChange}
              placeholder="Enter teaching experience in years"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Specialization */}
          <div>
            <label htmlFor="specialization" className="block text-gray-700">Specialization</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Enter your specialization"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Teaching History */}
          <div>
            <label htmlFor="teaching_history" className="block text-gray-700">Teaching History</label>
            <textarea
              id="teaching_history"
              name="teaching_history"
              value={formData.teaching_history}
              onChange={handleChange}
              placeholder="Enter teaching history"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isUpdating}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {isUpdating ? 'Submitting...' : 'Update Profile'}
            </button>
            <button
          onClick={()=>{setIsEditing(false)}}
          className="bg-gray-500 text-white ml-8 px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Back
        </button>
          </div>
        </form>
      ) : (
        // Display Profile Data
        <div className="max-w-2xl mx-auto bg-secondaryColor text-white p-6 rounded-lg shadow-lg space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-lg font-medium text-gray-700"><strong>Bio:</strong></p>
              <p className="text-gray-600">{profile.bio || 'No bio available'}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-medium text-gray-700"><strong>Degrees:</strong></p>
              <p className="text-gray-600">{profile.degrees || 'No degrees listed'}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-medium text-gray-700"><strong>Teaching Experience:</strong></p>
              <p className="text-gray-600">{profile.teaching_experience} years</p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-medium text-gray-700"><strong>Specialization:</strong></p>
              <p className="text-gray-600">{profile.specialization || 'No specialization listed'}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-medium text-gray-700"><strong>Teaching History:</strong></p>
              <p className="text-gray-600">{profile.teaching_history || 'No teaching history available'}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-primaryColor text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Edit Profile
            </button>
          </div>
        </div>

      )}
    </div>
  );
};

export default ProfileComponent;
