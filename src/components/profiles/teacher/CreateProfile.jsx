import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import React Quill styles

const CreateProfile = () => {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab
  const [imagePreview, setImagePreview] = useState(null);

  const { user_id } = useSelector((state) => state.auth);
  // Define initial values with new fields
  const initialValues = {
    user: user_id ? user_id : "",
    first_name: "",
    last_name: "",
    headline: "",
    website: "URL", // URL not editable
    biography: "", // Changed from 'bio' to 'biography'
    language: "en", // Default to English
    facebook: "",
    x: "",
    linkedin: "",
    youtube: "",
    profile_picture: null,
    privacy_settings: {
      allow_messages: false,
      share_profile: false,
    },
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    user: Yup.string().required("User ID is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    headline: Yup.string().required("Headline is required"),
    website: Yup.string().url("Invalid URL").required("Website is required"),
    biography: Yup.string() // Changed 'bio' to 'biography'
      .required("Biography is required")
      .max(500, "Biography cannot exceed 500 characters"),
    profile_picture: Yup.mixed()
      .nullable()
      .required("Profile picture is required"),
    privacy_settings: Yup.object({
      allow_messages: Yup.bool().required(),
      share_profile: Yup.bool().required(),
    }),
    language: Yup.string().required("Language selection is required"),
    X: Yup.string().url("Invalid URL").required("X URL is required"),
    facebook: Yup.string()
      .url("Invalid URL")
      .required("Facebook URL is required"),
    linkedin: Yup.string()
      .url("Invalid URL")
      .required("LinkedIn URL is required"),
    youtube: Yup.string()
      .url("Invalid URL")
      .required("YouTube URL is required"),
  });

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      console.log("Profile Created:", values);
    } catch (err) {
      console.error("Error Creating Profile:", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file); // Convert the image file to a data URL
    }
  };

  return (
    <>
      <div className="my-14">
        <h1 className="text-dark1 text-3xl font-bold mb-4">
          Profile & Settings
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="tabs my-8  ">
        <ul className="flex space-x-4">
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              activeTab === 0 ? "bg-blueColor text-white" : "text-dark1"
            }`}
            onClick={() => setActiveTab(0)}
          >
            INPATH Profile
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              activeTab === 1 ? "bg-blueColor text-white" : "text-dark1"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Profile Picture
          </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-md ${
                activeTab === 2 ? "bg-blueColor text-white" : "text-dark1"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Privacy Settings
            </li>
        </ul>
      </div>
      <hr />
      {/* Content Based on Active Tab */}
      {activeTab === 0 && (
        <div className="tab-content my-8 px-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, isSubmitting, setFieldValue }) => (
              <Form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left Side - Personal Information */}
                <div className="space-y-4">
                  {/* First Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="first_name"
                      className="block text-dark1 mb-1"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Enter first name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="last_name"
                      className="block text-dark1 mb-1"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Enter last name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Headline */}
                  <div className="mb-4">
                    <label htmlFor="headline" className="block text-dark1 mb-1">
                      Headline
                    </label>
                    <Field
                      type="text"
                      id="headline"
                      name="headline"
                      placeholder="Enter headline"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                    />
                    <ErrorMessage
                      name="headline"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Biography with React Quill */}
                  <div className="mb-4 col-span-2">
                    <label
                      htmlFor="biography"
                      className="block text-dark1 mb-1"
                    >
                      Biography
                    </label>
                    <ReactQuill
                      value={values.biography} // Controlled by Formik
                      onChange={(value) => setFieldValue("biography", value)} // Update Formik's state
                      modules={{
                        toolbar: [["bold", "italic", "underline"]],
                      }}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                      theme="snow"
                      placeholder="Write something about yourself"
                    />
                    <ErrorMessage
                      name="biography"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Language Selector */}
                  <div className="mb-4">
                    <label htmlFor="language" className="block text-dark1 mb-1">
                      Language
                    </label>
                    <Field
                      as="select"
                      id="language"
                      name="language"
                      className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                    >
                      <option value="">Select a language</option>
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      {/* Add more languages as needed */}
                    </Field>
                    <ErrorMessage
                      name="language"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Right Side - Other Content */}
                <div className="space-y-4">
                  {/* Website (non-editable) */}
                  <div className="mb-4 flex flex-col  justify-between">
                    <label htmlFor="website" className="block text-dark1 mb-1">
                      Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={initialValues.website}
                      readOnly
                      className="w-full px-4 py-2 border rounded-md bg-gray-100 text-dark1 focus:outline-none focus:ring-2 focus:ring-blueColor"
                      disabled
                    />
                  </div>

                  {/* Social Media URLs */}
                  <div className="space-y-4">
                    <div className="mb-4">
                      <label
                        htmlFor="facebook"
                        className="block text-dark1 mb-1"
                      >
                        X
                      </label>
                      <Field
                        type="url"
                        id="X"
                        name="X"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                      />
                      <ErrorMessage
                        name="X"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="facebook"
                        className="block text-dark1 mb-1"
                      >
                        Facebook
                      </label>
                      <Field
                        type="url"
                        id="facebook"
                        name="facebook"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                      />
                      <ErrorMessage
                        name="facebook"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="linkedin"
                        className="block text-dark1 mb-1"
                      >
                        LinkedIn
                      </label>
                      <Field
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                      />
                      <ErrorMessage
                        name="linkedin"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="youtube"
                        className="block text-dark1 mb-1"
                      >
                        YouTube
                      </label>
                      <Field
                        type="url"
                        id="youtube"
                        name="youtube"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor"
                      />
                      <ErrorMessage
                        name="youtube"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    {/* Save Button */}
                    <div className="col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="hover:bg-blueColor border text-blueColor  border-blueColor  hover:text-white px-6 py-3 rounded-md"
                      >
                        {isSubmitting ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {activeTab === 1 && (
         <div className="tab-content my-8">
         <Formik
           initialValues={{ profile_picture: '' }}
           // validationSchema={validationSchema} // Add your validation schema here
           onSubmit={(values) => {
             // Handle submit
             console.log(values);
           }}
         >
           {({ isSubmitting }) => (
             <Form>
               <div className="mb-4">
                 <h1 className="text-dark1 font-bold mb-2">Image preview</h1>
                 <h1 className="text-sm text-grayColor">
                   Minimum 200x200 pixels, Maximum 6000x6000 pixels
                 </h1>
                 <div className="mt-4 w-64 h-64 rounded-md border">
                   {imagePreview ? (
                     <img
                       src={imagePreview}
                       alt="Profile Preview"
                       className="w-full h-full object-cover rounded-md"
                     />
                   ) : (
                     <span className="text-gray-500">No image selected</span>
                   )}
                 </div>
               </div>
   
               <div className="mb-4">
                 <label htmlFor="profile_picture" className="block text-dark1 mb-1">
                   Upload Profile Picture
                 </label>
                 <input
                   type="file"
                   id="profile_picture"
                   name="profile_picture"
                   className=" px-4 py-2 border rounded-md"
                   accept="image/*"
                   onChange={handleImageChange} // Handle file change to show the preview
                 />
                 <ErrorMessage
                   name="profile_picture"
                   component="div"
                   className="text-red-500 text-sm mt-1"
                 />
               </div>
   
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className="hover:bg-blueColor border text-blueColor border-blueColor hover:text-white px-6 py-3 rounded-md"
               >
                 {isSubmitting ? 'Uploading...' : 'Upload'}
               </button>
             </Form>
           )}
         </Formik>
       </div>
      )}

      {activeTab === 2 && (
        <div className="tab-content my-8">
          {/* Privacy Settings Tab Content */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, isSubmitting, setFieldValue }) => (
              <Form>
                <div className="mb-4 flex justify-start items-baseline gap-4">
                  <Field
                    type="checkbox"
                    id="privacy_settings.allow_messages"
                    name="privacy_settings.allow_messages"
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="privacy_settings.allow_messages"
                    className="block text-dark1 mb-1"
                  >
                    Show your profile to logged-in users
                  </label>
                </div>
                <div className="mb-4 flex justify-start items-baseline gap-4">
                  <Field
                    type="checkbox"
                    id="privacy_settings.share_profile"
                    name="privacy_settings.share_profile"
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="privacy_settings.share_profile"
                    className="block text-dark1 mb-1"
                  >
                    Show courses you're taking on your profile page
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="hover:bg-blueColor border text-blueColor border-blueColor hover:text-white px-6 py-3 rounded-md"
                >
                  {isSubmitting ? "Saving..." : "Save "}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default CreateProfile;
