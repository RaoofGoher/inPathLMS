// src/features/courseSectionApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addCourseSectionApi = createApi({
  reducerPath: 'addCourseSectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.inpath.us/teacher/api/', // Base API URL
  }),
  endpoints: (builder) => ({
    addCourseSection: builder.mutation({
      query: (sectionData) => ({
        url: 'sections/', // Endpoint for adding sections
        method: 'POST',
        body: sectionData, // Payload for the POST request
      }),
    }),
  }),
});

export const { useAddCourseSectionMutation } = addCourseSectionApi; // Export the hook
