import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialStrip = () => {
  return (
    <div className="bg-[#b6d2f3] py-2 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {/* Facebook */}
          <Link
            to="https://facebook.com"
            className="flex flex-col items-center bg-primaryColor p-4 rounded-lg shadow-lg w-24 sm:w-32 hover:bg-blue-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white text-3xl mb-2" />
            <span className="text-white text-sm">Facebook</span>
          </Link>

          {/* Twitter */}
          <Link
            to="https://twitter.com"
            className="flex flex-col items-center bg-primaryColor p-4 rounded-lg shadow-lg w-24 sm:w-32 hover:bg-blue-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-3xl mb-2" />
            <span className="text-white text-sm">Twitter</span>
          </Link>

          {/* Instagram */}
          <Link
            to="https://instagram.com"
            className="flex flex-col items-center bg-primaryColor p-4 rounded-lg shadow-lg w-24 sm:w-32 hover:bg-pink-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-3xl mb-2" />
            <span className="text-white text-sm">Instagram</span>
          </Link>

          {/* LinkedIn */}
          <Link
            to="https://linkedin.com"
            className="flex flex-col items-center bg-primaryColor p-4 rounded-lg shadow-lg w-24 sm:w-32 hover:bg-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-3xl mb-2" />
            <span className="text-white text-sm">LinkedIn</span>
          </Link>

          {/* YouTube */}
          <Link
            to="https://youtube.com"
            className="flex flex-col items-center bg-primaryColor p-4 rounded-lg shadow-lg w-24 sm:w-32 hover:bg-red-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-white text-3xl mb-2" />
            <span className="text-white text-sm">YouTube</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialStrip;
