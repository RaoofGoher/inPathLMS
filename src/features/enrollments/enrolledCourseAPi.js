import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const enrolledCourseApi = createApi({
  reducerPath: "enrolledCourseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.inpath.us",
  }),
  endpoints: (builder) => ({
    getEnrolledCourses: builder.query({
      query: (userId) => `/students/enrolled-courses/${userId}/`,
    }),
  }),
});

export const { useGetEnrolledCoursesQuery } = enrolledCourseApi;
