// src/features/auth/authApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    }),

    login: builder.mutation({
      query: (userData) => ({
        url: 'users/login/', // API endpoint for login
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
