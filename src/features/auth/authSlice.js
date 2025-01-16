// src/features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initialize state with token, role, and profile picture
const initialState = {
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || null,
  user_id: null, // Add this to track user ID
  profile_picture_url: null, // Add this to store profile picture URL
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Set token, role, and user details when user logs in or signs up
    setAuth: (state, action) => {
      const { token, role, user_id, profile_picture_url } = action.payload;
      state.token = token;
      state.role = role;
      state.user_id = user_id;
      state.profile_picture_url = profile_picture_url;
      state.isAuthenticated = true;

      // Store token and role in localStorage for persistence
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
    },
    // Update profile picture URL after upload
    updateUserProfilePicture: (state, action) => {
      state.profile_picture_url = action.payload; // Update the profile picture URL
    },
    // Clear token, role, and user details when the user logs out
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user_id = null;
      state.profile_picture_url = null;
      state.isAuthenticated = false;

      // Remove from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    },
  },
});

export const { setAuth, logout, updateUserProfilePicture } = authSlice.actions;

export default authSlice.reducer;
