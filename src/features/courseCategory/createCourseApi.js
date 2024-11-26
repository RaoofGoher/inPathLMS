// src/features/createCourseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createCourseApi = createApi({
  reducerPath: 'createCourseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.inpath.us/teacher/api/',
  }),
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (courseData) => {
        const formData = new FormData();
        // Loop through the values and append to FormData
        for (const key in courseData) {
          if (Array.isArray(courseData[key])) {
            courseData[key].forEach((item) => formData.append(`${key}[]`, item));
          } else {
            formData.append(key, courseData[key]);
          }
        }
        return {
          url: 'courses/',
          method: 'POST',
          body: formData, // Make sure to send the FormData correctly
        };
      },
    }),
  }),
});

export const { useCreateCourseMutation } = createCourseApi;
