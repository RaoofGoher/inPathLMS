import React from "react";
import image1 from "../assets/Courses-Available.png";
import image2 from "../assets/Students-Enrolled.png";
import image3 from "../assets/Certified-instructors.png";
import image4 from "../assets/Courses-Completed.png";

const statisticsData = [
  { number: "350+", label: "Courses Available", image: image1 },
  { number: "10,000+", label: "Students Enrolled", image: image2 },
  { number: "500+", label: "Certified Instructors", image: image3 },
  { number: "7,500+", label: "Courses Completed", image: image4 },
];

const StatisticsSection = () => {
  return (
    <section className="py-12 bg-white ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold font-montserrat  mb-4 text-blueColor underline">
          Our Achievements
        </h2>
        <p className="text-xl mb-12">
          Join thousands of learners and instructors in our growing community.
        </p>
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 gap-6 justify-around items-center">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center"
            >
              <div className="border-2 p-2 sm:p-0 border-blueColor border-e-0 rounded-s-xl w-24 h-24 mt-3 flex justify-center items-center mb-4">
                <img src={stat.image} alt={stat.label} className="w-16 h-16" />
              </div>
              <div className="bg-blueColor rounded-xl text-white font-bold text-2xl p-8 text-center">
                <h1 className="font-montserrat">{stat.number}</h1>
                <h2 className="font-montserrat">{stat.label}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
