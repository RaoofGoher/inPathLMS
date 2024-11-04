import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import BackgroundImage from '../assets/design-6.jpg'; // Ensure this path is correct
import { useMediaQuery } from 'react-responsive';
import LoginIcons from '../components/LoginIcons';

const validationSchema = Yup.object({
  fullName: Yup.string()
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
  const isMedium = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className={`min-h-screen ${isMedium ? 'flex-col' : 'flex'}`}>
      {/* Left Column for Image */}
      <div 
        className="md:flex md:w-1/2 bg-cover bg-center" 
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Optional: You can add any overlay or content here */}
      </div>

      {/* Right Column for Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-lightColor2">
        <div className={`bg-primaryColor bg-opacity-5 rounded-lg p-8 max-w-sm w-full ${isMedium ? 'mb-[0]' : 'mb-[180px]'}`}>
          <h2 className="text-2xl font-bold text-center font-lato">Sign Up to Educate</h2>
          <Formik
            initialValues={{ fullName: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              // Handle form submission
            }}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="fullName"
                    className="h-[60px] mt-1 p-2 block w-full border border-primaryColor bg-lightColor2 focus:ring focus:ring-opacity-50"
                    placeholder="Enter your full name"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
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
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {isMedium && <LoginIcons />}
    </div>
  );
};

export default TeacherSignUpForm;