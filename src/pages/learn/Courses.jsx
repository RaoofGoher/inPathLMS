import React from "react";
import CardCompoenent from "../../components/CardCompoenent";
import ScrollToTop from "../../components/ScrollToTop";
import StudentsTestimonials from "../../components/StudentsTestimonials";
const Courses = () => {
  // Catogeries for catogery section
  const categories = [
    { title: "Web Development", color: "bg-lightColor1" },
    { title: "Data Science", color: "bg-secondaryColor" },
    { title: "Design", color: "bg-light3" },
    { title: "Marketing", color: "bg-dark2" },
  ];

  return (
    <>
      {/* here is my hero Section */}
      <section>
        <div className="bg-primaryColor text-lightColor2 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-lg mb-6">
            Discover your potential with our curated courses
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-3/4 max-w-md p-2 border-2 border-light3 rounded-md focus:outline-none focus:border-secondaryColor"
            />
            <button className="ml-4 px-6 py-2 bg-secondaryColor text-dark1 font-semibold rounded-md hover:bg-lightColor1">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* here is my catogery secion */}
      <section>
        <div className="py-12 bg-lightColor2">
          <h2 className="text-2xl font-bold text-dark1 text-center mb-8">
            Browse by Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform`}
              >
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* import here students testimonial component */}
      <StudentsTestimonials />
      <ScrollToTop />
      {/* import here cardcomponent */}
      <CardCompoenent />
    </>
  );
};

export default Courses;
