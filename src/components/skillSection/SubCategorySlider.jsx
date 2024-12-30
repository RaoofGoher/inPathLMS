import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SubCategorySlider = ({ subcategories, onSubCategorySelect }) => {
  return (
    <Swiper  slidesPerView={6} autoplay>
      {subcategories.map((subcategory) => (
        <SwiperSlide key={subcategory.id}>
          <button onClick={() => onSubCategorySelect(subcategory)}>
            {subcategory.name}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SubCategorySlider;
