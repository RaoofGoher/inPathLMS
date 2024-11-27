import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCreateTeacherProfileMutation } from '../../../features/profile/teacher/teacherProfile';
import { useSelector, useDispatch } from 'react-redux';

const CreateProfile = () => {
    const [createTeacherProfile, { isLoading, isSuccess, error }] = useCreateTeacherProfileMutation();
    const { token, role, isAuthenticated, user_id } = useSelector((state) => state.auth);


  // Define initial values
  const initialValues = {
    user: user_id ? user_id : "",
    bio: "",
    degrees: "",
    teaching_experience: "",
    specialization: "",
    teaching_history: "",
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    user: Yup.string().required("User ID is required"),
    bio: Yup.string().required("Bio is required").max(500, "Bio cannot exceed 500 characters"),
    degrees: Yup.string().required("Degrees are required"),
    teaching_experience: Yup.number()
      .required("Teaching experience is required")
      .min(0, "Experience cannot be negative"),
    specialization: Yup.string().required("Specialization is required"),
    teaching_history: Yup.string().required("Teaching history is required"),
  });

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      const result = await createTeacherProfile(values).unwrap(); // `user_id` is handled in the headers
      
     console.log('Profile Created:', result);
    } catch (err) {
      console.error('Error Creating Profile:', err);
    }
  };
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6 mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Create Profile</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* User ID */}
            <div className="mb-4">
              <label htmlFor="user" className="block text-gray-700 mb-1">
                User ID
              </label>
              <Field
                type="text"
                id="user"
                name="user"
                placeholder="Enter user ID"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="user"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Bio */}
            <div className="mb-4">
              <label htmlFor="bio" className="block text-gray-700 mb-1">
                Bio
              </label>
              <Field
                as="textarea"
                id="bio"
                name="bio"
                placeholder="Enter your bio"
                rows="3"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="bio"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Degrees */}
            <div className="mb-4">
              <label htmlFor="degrees" className="block text-gray-700 mb-1">
                Degrees
              </label>
              <Field
                type="text"
                id="degrees"
                name="degrees"
                placeholder="Enter your degrees"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="degrees"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Teaching Experience */}
            <div className="mb-4">
              <label
                htmlFor="teaching_experience"
                className="block text-gray-700 mb-1"
              >
                Teaching Experience (Years)
              </label>
              <Field
                type="number"
                id="teaching_experience"
                name="teaching_experience"
                placeholder="Enter teaching experience"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="teaching_experience"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Specialization */}
            <div className="mb-4">
              <label htmlFor="specialization" className="block text-gray-700 mb-1">
                Specialization
              </label>
              <Field
                type="text"
                id="specialization"
                name="specialization"
                placeholder="Enter your specialization"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="specialization"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Teaching History */}
            <div className="mb-4">
              <label htmlFor="teaching_history" className="block text-gray-700 mb-1">
                Teaching History
              </label>
              <Field
                type="text"
                id="teaching_history"
                name="teaching_history"
                placeholder="Enter teaching history"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="teaching_history"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProfile;
