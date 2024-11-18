// src/components/TeacherSignUpForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import BackgroundImage from '../assets/design-6.jpg';
import { useMediaQuery } from 'react-responsive';
import { useSignUpMutation } from '../features/auth/authApiSlice'; // Import the mutation hook
import LoginIcons from '../components/LoginIcons'
import { useDispatch } from 'react-redux';
import { setAuth } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const validationSchema = Yup.object({
  full_name: Yup.string()
    .min(2, 'Full Name must be at least 2 characters')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const TeacherSignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, { isLoading, error }] = useSignUpMutation(); // Get the mutation function and loading state
  const isMedium = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className={`min-h-screen ${isMedium ? 'flex-col' : 'flex'}`}>
      {/* Left Column for Image */}
      <div
        className="md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Right Column for Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-lightColor2">
        <div
          className={`bg-primaryColor bg-opacity-5 rounded-lg p-8 max-w-sm w-full ${isMedium ? 'mb-[0]' : 'mb-[180px]'}`}
        >
          <h2 className="text-2xl font-bold text-center font-lato">Sign Up to Educate</h2>
          <Formik
            initialValues={{ full_name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values,{ resetForm }) => {
              try {
                const formData = {
                  ...values, // Spread the form values
                  role: 'instructor', // Add the role field
                };
                const response = await signUp(formData).unwrap();
                const { token, role } = response; 
                dispatch(setAuth({ token, role }));
                
                console.log("sign-up sucessful response", response) // Perform the sign-up request with the added role
                resetForm();
                if (role === 'student') {
                  navigate('/dashboard/studentdashboard'); // Redirect to user dashboard
                } else if (role === 'instructor') {
                  navigate('/dashboard/teacherdashboard'); // Redirect to teacher dashboard
                } else if (role === 'admin') {
                  navigate('/admin-dashboard'); // Redirect to admin dashboard
                }
              } catch (error) {
                console.error('Error signing up:', error);
              }
            }}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="full_name"
                    className="h-[60px] mt-1 p-2 block w-full border border-primaryColor bg-lightColor2 focus:ring focus:ring-opacity-50"
                    placeholder="Enter your full name"
                  />
                  <ErrorMessage name="full_name" component="div" className="text-red-500 text-sm" />
                </div>

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
                  disabled={isLoading} // Disable while loading
                >
                  {isLoading ? 'Signing Up...' : 'Submit'}
                </button>
                {error && <p className="text-red-500 text-center mt-2">{error.message}</p>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {isMedium && <LoginIcons />}
      <ScrollToTop/>
    </div>
  );
};

export default TeacherSignUpForm;
