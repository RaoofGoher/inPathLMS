import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import BackgroundImage from '../assets/design-5.jpg'
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="mx-[20px] bg-secondaryColor bg-opacity-90 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-white font-lato">Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            // Handle form submission
          }}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-dark2 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-dark2 text-sm" />
              </div>

              <button
                type="submit"
                className="font-lato w-full bg-primaryColor text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
