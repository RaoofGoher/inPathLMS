import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teacherProfileApi = createApi({
  reducerPath: 'teacherProfileApi', // Unique key for the API slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }),
  endpoints: (builder) => ({
    getTeacherProfile: builder.query({
      query: (id) => `teacher/profile/${id}/`, // Endpoint for fetching profile
    }),
    updateTeacherProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `teacher/profile/${id}/`,
        method: 'PATCH',
        body: data, // Data to update the teacher's profile
      }),
    }),
  }),
});

export const { useGetTeacherProfileQuery, useUpdateTeacherProfileMutation } = teacherProfileApi;
