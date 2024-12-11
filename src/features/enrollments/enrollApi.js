import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const enrollApi = createApi({
  reducerPath: 'enrollApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }),
  endpoints: (builder) => ({
    enrollMultipleCourses: builder.mutation({
      query: ({ user_id, course_ids }) => ({
        url: 'students/enroll-multiple-courses/',
        method: 'POST',
        body: { user_id, course_ids },
      }),
    }),
  }),
});

export const { useEnrollMultipleCoursesMutation } = enrollApi;
