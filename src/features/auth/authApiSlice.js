// src/features/auth/authApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from './authSlice'; // Import setAuth action
import { useDispatch } from 'react-redux';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }), // Your base API URL
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: 'users/signup/', // API endpoint for signup
        method: 'POST',
        body: userData,
      }),
      // On successful signup, store the token and role
      onQuerySuccess: (response, { dispatch }) => {
        const { token, role } = response.data;
        dispatch(setAuth({ token, role }));
      },
    }),

    login: builder.mutation({
      query: (userData) => ({
        url: 'users/login/', // API endpoint for login
        method: 'POST',
        body: userData,
      }),
      // On successful login, store the token and role
      onQuerySuccess: (response, { dispatch }) => {
        const { token, role } = response.data;
        dispatch(setAuth({ token, role }));
      },
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
