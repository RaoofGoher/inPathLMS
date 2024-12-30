import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoursePopup from "./CoursePopup";
import 'swiper/css/navigation'; // Styles for navigation buttons
import { Navigation } from 'swiper/modules'; // Correct import for Navigation in Swiper v11


const CourseSlider = ({ courses }) => {
  return (
    <Swiper 
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
