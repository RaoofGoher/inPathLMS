import React, { useState } from 'react';
import image1 from "../assets/h1.jpg"
import image2 from "../assets/h2.jpg"
import image3 from "../assets/h3.jpg"
const caseStudiesData = [
  {
    id: 1,
    title: "Boosting Online Course Sales",
    summary: "Learn how ABC Academy increased sales by 40% using our LMS.",
    description:
      "ABC Academy leveraged advanced analytics and personalized learning paths to boost online course sales by 40%. By utilizing our platform, they could track user progress, enhance user experience, and implement targeted marketing strategies.",
    image: image1,
    stats: [
      { value: "40%", label: "Sales Increase" },
      { value: "20K+", label: "New Enrollments" },
    ],
  },
  {
    id: 2,
    title: "Scaling Education Platforms",
    summary: "Discover how we supported XYZ University in scaling to 100K students.",
    description:
      "XYZ University successfully scaled their platform to accommodate 100K students while maintaining a seamless experience. Our system ensured uptime, efficient resource allocation, and enhanced collaboration tools.",
    image: image2,
    stats: [
      { value: "100K", label: "Students" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    id: 3,
    title: "Enhancing Learner Retention",
    summary: "Find out how DEF Platform achieved a 30% rise in retention.",
    description:
      "DEF Platform focused on interactive content and gamification features, resulting in a 30% increase in learner retention rates. Our tools provided actionable insights and engaging features for long-term learning.",
    image: image3,
    stats: [
      { value: "30%", label: "Retention Increase" },
      { value: "5K+", label: "Courses Completed" },
    ],
  },
];

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-dark1 text-center mb-6">Case Studies</h2>

      {!selectedCaseStudy ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudiesData.map((caseStudy) => (
            <div
              key={caseStudy.id}
              onClick={() => setSelectedCaseStudy(caseStudy)}
              className="cursor-pointer p-4 bg-lightColor2 shadow-lg rounded-lg hover:shadow-xl transition"
              style={{ border: `2px solid ${caseStudy.id % 2 === 0 ? '#50E3C2' : '#4A90E2'}` }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primaryColor mb-2">{caseStudy.title}</h3>
                <p className="text-dark1">{caseStudy.summary}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 bg-lightColor2 shadow-md rounded-md">
          <button
            onClick={() => setSelectedCaseStudy(null)}
            className="mb-4 text-primaryColor underline"
          >
            &larr; Back to Case Studies
          </button>
          <img
            src={selectedCaseStudy.image}
            alt={selectedCaseStudy.title}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold text-dark1 mb-2">
            {selectedCaseStudy.title}
          </h1>
          <p className="text-light3 mb-4">{selectedCaseStudy.description}</p>
          {selectedCaseStudy.stats && (
            <div className="grid grid-cols-2 gap-4">
              {selectedCaseStudy.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-lightColor1 rounded-md shadow-sm"
                >
                  <span className="text-2xl font-bold text-dark2">{stat.value}</span>
                  <span className="text-dark1 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
