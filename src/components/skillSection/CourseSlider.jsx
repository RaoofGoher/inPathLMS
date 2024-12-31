import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoursePopup from "./CoursePopup";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CourseSlider = ({ courses }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null); // Track which course is hovered

  return (
    <div className="relative">
      <Swiper
        className="z-0"
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
            onMouseEnter={() => setHoveredCourse(course.id)}
            onMouseLeave={() => setHoveredCourse(null)}
          >
            <div className="ml-12 border-4 border-red-800">
              <img src={course.thumbnail} alt={course.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Show the CoursePopup outside the Swiper */}
      {hoveredCourse && (
        <CoursePopup course={courses.find((course) => course.id === hoveredCourse)} />
      )}
    </div>
  );
};

export default CourseSlider;
