import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentProfileImageApi = createApi({
  reducerPath: 'studentProfileImageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.inpath.us/' }),
  endpoints: (builder) => ({
    uploadProfilePicture: builder.mutation({
      query: ({ profile_picture, user_id }) => {
        const formData = new FormData();
        formData.append('profile_picture', profile_picture); // Image file
        formData.append('user_id', user_id); // User ID
        
        return {
          url: 'students/upload-profile-picture/',
          method: 'POST',
          body: formData,
          // No need to manually set the headers for 'multipart/form-data',
          // browser will handle this automatically
        };
      },
    }),
  }),
});

export const { useUploadProfilePictureMutation } = studentProfileImageApi;
