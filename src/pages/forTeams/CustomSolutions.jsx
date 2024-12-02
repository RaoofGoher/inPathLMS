import React from "react";
import ScrollToTop from "../../components/ScrollToTop";

const CustomSolutions = () => {
  return (
    <div>
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="w-full h-screen bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-30">
          {/* Add your background pattern or image here */}
          <div className="h-full w-full bg-pattern" />
        </div>
        <div className="container mx-auto px-6 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Tailored Learning Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            We create customized eLearning solutions that align perfectly with
            your organization’s unique goals.
          </p>
          <div className="mt-8">
            <a
              href="#features"
              className="px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg shadow-lg hover:bg-[#F5A623] hover:text-white transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-[#F7F9FC] py-16 px-6 md:px-12 lg:px-24"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#333333]">Key Features</h2>
          <p className="mt-4 text-lg text-[#7F8C8D]">
            Discover the core features of our custom LMS solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Custom Course Builder",
                description:
                  "Easily create interactive courses tailored to your needs.",
                icon: "📘",
              },
              {
                title: "Advanced Analytics",
                description:
                  "Track learner progress with detailed reports and insights.",
                icon: "📊",
              },
              {
                title: "Gamification Features",
                description:
                  "Boost engagement with badges, leaderboards, and rewards.",
                icon: "🎮",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-left"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mt-4 text-[#333333]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[#7F8C8D]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-[#F5A623] to-[#E74C3C] py-16 px-6 md:px-12 lg:px-24 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote:
                  "This LMS transformed our training programs with ease and efficiency.",
                name: "John Doe",
                role: "HR Manager",
              },
              {
                quote:
                  "The custom solutions provided unmatched flexibility for our needs.",
                name: "Jane Smith",
                role: "Education Consultant",
              },
              {
                quote: "The user-friendly design is perfect for our students.",
                name: "Michael Johnson",
                role: "Course Designer",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 rounded-lg p-6 shadow-md"
              >
                <p className="italic text-lg">"{testimonial.quote}"</p>
                <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
                <span className="text-sm">{testimonial.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4A90E2] text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg">
            Let us help you create custom LMS solutions that drive results.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#F5A623] text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-[#4A90E2] transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;
