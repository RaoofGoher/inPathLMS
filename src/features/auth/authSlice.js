// src/features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initialize state with token and role
const initialState = {
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || null, // To store the role
  isAuthenticated: false, // To track authentication state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Set token and role when user logs in or signs up
    setAuth: (state, action) => {
      const { token, role, user_id } = action.payload;
      state.token = token;
      state.role = role;
      state.user_id = user_id;
      state.isAuthenticated = true;

      // Store token and role in localStorage for persistence
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
    },
    // Clear token and role when the user logs out
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;

      // Remove from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
