import React, { useState } from "react";
import image2 from "../../assets/teachOnInPath/onteach1.png";
import image1 from "../../assets/teachOnInPath/onteach2.png";
import image3 from "../../assets/teachOnInPath/onteach3.png";

const HowTOBegin = () => {
  const [openTab, setOpenTab] = useState(0); // Track the currently open tab, default is the first tab

  const tabs = [
    {
      title: "Plan your curriculum",
      content: (
        <>
          <div className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-16">
            <img
              src={image1}
              alt="Plan your curriculum"
              className="w-full sm:w-1/2"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-start flex flex-col gap-4">
                You start with your passion and knowledge. Then choose a
                promising topic with the help of our Marketplace Insights tool.
                <span className="text-start">
                  The way that you teach — what you bring to it — is up to you.
                </span>
              </p>

              <div>
                <h2 className="text-blueColor text-xl font-bold mt-4 mb-4">
                  How we help you
                </h2>
                <p>
                  We offer plenty of resources on how to create your first
                  course.And, our instructor dashboard and curriculum pages help
                  keep you organized.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Record your video",
      content: (
        <>
          <div className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-16">
            <img
              src={image2}
              alt="Record your video"
              className="w-full sm:w-1/2"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-start flex flex-col gap-4">
                Use basic tools like a smartphone or a DSLR camera. Add a good
                microphone and you’re ready to start.
                <span className="text-start">
                  If you don’t like being on camera, just capture your screen.
                  Either way, we recommend two hours or more of video for a paid
                  course.
                </span>
              </p>

              <div>
                <h2 className="text-blueColor text-xl font-bold mt-4 mb-4">
                  How we help you
                </h2>
                <p>
                  Our support team is available to help you throughout the
                  process and provide feedback on test videos.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Launch your course",
      content: (
        <>
          <div className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-16">
            <img
              src={image3}
              alt="Launch your course"
              className="w-full sm:w-1/2 "
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-start flex flex-col gap-4">
                Gather your first ratings and reviews by promoting your course
                through social media and your professional networks.
                <span className="text-start">
                  Your course will be discoverable in our marketplace where you
                  earn revenue from each paid enrollment.
                </span>
              </p>

              <div>
                <h2 className="text-blueColor text-xl font-bold mt-4 mb-4">
                  How we help you
                </h2>
                <p>
                  Our custom coupon tool lets you offer enrollment incentives
                  while our global promotions drive traffic to courses. There’s
                  even more opportunity for courses chosen for INPATH Business.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const toggleTab = (index) => {
    setOpenTab(openTab === index ? null : index); // Toggle the tab open/close
  };

  return (
    <div className="flex justify-center items-center py-8"> {/* Reduced padding here */}
      <div className="w-full max-w-screen-xl px-4">
        {/* Title */}
        <div className="text-center mb-6"> {/* Reduced bottom margin */}
          <h2 className="text-blueColor text-4xl font-bold">How to begin</h2>
        </div>

        {/* Navigation for all screens */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0">
          {/* Tabbed Navigation for Mobile */}
          <div className="w-full">
            <div className="lg:hidden">
              {tabs.map((tab, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleTab(index)}
                    className={`cursor-pointer w-full flex justify-between text-blueColor py-4 px-4 text-lg font-semibold text-left border-y ${
                      openTab === index ? "" : "bg-white"
                    }`}
                  >
                    {tab.title}
                    <span className="ml-2">
                      {openTab === index ? "˄" : "˅"}
                    </span>
                  </button>
                  {openTab === index && (
                    <div className="p-4 overflow-hidden">{tab.content}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Slider Navigation for Large Screens */}
            <div className="hidden lg:block">
              {/* Slider Navigation (Horizontal for large screens) */}
              <div className="flex justify-center space-x-4 mb-4"> {/* Reduced bottom margin */}
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTab(index)}
                    className={`py-2 px-4 text-lg font-semibold text-dark1 focus:text-blueColor text-left border-2 ${
                      openTab === index
                        ? "border-blueColor text-blueColor"
                        : "border-transparent"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Slider Content */}
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-300"
                  style={{ transform: `translateX(-${openTab * 100}%)` }}
                >
                  {tabs.map((tab, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-4">
                      {tab.content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTOBegin;
