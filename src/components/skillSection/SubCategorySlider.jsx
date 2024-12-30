import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const SubCategorySlider = ({ subcategories, onSubCategorySelect }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // State to track the selected subcategory

  const handleSubCategoryClick = (subcategory) => {
    setSelectedSubCategory(subcategory.id); // Set the selected subcategory
    onSubCategorySelect(subcategory); // Call the parent handler
  };

  return (
    <Swiper
      className="mt-8"
      slidesPerView={1}
      modules={[Autoplay, Navigation]}
      rewind={true}
      spaceBetween={10}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
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
      {subcategories.map((subcategory) => (
        <SwiperSlide key={subcategory.id}>
          <button
            className="font-bold p-2 text-blueColor rounded-md w-[320px] hover:underline"
            onClick={() => handleSubCategoryClick(subcategory)}
          >
            <span
              className={` p-2 ${
                selectedSubCategory === subcategory.id
                  ? "bg-gray-600 text-white rounded" // Add background and text color when selected
                  : ""
              }`}
            >
              {subcategory.name}
            </span>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SubCategorySlider;
