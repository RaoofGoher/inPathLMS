import React from "react";

const WhyTrustUs = () => {
  return (
    <>
    <section className="hidden sm:block">
      <div className=" px-6 py-8 sm:px-16 sm:py-16 bg-white grid grid-cols-1 gap-8  lg:grid-cols-2 xl:grid-cols-2 justify-center items-center">
        {/* Left Content */}
        <div className="flex items-center justify-center">
          <div className=" text-center sm:text-start ">
            <h1 className="font-bold text-2xl sm:text-3xl mb-8 text-blueColor ">
              Why Trust Us?
            </h1>
            <h2 className="text-4xl text-dark1 sm:text-5xl md:text-6xl  font-bold text-balance sm:w-[35rem] flex flex-col">
              Dedicated to
              <span>
                Your <span className="text-blueColor">Educational</span>
              </span>
              <span>Journey</span>
            </h2>
            <p className="text-base sm:text-start sm:text-lg lg:text-md mb-6 mt-10 text-balance">
              We are committed to providing a transparent and reliable learning
              environment, ensuring that your educational journey is supported
              every step of the way. With proven results and a passionate
              community, we empower you to achieve your goals with confidence.
            </p>
          </div>
        </div>

        {/* Right Content (Text List) */}
        <div>
          <ul className="flex flex-col gap-4 lg:gap-6">
            <li className="p-4 border-2 border-e-8 border-blueColor rounded-xl shadow-md shadow-grayColor">
              <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-3xl mb-2 text-blueColor">
                1. Proven Learning Success
              </h1>
              <span className="text-xs sm:text-sm md:text-base ">
                Our LMS has helped thousands of students reach their learning
                goals. With positive feedback and success stories from users,
                we’re dedicated to delivering high-quality educaon and
                consistent results.
              </span>
            </li>

            <li className="p-4 border-2 border-e-8 border-blueColor rounded-xl shadow-md shadow-grayColor">
              <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-3xl mb-2 text-blueColor">
                2. Student-Centric Learning Experience
              </h1>
              <span className="text-xs sm:text-sm md:text-base ">
                Designed with learners in mind, our plaorm offers personalized
                learning paths, interacve content, and adapve features. We
                strive to create an engaging
              </span>
            </li>

            <li className="p-4 border-2 border-e-8 border-blueColor rounded-xl shadow-md shadow-grayColor">
              <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-3xl mb-2 text-blueColor">
                3. Transparent Progress Tracking
              </h1>
              <span className="text-xs sm:text-sm md:text-base ">
                Track your progress with detailed analycs and performance
                reports. Both students and instructors can monitor achievements,
                making it easy to stay on track.
              </span>
            </li>
          </ul>
        </div>
      </div>
      </section>
    </>
  );
};

export default WhyTrustUs;
