import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teacherProfileApi = createApi({
  reducerPath: 'teacherProfileApi', // Unique key for the API slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }),
  endpoints: (builder) => ({
    // Fetch Teacher Profile
    getTeacherProfile: builder.query({
      query: (id) => `teacher/profile/${id}/`, // Endpoint for fetching profile
    }),

    // Update Teacher Profile
    updateTeacherProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `teacher/profile/${id}/`,
        method: 'PUT',
        body: data, // Data to update the teacher's profile
      }),
    }),

    // Create Teacher Profile
    createTeacherProfile: builder.mutation({
      query: (data) => ({
        url: 'teacher/profile/create/',
        method: 'POST',
        body: data, // Data to create the teacher's profile
      }),
    }),
  }),
});

export const {
  useGetTeacherProfileQuery,
  useUpdateTeacherProfileMutation,
  useCreateTeacherProfileMutation, // Export the create mutation
} = teacherProfileApi;
