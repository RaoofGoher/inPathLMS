import React from 'react';
import image1 from "../assets/student5.jpg";
import image2 from "../assets/student10.jpg";
import image3 from "../assets/student2.jpg";

const testimonials = [
  {
    name: "Nancy",
    feedback: "This platform has completely transformed the way I learn. The courses are well-structured, and the instructors are amazing!",
    image: image1, // Replace with actual student image
    course: "Full Stack Web Development"
  },
  {
    name: "Aliza Beth",
    feedback: "I love how easy it is to navigate through the course materials. I’m learning at my own pace and enjoying every moment of it!",
    image: image2, // Replace with actual student image
    course: "Data Science & Machine Learning"
  },
  {
    name: "Jane Smith",
    feedback: "Thanks to this platform, I’ve secured my dream job as a developer! The hands-on projects helped me build real-world skills.",
    image: image3, // Replace with actual student image
    course: "React and Node.js"
  }
];

const StudentsTestimonials = () => {
  return (
    <section className="bg-lightColor2 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold" style={{ color: "#4A90E2" }}>What Our Students Say</h2>
        <p className="text-xl mb-12 mt-4 text-light3">
          See how our platform has helped students achieve their goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: "#FFFFFF"}}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-primaryColor"
              />
              <p className="text-lg italic mb-4 text-light3" >
                "{testimonial.feedback}"
              </p>
              <p className="text-xl font-semibold text-primaryColor">{testimonial.name}</p>
              <p className="text-sm text-dark2">{testimonial.course}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsTestimonials;
