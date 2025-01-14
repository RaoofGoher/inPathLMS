import React, { useState } from "react";
import Profile from "./Profile";
import Photo from "./Photo";
import Subscriptions from "./Subscription";
import { useDispatch, useSelector } from 'react-redux';

const ProfileLayout = () => {
  const [activeSection, setActiveSection] = useState("Profile");
  const { token, role, isAuthenticated, user_id } = useSelector((state) => state.auth);
console.log("user_id",user_id);
  return (
    <div className="flex w-2/3 mx-auto my-8">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <ul>
          <li
            className={`cursor-pointer p-2 ${
              activeSection === "Profile" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveSection("Profile")}
          >
            Profile
          </li>
          <li
            className={`cursor-pointer p-2 ${
              activeSection === "Photo" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveSection("Photo")}
          >
            Photo
          </li>
          <li
            className={`cursor-pointer p-2 ${
              activeSection === "Subscriptions" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveSection("Subscriptions")}
          >
            Subscriptions
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {activeSection === "Profile" && <Profile id={user_id} />}
        {activeSection === "Photo" && <Photo id={user_id} />}
        {activeSection === "Subscriptions" && <Subscriptions />}
      </div>
    </div>
  );
};

export default ProfileLayout;
