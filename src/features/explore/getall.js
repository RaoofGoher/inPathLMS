import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllCourses = createApi({
  reducerPath: "getAllCourses",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.inpath.us/teacher/api/" }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "categories-courses/",
    }),
  }),
});

export const { useGetCoursesQuery } = getAllCourses;
