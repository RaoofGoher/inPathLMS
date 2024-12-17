import React from 'react'
import ScrollToTop from '../components/ScrollToTop';

const PageNotFound = () => {
  return (
    <>
    <ScrollToTop/>

    <div className="flex justify-center items-center h-screen bg-white text-blueColor text-center p-5">
      <div className="max-w-xl w-full">
        <h1 className="text-9xl m-0">404</h1>
        <p className="text-2xl my-4">Oops! Page Not Found</p>
        <a href="/" className="inline-block text-lg mt-5 text-blueColor border-2 border-blueColor px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-blue-800">
          Go Back to Home
        </a>
      </div>
    </div>
    </>
  )
}

export default PageNotFound;
