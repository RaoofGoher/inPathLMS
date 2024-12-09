import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApiThroughSubCategory = createApi({
  reducerPath: 'courseApiThroughSubCategory',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }),
  endpoints: (builder) => ({
    getCoursesBySubcategory: builder.query({
      query: (subcategoryId) => `teacher/courses_list/subcategory/${subcategoryId}`,
    }),
  }),
});

export const { useGetCoursesBySubcategoryQuery } = courseApiThroughSubCategory;
