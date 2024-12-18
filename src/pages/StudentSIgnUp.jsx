import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "../assets/desgin-6.jpg"; // Ensure this path is correct
import LoginIcons from "../components/LoginIcons";
import { useSignUpMutation } from "../features/auth/authApiSlice"; // Import the mutation
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const validationSchema = Yup.object({
  full_name: Yup.string()
    .min(2, "Full Name must be at least 2 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const StudentSignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signUp, { isLoading, isError, error }] = useSignUpMutation(); // Use the mutation hook

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = {
        ...values,
        role: "student",
      };
      const response = await signUp(formData).unwrap(); // Trigger the signUp mutation
      const { token, role, user_id } = response;
      dispatch(setAuth({ token, role, user_id }));
      console.log("User signed up:", response);
      resetForm();
      if (role === "student") {
        navigate("/dashboard/studentdashboard"); // Redirect to user dashboard
      } else if (role === "instructor") {
        navigate("/dashboard/studentdashboard"); // Redirect to teacher dashboard
      } else if (role === "admin") {
        navigate("/admin-dashboard"); // Redirect to admin dashboard
      }
    } catch (err) {
      console.error("Signup failed:", err);
      // Handle signup error here
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center sm:px-16">
        <div className="flex flex-col md:flex-row w-full ">
          {/* Left Column for Image */}
          <div className="w-full bg-cover bg-center md:flex justify-center items-center hidden">
            <img
              src={Image}
              alt="SignUpImage"
              className="object-cover w-full  "
            />
          </div>

          {/* Right Column for Form */}
          <div className="w-full flex justify-center items-center p-8 bg-white ">
            <div className="bg-grayColor bg-opacity-5 rounded-lg p-8 max-w-sm w-full ">
              <h2 className="text-2xl font-bold text-center text-blueColor">
                Sign Up to Learn
              </h2>
              <Formik
                initialValues={{ full_name: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} // Use handleSubmit as the submit handler
              >
                {() => (
                  <Form>
                    <div className="mb-4">
                      <Field
                        type="text"
                        name="full_name"
                        className="h-[60px] mt-1 p-2 block w-full border border-blueColor bg-white rounded-md"
                        placeholder="Enter your full name"
                      />
                      <ErrorMessage
                        name="full_name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <Field
                        type="email"
                        name="email"
                        className="h-[60px] mt-1 p-2 block w-full border border-blueColor bg-white rounded-md"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <Field
                        type="password"
                        name="password"
                        className="h-[60px] mt-1 p-2 block w-full border border-blueColor bg-white rounded-md"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blueColor text-white font-bold py-2 rounded hover:bg-blueColor/90 transition duration-300"
                      disabled={isLoading} // Disable button while loading
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>

                    {/* Display error message if sign-up fails */}
                    {isError && (
                      <div className="text-red-500 text-sm mt-2">
                        {error?.data?.message || "Signup failed"}
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center">
        <LoginIcons />
      </div>
      <ScrollToTop />
    </>
  );
};

export default StudentSignUpForm;
