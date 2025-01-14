// src/features/coursesSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getcoursesByTeacherApi = createApi({
  reducerPath: 'getcoursesByTeacherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.inpath.us',
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoursesByTeacherId: builder.query({
      query: (teacherId) => `/teacher/courses/${teacherId}`,
    }),
  }),
});

export const { useGetCoursesByTeacherIdQuery } = getcoursesByTeacherApi;
