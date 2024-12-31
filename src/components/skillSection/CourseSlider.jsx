import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CourseSlider = ({ courses }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null); // Track which course is hovered
  const hoveredRef = useRef(null); // Reference to the currently hovered element
  console.log(courses, "courses");

  return (
    <div className="relative">
      <Swiper
        className="z-10"
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide
            key={course.id}
            onMouseEnter={() => setHoveredCourse(course)}
            onMouseLeave={() => setHoveredCourse(null)}
            className="py-4"
          >
            <div
              className="relative ml-12 w-full h-64 perspective-1000"
              ref={hoveredRef}
            >
              <div className="flip-card w-full h-full transition-transform duration-300">
                <div className="flip-card-inner w-full h-full transform-style-preserve-3d shadow-lg">
                  {/* Front of the card */}
                  <div className="flip-card-front absolute w-full h-full bg-white">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content Below Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                    <h4 className="text-black font-bold">{course.title}</h4>
                    <p className="text-black text-sm">
                      Price: ${course.price}
                    </p>
                    <p className="text-black text-sm">
                      Discount: {course.discount_percentage}%
                    </p>
                  </div>

                  {/* Back of the card */}
                  <div className="flip-card-back absolute w-full h-full bg-white border-4 border-blueColor flex flex-col items-center justify-center text-center transform-rotateY-180">
                    <h4 className="font-bold text-lg">{course.title}</h4>
                    <p className="text-sm text-gray-600">
                      {course.description.length > 100
                        ? `${course.description.substring(0, 300)}...`
                        : course.description}
                    </p>
                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
