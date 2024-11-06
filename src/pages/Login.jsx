// src/components/LoginForm.js
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLoginMutation } from '../features/auth/authApiSlice'; // Import the login mutation
import BackgroundImage from '../assets/design-8.svg'; 
import { useMediaQuery } from 'react-responsive';
import Loader from '../components/Loader';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(true);
  const isMedium = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const [loginUser, { isLoading, isError, error, data }] = useLoginMutation(); // Use the RTK Query hook

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);  
  }, []);

  const handleLogin = async (values) => {
    try {
      const response = await loginUser(values).unwrap(); // Call the login mutation
      console.log('Login successful', response);
      // Handle successful login (e.g., save token, redirect)
    } catch (err) {
      console.error('Login failed:', err);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <>
      <Loader isLoading={loading || isLoading} delay={300} slowLoadingThreshold={2000} />
      {!loading && (
        <div className={`min-h-screen ${isMedium ? 'flex-col' : 'flex'}`}>
          {/* Left Column for Image */}
          <div
            className="md:flex md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          ></div>

          {/* Right Column for Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-lightColor2">
            <div className={`bg-primaryColor bg-opacity-5 rounded-lg p-8 max-w-sm w-full ${isMedium ? 'mb-[0]' : 'mb-[180px]'}`}>
              <h2 className="text-2xl font-bold text-center font-lato">Login</h2>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {() => (
                  <Form>
                    <div className="mb-4">
                      <Field
                        type="email"
                        name="email"
                        className="h-[60px] mt-1 p-2 block w-full border border-primaryColor bg-lightColor2 focus:ring focus:ring-opacity-50"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                      <Field
                        type="password"
                        name="password"
                        className="h-[60px] mt-1 p-2 block w-full border bg-lightColor2 border-primaryColor shadow-sm focus:ring focus:ring-opacity-50"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primaryColor text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
              {isError && <div className="text-red-500 text-sm mt-4">{error?.data?.detail || 'Login failed. Please try again.'}</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
