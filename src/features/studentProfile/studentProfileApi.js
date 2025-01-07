import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentProfileApi = createApi({
  reducerPath: "studentProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.inpath.us/" }),
  endpoints: (builder) => ({
    getStudentProfile: builder.query({
      query: (id) => `students/create/profile/${id}/`,
    }),
    createStudentProfile: builder.mutation({
      query: (profileData) => ({
        url: "students/create/profile/",
        method: "POST",
        body: profileData,
      }),
    }),
    updateStudentProfile: builder.mutation({
      query: ({ id, profileData }) => ({
        url: `students/create/profile/${id}`,
        method: "PUT",
        body: profileData,
      }),
    }),
  }),
});

export const { 
  useGetStudentProfileQuery, 
  useCreateStudentProfileMutation,
  useUpdateStudentProfileMutation 
} = studentProfileApi;
