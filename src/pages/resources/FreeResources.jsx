import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import { Link } from "react-router-dom";
const FreeResources = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-white py-16  scroll-smooth">
        <div className="max-w-7xl mx-auto lg:flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Introduction Section */}
            <section className="text-center mb-16 animate__animated animate__fadeIn px-8 lg:px-20">
              <h1 className="text-5xl font-extrabold text-blueColor mb-6">
                Free Resources for Your Learning Journey
              </h1>
              <p className="text-xl text-grayColor leading-relaxed">
                Discover resources designed to enhance your learning experience.
                Start exploring today and level up your skills!
              </p>
            </section>

            {/* Featured Resources Section */}
            <section
              id="featured"
              className="mb-16 animate__animated animate__fadeIn animate__delay-2s bg-blueColor text-white py-12 px-8 lg:px-20"
            >
              <h2 className="text-4xl font-bold mb-8 text-center">
                Featured Resources
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Time Management",
                    description:
                      "Learn effective time management techniques to boost your productivity and achieve your goals.",
                    link: "/page-not-found",
                  },
                  {
                    title: "Programming Basics",
                    description:
                      "Get started with programming by learning the basics of coding languages and algorithms.",
                    link: "/page-not-found",
                  },
                  {
                    title: "Motivational eBook",
                    description:
                      "Read a motivational eBook to inspire and motivate yourself to achieve your goals.",
                    link: "/page-not-found",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[250px] bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <h3 className="text-2xl font-semibold text-blueColor mb-2">
                      {item.title}
                    </h3>
                    <p className="text-grayColor text-sm mb-6">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="text-blueColor/90 font-semibold hover:underline hover:text-blueColor/80 transition duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Categories Section */}
            <section
              id="categories"
              className="mb-16 animate__animated animate__fadeIn animate__delay-3s bg-lightGray py-12 px-8 lg:px-20"
            >
              <h2 className="text-4xl font-bold text-blueColor mb-8 text-center">
                Explore by Category
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Study Materials", "Tools & Software", "Online Courses"].map(
                  (category, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white shadow-xl rounded-xl p-6 gap-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-14 h-14 bg-blueColor text-white rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-dark1">
                          {category}
                        </h3>
                        <Link
                          to="/page-not-found"
                          className="text-blueColor/90 text-sm hover:underline hover:text-blueColor/80"
                        >
                          Browse
                        </Link>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Free eBooks Section */}
            <section
              id="ebooks"
              className="mb-16 animate__animated animate__fadeIn animate__delay-4s bg-blueColor text-white py-12 px-8 lg:px-20"
            >
              <h2 className="text-4xl font-bold mb-6 text-center">
                Free eBooks & PDFs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Study Guide", "Learning Strategies", "Motivation Tips"].map(
                  (ebook, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <h3 className="text-2xl font-semibold text-dark1 mb-4">
                        {ebook}
                      </h3>
                      <Link
                        to="/page-not-found"
                        className="text-blueColor font-semibold hover:underline hover:text-blueColor/90 transition duration-300"
                      >
                        Download
                      </Link>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Testimonials Section */}
            <section
              id="testimonials"
              className="bg-lightGray py-16 animate__animated animate__fadeIn animate__delay-5s px-8 lg:px-20"
            >
              <h2 className="text-4xl font-bold text-blueColor mb-8 text-center">
                What Our Users Say
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  "This resource was a game changer!",
                  "Amazing content! A must-have for learners!",
                  "Helped me level up my skills quickly.",
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-[300px] bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <p className="text-lg text-grayColor mb-4">
                      "{testimonial}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blueColor text-white rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">A</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-dark1">
                          Alex R.
                        </h4>
                        <p className="text-sm text-blueColor/90">Learner</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Section */}
            <section
              id="newsletter"
              className=" text-center bg-blueColor p-8 rounded-lg animate__animated animate__fadeIn animate__delay-6s px-8 lg:px-20"
            >
              <h2 className="text-4xl font-semibold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-white mb-6">
                Subscribe for updates on new resources and guides.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 border border-gray-300  sm:rounded-l-lg  text-gray-700 w-full sm:w-auto"
                />
                <button className="px-6 py-3 bg-grayColor text-white  sm:rounded-r-lg hover:bg-grayColor/80 transition-all duration-300 w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeResources;
