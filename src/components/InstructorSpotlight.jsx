import React from 'react';
import instructor1 from "../assets/student6.jpg";
import instructor2 from "../assets/student5.jpg";
import instructor3 from "../assets/student9.jpg";

const instructors = [
  {
    name: "Dr. Nancy Jhon",
    expertise: "Artificial Intelligence",
    image: instructor1,
  },
  {
    name: "Dr. Sarah Johnson",
    expertise: "Full Stack Development",
    image: instructor2,
  },
  {
    name: "Dr. Emily Davis",
    expertise: "Data Science",
    image: instructor3,
  },
];

const InstructorSpotlight = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#F7F9FC" }}> {/* lightColor2 */}
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold mb-6" style={{ color: "#4A90E2" }}> {/* primaryColor */}
          Meet Our Instructors
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: "#7F8C8D" }}> {/* light3 */}
          Learn from experienced educators and professionals who bring their expertise to every lesson.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              style={{
                border: "2px solid #50E3C2", // secondaryColor
              }}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </div>

              {/* Info Section */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#4A90E2" }}> {/* primaryColor */}
                  {instructor.name}
                </h3>
                <p className="text-md font-medium mb-4" style={{ color: "#333333" }}> {/* dark1 */}
                  {instructor.expertise}
                </p>
                <button
                  className="px-6 py-2 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "#50E3C2", // secondaryColor
                  }}
                >
                  View Profile
                </button>
              </div>

              {/* Decorative Bottom Border */}
              <div
                className="absolute bottom-0 left-0 w-full h-1"
                style={{
                  backgroundColor: "#F5A623", // lightColor1
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSpotlight;
