import React from "react";
import Work from "../assets/Inpathwork.png";
import image3 from "../assets/REAL-TIME-PROGRESS.png";
import image1 from "../assets/PERSONALIZED-LEARNING.png";
import image2 from "../assets/ENGAGING-CONTENT.png";

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-16">
      <div className="text-center flex flex-col items-center justify-center gap-4 mb-8">
        <h1 className="underline text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-blueColor">
          How InPATH Works
        </h1>
        <p className="text-dark1 flex flex-col items-center justify-center text-sm sm:text-sm md:text-sm lg:text-sm">
          <span>
            Inpath platform is meticulously designed to make learning not only
            easy but also
          </span>
          <span>
            engaging and accessible for everyone. We understand that education
            is a journey that
          </span>
          <span>
            should be enjoyable and tailored to meet the diverse needs of
            students and educators alike.
          </span>
        </p>
      </div>

      {/* Title and Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 lg:gap-8 px-4 sm:px-8 md:px-16 justify-center items-center">
        <ul className="flex flex-col gap-4 lg:gap-6">
          {/* Personalized Learning Paths */}
          <li className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 p-4 border-2 border-s-8 border-blueColor rounded-xl shadow-md shadow-grayColor">
            <div className="">
              <img className="w-1/6 sm:w-full" src={image1} alt="Personalized Learning" />
            </div>
            <div className="text-left">
              <h1 className="font-bold text-sm sm:text-base md:text-sm  mb-2 text-blueColor">
                Personalized Learning Paths
              </h1>
              <span className="text-xs sm:text-sm md:text-sm lg:text-xs text-dark1">
                Create customized learning journeys that match each student’s
                pace and style. LMS adapts to different skill levels, ensuring a
                personalized experience for all users.
              </span>
            </div>
          </li>

          {/* Engaging Content & Assessments */}
          <li className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 p-4 border-2 border-s-8 border-blueColor rounded-xl shadow-md shadow-grayColor">
            <div className="">
              <img className="w-1/6 sm:w-full" src={image2} alt="Engaging Content" />
            </div>
            <div className="text-left">
              <h1 className="font-bold text-sm sm:text-base md:text-sm  mb-2 text-blueColor">
                Engaging Content & Assessments
              </h1>
              <span className="text-xs sm:text-sm md:text-sm lg:text-xs text-dark1">
                Access a variety of multimedia content, including videos,
                quizzes, and assignments. LMS offers interactive features that
                make learning fun and measurable.
              </span>
            </div>
          </li>

          {/* Real-Time Progress Tracking */}
          <li className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 p-4 border-2 border-s-8 border-blueColor rounded-xl shadow-md shadow-grayColor">
            <div >
              <img className="w-1/6 sm:w-full" src={image3} alt="Real-Time Progress" />
            </div>
            <div className=" text-left">
              <h1 className="font-bold text-sm sm:text-base md:text-sm  mb-2 text-blueColor">
                Real-Time Progress Tracking
              </h1>
              <span className="text-xs sm:text-sm md:text-sm lg:text-xs text-dark1">
                Track your progress with detailed analytics and performance
                reports. Both students and instructors can monitor achievements,
                making it easy to stay on track.
              </span>
            </div>
          </li>
        </ul>

        {/* Image Section */}
        <div className="hidden sm:flex justify-center items-center mt-10 sm:mt-0">
          <img src={Work} alt="How our LMS works" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
