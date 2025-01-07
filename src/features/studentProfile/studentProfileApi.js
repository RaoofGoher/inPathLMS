import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentProfileApi = createApi({
  reducerPath: "studentProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.inpath.us/" }),
  tagTypes: ["StudentProfile"], // Define tag for caching
  endpoints: (builder) => ({
    getStudentProfile: builder.query({
      query: (id) => `students/details/${id}/`,
      providesTags: (result, error, id) => [{ type: "StudentProfile", id }],
    }),
    createStudentProfile: builder.mutation({
      query: (profileData) => ({
        url: "students/create/profile/",
        method: "POST",
        body: profileData,
      }),
      invalidatesTags: ["StudentProfile"], // Invalidate to re-fetch if needed
    }),
    updateStudentProfile: builder.mutation({
      query: ({ id, profileData }) => ({
        url: `students/details/${id}/`,
        method: "PUT",
        body: profileData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "StudentProfile", id }],
    }),
  }),
});

export const { 
  useGetStudentProfileQuery, 
  useCreateStudentProfileMutation, 
  useUpdateStudentProfileMutation 
} = studentProfileApi;
