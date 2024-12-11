import React, { useState, useEffect } from "react";
import image1 from "../assets/trustUsDesgin1.svg";
import image2 from "../assets/trustUsDesgin2.svg";
import image3 from "../assets/trustUsDesgin3.svg"
const WhyTrustUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  // Autoplay functionality
  useEffect(() => {
    if (settings.autoplay) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
      }, settings.autoplaySpeed);

      return () => clearInterval(interval);
    }
  }, [currentIndex, settings.autoplaySpeed, settings.autoplay]);
  return (
    <>
      <div className=" mt-72 md:mt-24 mx-4 md:mx-16 flex flex-col-reverse sm:flex-row ">
      <div className="w-full h-[80vh] overflow-hidden relative shadow-2xl rounded-2xl">
      <div className="w-full h-screen">
        <div
          className="flex w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: `transform ${settings.speed}ms ease`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="min-w-full h-full shadow-2xl rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
        <div className=" p-6 lg:p-8  bg-primaryColor rounded-lg md:h-[80vh]  md:ml-4">
          <h1 className=" lg:mb-2 font-bold text-[2rem] lg:text-[2.9rem] text-center text-lightColor2">
                Why Trust Us?
            </h1>
            <ul className="flex flex-col gap-1 lg:gap-2 text-white ">
                <li>
                <h1 className="font-bold text-[0.8rem] md:text-xl">1. Proven Learning Success</h1>
                <span className=" text-[0.6rem] lg:text-[0.8rem]  ">
                    Our LMS has helped thousands of students reach their learning
                goals. With positive feedback and success stories from users,
                we’re dedicated to delivering high-quality education and
                consistent results.
              </span>
            </li>
            <hr />
            <li className="object-fill">
              <h1 className="font-bold text-[0.8rem] md:text-xl">
                2. Student-Centric Learning Experience
              </h1>
              <span className="text-[0.6rem] lg:text-[0.8rem] ">
                Designed with learners in mind, our platform offers personalized
                learning paths, interactive content, and adaptive features. We
                strive to create an engaging, user-friendly experience that
                empowers students to learn at their own pace.
              </span>
            </li>
            <hr />
            <li className="object-fill">
              <h1 className="font-bold text-[0.8rem] md:text-xl ">3. Transparent Progress Tracking</h1>
              <span className="text-[0.6rem] lg:text-[0.8rem] ">
                We prioritize clarity and accountability by providing real-time
                progress tracking and achievement records. Our intuitive
                dashboard ensures that both learners and educators stay informed
                every step of the way.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WhyTrustUs;
