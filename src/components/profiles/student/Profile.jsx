import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetStudentProfileQuery, useCreateStudentProfileMutation, useUpdateStudentProfileMutation } from "../../../features/studentProfile/studentProfileApi";

const Profile = ({ id }) => {
  // Fetch existing profile data
  const { data, isLoading, refetch } = useGetStudentProfileQuery(id);
  const [createStudentProfile] = useCreateStudentProfileMutation();
  const [updateStudentProfile] = useUpdateStudentProfileMutation();
console.log("data",data);
  // Formik initial values and validation schema
  const formik = useFormik({
    initialValues: {
      first_name: data?.first_name || "",
      last_name: data?.last_name || "",
      headline: data?.profile?.headline || "",
      biography: data?.profile?.biography || "",
      website: data?.profile?.website || "",
      facebook: data?.profile?.facebook || "",
      linkedin: data?.profile?.linkedin || "",
      youtube: data?.profile?.youtube || "",
      language: data?.profile?.language || "English",
    },
    enableReinitialize: true, // Reinitialize form when data changes
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      headline: Yup.string().required("Headline is required"),
      biography: Yup.string().required("Biography is required"),
      website: Yup.string().url("Must be a valid URL"),
      facebook: Yup.string().url("Must be a valid URL"),
      linkedin: Yup.string().url("Must be a valid URL"),
      youtube: Yup.string().url("Must be a valid URL"),
      language: Yup.string().required("Language is required"),
    }),
    onSubmit: async (values) => {
      try {
        const profileData = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: data?.email,  // Assuming the email remains unchanged
          profile: {
            headline: values.headline,
            biography: values.biography,
            website: values.website,
            facebook: values.facebook,
            linkedin: values.linkedin,
            youtube: values.youtube,
            language: values.language
          }
        };
    
        // Check if profile data exists (i.e., check for a field like 'first_name')
        if (data?.profile?.profile_id) {
          // Update the profile
          console.log("values",values);
          const response = await updateStudentProfile({ id, profileData }).unwrap();
          refetch();
          console.log("response updated",response);
          alert("Profile updated successfully!");
        } else {
          // Create new profile
          console.log("values",values);
          await createStudentProfile({...values,user_id:id}).unwrap();
          alert("Profile saved successfully!");
        }
      } catch (error) {
        console.error("Failed to save profile:", error);
        alert("Error saving profile.");
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.first_name && formik.errors.first_name && (
            <div className="text-red-500 text-sm">{formik.errors.first_name}</div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.last_name && formik.errors.last_name && (
            <div className="text-red-500 text-sm">{formik.errors.last_name}</div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Headline</label>
          <input
            type="text"
            name="headline"
            value={formik.values.headline}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.headline && formik.errors.headline && (
            <div className="text-red-500 text-sm">{formik.errors.headline}</div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Biography</label>
          <textarea
            name="biography"
            value={formik.values.biography}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.biography && formik.errors.biography && (
            <div className="text-red-500 text-sm">{formik.errors.biography}</div>
          )}
        </div>
        {/* Add fields for website, Facebook, LinkedIn, YouTube, and language */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Website</label>
          <input
            type="url"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.website && formik.errors.website && (
            <div className="text-red-500 text-sm">{formik.errors.website}</div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Facebook</label>
          <input
            type="url"
            name="facebook"
            value={formik.values.facebook}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.facebook && formik.errors.facebook && (
            <div className="text-red-500 text-sm">{formik.errors.facebook}</div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.linkedin && formik.errors.linkedin && (
            <div className="text-red-500 text-sm">{formik.errors.linkedin}</div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">YouTube</label>
          <input
            type="url"
            name="youtube"
            value={formik.values.youtube}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          />
          {formik.touched.youtube && formik.errors.youtube && (
            <div className="text-red-500 text-sm">{formik.errors.youtube}</div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Language</label>
          <select
            name="language"
            value={formik.values.language}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            {/* Add more language options here */}
          </select>
          {formik.touched.language && formik.errors.language && (
            <div className="text-red-500 text-sm">{formik.errors.language}</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-6 py-3 mt-4 w-full"
        >
          {data?.profile?.profile_id ?  "update" : "save"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
