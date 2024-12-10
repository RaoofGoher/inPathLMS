import React from 'react';
import Work from '../assets/howItWorks.svg'
import { useMediaQuery } from 'react-responsive';

const HowItWorks = () => {
    const isSmart = useMediaQuery({
        query: '(max-width: 768px)',
      });
  return (
    <section className={`${isSmart ? "mt-[350px]" : ""} max-w-6xl mx-auto p-6 text-center lg:text-left`}>
      {/* Title and Description */}
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-secondaryColor mb-4">How Our InPath Works</h2>
          <p className="text-gray-600 mb-8">
            Our platform is designed to make learning easy, engaging, and accessible. Explore how our LMS empowers students and educators through a seamless blend of technology and personalized learning experiences.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <img src={`${Work}`} alt="How our LMS works" />
        </div>
      </div>

      {/* Steps Section */}
      <div className="grid gap-8 lg:grid-cols-3 mt-12">
        {[
          { 
            id: 1, 
            title: 'Personalized Learning Paths', 
            description: 'Create customized learning journeys that match each student’s pace and style. Our LMS adapts to different skill levels, ensuring a personalized experience for all users.' 
          },
          { 
            id: 2, 
            title: 'Engaging Content & Assessments', 
            description: 'Access a variety of multimedia content, including videos, quizzes, and assignments. Our LMS offers interactive features that make learning fun and measurable.' 
          },
          { 
            id: 3, 
            title: 'Real-Time Progress Tracking', 
            description: 'Track your progress with detailed analytics and performance reports. Both students and instructors can monitor achievements, making it easy to stay on track.' 
          },
        ].map((step) => (
          <div key={step.id} className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-secondaryColor text-white font-semibold rounded-full mb-4">
              {step.id}
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
