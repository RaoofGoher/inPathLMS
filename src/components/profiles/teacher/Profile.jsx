
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import ProfileUpdateModal from "./UpdateProfile";
import React, { useState, useEffect } from 'react';
import Default from ".././../../assets/vector.png"

const Profile = ({ data }) => {
  const { full_name, bio, degrees, teaching_experience, specialization, teaching_history, profile_picture } = data;
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    
  };

  const handleSuccess = (message) => {
    alert(message); // Alert on success (could be customized)
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blueColor text-white h-40 flex items-center px-8 sm:px-16 md:px-32 lg:px-64">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold">
            {full_name || "John Son"}
          </h1>
          <p className="text-sm sm:text-sm md:text-lg max-w-xl">
            {bio || "Passionate educator and lifelong learner, helping individuals unlock their potential through accessible and engaging learning experiences."}
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 gap-8 sm:px-32">
        <div className="flex flex-col items-center text-center sm:text-left">
          <img
            className="rounded-full w-28 h-28 sm:w-36 sm:h-36 shadow-lg"
            src={profile_picture || Default}
            alt={`Profile picture of ${full_name || "John Son"}`}
          />
          <div className="mt-4 flex gap-4 justify-center sm:justify-start items-center">
            {/* Social Media Icons */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-gray-600 text-2xl hover:text-blue-600 transition-all duration-300" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-600 text-2xl hover:text-blue-700 transition-all duration-300" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-gray-600 text-2xl hover:text-red-600 transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="max-w-3xl text-gray-800 text-sm sm:text-sm">
          <p>
            {`I am a dedicated educator with ${teaching_experience || "years of"} experience in ${specialization || "your field"}.`}
          </p>
          <p className="mt-4">
            {`I have taught at ${teaching_history || "various institutions"}.`}
          </p>
          <p className="mt-4">
            {`My academic background includes degrees in ${degrees || "relevant fields"}.`}
          </p>
        </div>
      </div>

      {/* Update Button Section */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-blueColor text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-all duration-300"
          onClick={handleOpenModal}
        >
          Update Profile
        </button>
      </div>
      <ProfileUpdateModal
        isOpen={isModalOpen} // Modal visibility
        onClose={handleCloseModal} // Close modal function
        profileData={data} // Pass current profile data to modal
        onSuccess={handleSuccess} // Success callback
      />
    </div>
  );
};

export default Profile;
