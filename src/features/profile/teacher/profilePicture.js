import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.inpath.us',
  }),
  endpoints: (builder) => ({
    uploadProfilePicture: builder.mutation({
      query: ({ profile_picture, user_id }) => {
        const formData = new FormData();
        formData.append('profile_picture', profile_picture);
        formData.append('user_id', user_id);
        return {
          url: '/students/upload-profile-picture/',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { useUploadProfilePictureMutation } = profileApi;