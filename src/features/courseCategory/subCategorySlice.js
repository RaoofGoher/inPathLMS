// src/services/subcategoryApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API service
export const subcategoryApi = createApi({
  reducerPath: 'subcategoryApi', // Define a unique reducer path for the subcategory API
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us' }), // Base URL for the API
  endpoints: (builder) => ({
    // Define the endpoint to fetch subcategories based on category ID
    getSubcategories: builder.query({
      query: (categoryId) => `/courses/get/subcategories/${categoryId}`, // Endpoint to fetch subcategories
    }),
  }),
});

// Export the auto-generated hook with a custom name
export const { useGetSubcategoriesQuery } = subcategoryApi;
