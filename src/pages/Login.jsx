import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../features/auth/authApiSlice";
import Image from "../assets/desgin-8.png";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";
import ScrollToTop from "../components/ScrollToTop";
import { useNavigate, Link } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [loginUser, { isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleLogin = async (values, { resetForm }) => {
    try {
      const response = await loginUser(values).unwrap();
      console.log("Login response:", response);
      const { token, role, user_id } = response;
      dispatch(setAuth({ token, role, user_id }));

      resetForm();
      if (role === "student") navigate("/dashboard/studentdashboard");
      else if (role === "instructor") navigate("/dashboard/teacherdashboard");
      else if (role === "admin") navigate("/dashboard/admin");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <>
      <ScrollToTop />
      <Loader
        isLoading={loading || isLoading}
        delay={300}
        slowLoadingThreshold={2000}
      />
      {/* Main Container */}
      {!loading && (
        <div className="min-h-screen flex flex-row sm:px-16 lg:px-24 justify-center items-center">
          {/* Left Column for Image */}
          <div className="bg-cover bg-center w-full hidden md:block">
            <img src={Image} alt="loginImage" />
          </div>

          {/* Right Column for Form */}
          <div className="w-full p-8 flex items-center justify-center bg-white py-0">
            <div className="bg-grayColor bg-opacity-10 rounded-lg p-8 w-full max-w-sm">
              <h2 className="text-2xl font-bold text-center font-lato text-blueColor">
                Login
              </h2>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {() => (
                  <Form>
                    <div className="mb-4">
                      <Field
                        type="email"
                        name="email"
                        className="h-[60px] mt-1 p-2 block w-full rounded-md border border-blueColor bg-white"
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
                        className="h-[60px] mt-1 p-2 block w-full rounded-md border border-blueColor bg-white"
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
                    >
                      Submit
                    </button>
                    <Link
                      className="block mt-2 text-center text-blue-500"
                      to="/forgotPassword"
                    >
                      Reset Password
                    </Link>
                  </Form>
                )}
              </Formik>
              {isError && (
                <div className="text-red-500 text-sm mt-4">
                  {error?.data?.detail || "Login failed. Please try again."}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
