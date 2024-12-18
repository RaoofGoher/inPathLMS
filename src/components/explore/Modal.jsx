import React from "react";

const Modal = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg w-3/4 md:w-1/2">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-700"
        >
          X
        </button>
        <video controls className="w-full h-auto rounded-md">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Modal;
