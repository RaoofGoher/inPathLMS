import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useGetTeacherProfileQuery,
  useUpdateTeacherProfileMutation,
} from "../../../features/profile/teacher/teacherProfile";

const ProfileComponent = () => {
  const { user_id } = useSelector((state) => state.auth); // Get user_id from Redux store

  // Fetch Teacher Profile
  const {
    data: profile,
    isLoading,
    isError,
    refetch,
  } = useGetTeacherProfileQuery(user_id, {
    skip: !user_id, // Avoid fetching if user_id is not available
  });
  console.log(profile);

  // Mutation for updating profile
  const [updateTeacherProfile, { isLoading: isUpdating }] =
    useUpdateTeacherProfileMutation();

  // State for managing form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    bio: "",
    degrees: "",
    teaching_experience: "",
    specialization: "",
    teaching_history: "",
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
      alert("Profile updated successfully!");
      setIsEditing(false); // Stop editing after update

      // Refetch the profile to get the latest data
      refetch();
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while submitting the form.");
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
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        bio: profile.bio || "",
        degrees: profile.degrees || "",
        teaching_experience: profile.teaching_experience || "",
        specialization: profile.specialization || "",
        teaching_history: profile.teaching_history || "",
      });
    }
  }, [profile]);

  // Calculate full name
  const fullName = `${profile?.first_name || ''} ${profile?.last_name || ''}`.trim();

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Error fetching profile. Please try again.</p>;

  return (
    <>
   
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blueColor">
        Teacher Profile
      </h2>

      {isEditing ? (
        
        // Display Update Form
        <form
          onSubmit={handleSubmit}
          className="gap-4 sm:gap-6 shadow-md shadow-grayColor p-4 grid sm:grid-cols-2"
        >
          <div>
            <label htmlFor="first_name" className="block text-blueColor">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-blueColor">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          {/* Degrees */}
          <div>
            <label htmlFor="degrees" className="block text-blueColor">
              Degrees
            </label>
            <input
              type="text"
              id="degrees"
              name="degrees"
              value={formData.degrees}
              onChange={handleChange}
              placeholder="Enter your degrees"
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Teaching Experience */}
          <div>
            <label htmlFor="teaching_experience" className="block text-blueColor">
              Teaching Experience
            </label>
            <input
              type="number"
              id="teaching_experience"
              name="teaching_experience"
              value={formData.teaching_experience}
              onChange={handleChange}
              placeholder="Enter teaching experience in years"
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Teaching History */}
          <div>
            <label htmlFor="teaching_history" className="block text-blueColor">
              Teaching History
            </label>
            <textarea
              id="teaching_history"
              name="teaching_history"
              value={formData.teaching_history}
              onChange={handleChange}
              placeholder="Enter teaching history"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-blueColor">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Enter your bio"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          {/* Specialization */}
          <div>
            <label htmlFor="specialization" className="block text-blueColor">
              Specialization
            </label>
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

          {/* Submit Button */}
          <div className="grid grid-cols-2 gap-2 items-center">
            <button
              type="submit"
              disabled={isUpdating}
              className="bg-blueColor text-sm text-white sm:h-[80%] px-4 py-2 shadow-md hover:bg-blueColor/90 rounded-md"
            >
              {isUpdating ? "Submitting..." : "Update Profile"}
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
              }}
              className="bg-grayColor hover:bg-grayColor/90 text-sm text-white sm:h-[80%] px-4 py-2 rounded-lg shadow-md"
            >
              Back
            </button>
          </div>
        </form>
      ) : (
        // Display Profile Data
        <>
        <div className="max-w-2xl mx-auto bg-white text-blueColor p-6 rounded-lg shadow-lg shadow-grayColor space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-lg font-medium">
                <strong>Full Name:</strong>
              </p>
              <p className="text-grayColor">
                {fullName || "No full name available"}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-medium">
                <strong>Bio:</strong>
              </p>
              <p className="text-grayColor">
                {profile.bio || "No bio available"}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-medium">
                <strong>Degrees:</strong>
              </p>
              <p className="text-grayColor">
                {profile.degrees || "No degrees listed"}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-medium">
                <strong>Teaching Experience:</strong>
              </p>
              <p className="text-grayColor">
                {profile.teaching_experience} years
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-medium">
                <strong>Specialization:</strong>
              </p>
              <p className="text-grayColor">
                {profile.specialization || "No specialization listed"}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg font-medium">
                <strong>Teaching History:</strong>
              </p>
              <p className="text-grayColor">
                {profile.teaching_history || "No teaching history available"}
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blueColor text-white px-6 py-3 rounded-lg shadow-md hover:bg-blueColor/90"
            >
              Edit Profile
            </button>
          </div>
        </div>
        </>
      )}
    </div>
    </>
  );
};

export default ProfileComponent;
