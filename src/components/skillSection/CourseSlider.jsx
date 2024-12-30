import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoursePopup from "./CoursePopup";

const CourseSlider = ({ courses }) => {
  return (
    <Swiper slidesPerView={3} autoplay>
      {courses.map((course) => (
        <SwiperSlide key={course.id}>
          <div className="relative">
            <img src={course.thumbnail} alt={course.title} />
            <CoursePopup course={course} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CourseSlider;
