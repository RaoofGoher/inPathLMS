import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseSectionApi = createApi({
  reducerPath: 'courseSectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }),
  endpoints: (builder) => ({
    getCourseSections: builder.query({
      query: (courseId) => `teacher/courses/sections/${courseId}`,
    }),
  }),
});

export const { useGetCourseSectionsQuery } = courseSectionApi;
