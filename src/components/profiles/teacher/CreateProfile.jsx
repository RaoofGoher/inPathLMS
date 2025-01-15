import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateTeacherProfileMutation, useUpdateTeacherProfileMutation, useGetTeacherProfileQuery } from "../../../features/profile/teacher/teacherProfile";
import { useSelector } from "react-redux";

const CreateProfile = () => {
  const [createProfile, { isLoading, isSuccess, isError }] = useCreateTeacherProfileMutation();
  const { user_id } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      user: user_id,
      bio: "",
      degrees: "",
      teaching_experience: "",
      specialization: "",
      teaching_history: "",
    },
    validationSchema: Yup.object({
      user: Yup.number().required("User ID is required"),
      bio: Yup.string().required("Bio is required"),
      degrees: Yup.string().required("Degrees are required"),
      teaching_experience: Yup.number().required("Teaching experience is required"),
      specialization: Yup.string().required("Specialization is required"),
      teaching_history: Yup.string().required("Teaching history is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createProfile(values).unwrap();
        alert("Profile created successfully!");
        resetForm();
      } catch (error) {
        console.error("Failed to create profile:", error);
        alert("Failed to create profile.");
      }
    },
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create Teacher Profile</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="user" className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
          readOnly
            id="user"
            name="user"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              formik.touched.user && formik.errors.user ? "border-red-500" : ""
            }`}
          />
          {formik.touched.user && formik.errors.user && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.user}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bio}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              formik.touched.bio && formik.errors.bio ? "border-red-500" : ""
            }`}
          />
          {formik.touched.bio && formik.errors.bio && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.bio}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="degrees" className="block text-sm font-medium text-gray-700">
            Degrees
          </label>
          <input
            id="degrees"
            name="degrees"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.degrees}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              formik.touched.degrees && formik.errors.degrees ? "border-red-500" : ""
            }`}
          />
          {formik.touched.degrees && formik.errors.degrees && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.degrees}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="teaching_experience" className="block text-sm font-medium text-gray-700">
            Teaching Experience (Years)
          </label>
          <input
            id="teaching_experience"
            name="teaching_experience"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.teaching_experience}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              formik.touched.teaching_experience && formik.errors.teaching_experience
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.teaching_experience && formik.errors.teaching_experience && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.teaching_experience}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
            Specialization
          </label>
          <input
            id="specialization"
            name="specialization"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.specialization}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              formik.touched.specialization && formik.errors.specialization ? "border-red-500" : ""
            }`}
          />
          {formik.touched.specialization && formik.errors.specialization && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.specialization}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="teaching_history" className="block text-sm font-medium text-gray-700">
            Teaching History
          </label>
          <textarea
            id="teaching_history"
            name="teaching_history"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.teaching_history}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              formik.touched.teaching_history && formik.errors.teaching_history ? "border-red-500" : ""
            }`}
          />
          {formik.touched.teaching_history && formik.errors.teaching_history && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.teaching_history}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Profile"}
        </button>

        {isSuccess && <p className="text-green-500 mt-4">Profile created successfully!</p>}
        {isError && <p className="text-red-500 mt-4">Failed to create profile. Please try again.</p>}
      </form>
    </div>
  );
};

export default CreateProfile;
