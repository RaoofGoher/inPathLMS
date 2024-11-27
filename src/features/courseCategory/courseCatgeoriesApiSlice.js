// features/courseCategories/courseCategoriesApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseCategoriesApi = createApi({
  reducerPath: 'courseCategoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }),
  endpoints: (builder) => ({
    fetchCourseCategories: builder.query({
      query: () => 'courses/categories/',
    }),
  }),
});

export const { useFetchCourseCategoriesQuery } = courseCategoriesApi;
