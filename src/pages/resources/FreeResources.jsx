import React from 'react'
import ScrollToTop from '../../components/ScrollToTop';

const FreeResources = () => {
  return (
    <><ScrollToTop/>
    <div className="bg-gradient-to-br from-secondaryColor to-primaryColor py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Free Resources for Your Learning Journey</h1>
          <p className="text-lg text-gray-200">
            Explore a wide range of free resources designed to help you enhance your learning experience.
            Whether you're looking for study guides, tools, or courses, we've got you covered.
          </p>
        </section>

        {/* Featured Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Study Guide: Time Management</h3>
              <p className="text-gray-600 mb-4">Download our comprehensive guide to improving your time management skills.</p>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Download Now</a>
            </div>
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course: Introduction to Programming</h3>
              <p className="text-gray-600 mb-4">Access a free course on the fundamentals of programming to get started on your coding journey.</p>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Start Learning</a>
            </div>
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Motivational eBook</h3>
              <p className="text-gray-600 mb-4">Download a free eBook full of motivational quotes and advice to keep you inspired.</p>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Get Your Copy</a>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Explore Resources by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Study Materials</h3>
              <p className="text-gray-600 mb-4">Access study guides, notes, and exam preparation resources.</p>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Browse Study Materials</a>
            </div>
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Software</h3>
              <p className="text-gray-600 mb-4">Find useful tools and software to enhance your learning and productivity.</p>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Explore Tools</a>
            </div>
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Online Courses</h3>
              <p className="text-gray-600 mb-4">Find free online courses in various subjects to boost your skills.</p>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Browse Courses</a>
            </div>
          </div>
        </section>

        {/* Free Resource Download Section */}
        <section className="bg-white shadow-2xl rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Free eBooks & PDFs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Complete Study Guide</h3>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Download PDF</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Effective Learning Strategies</h3>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Download PDF</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Motivation for Students</h3>
              <a href="#" className="text-primaryColor font-semibold hover:underline">Download eBook</a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-white shadow-2xl rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Stay Updated with Our Latest Resources</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Subscribe to our newsletter and receive the latest updates on new free resources, guides, and more!
          </p>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-lg text-gray-700" />
            <button className="px-4 py-2 bg-primaryColor text-white rounded-r-lg hover:bg-primaryColor/80">
              Subscribe
            </button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">Contribute Your Own Resources</h2>
          <p className="text-lg text-gray-600 mb-4">Do you have free resources that could help others? Share them with us!</p>
          <a href="#" className="text-primaryColor font-semibold hover:underline">Submit Resources</a>
        </section>

      </div>
    </div>
    </>
  )
}

export default FreeResources;
