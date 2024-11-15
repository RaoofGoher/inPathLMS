import React from 'react'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primaryColor to-secondaryColor text-white text-center">
    <h2 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn">Ready to Get Started?</h2>
    <p className="mb-8 text-xl  opacity-80 animate__animated animate__fadeIn animate__delay-1s">Join thousands of learners and instructors who are transforming education with our platform.</p>
    <button className="bg-lightColor1 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:bg-blue-500 hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50">Start Your Free Trial</button>
  </section>
  
  )
}

export default CallToAction
