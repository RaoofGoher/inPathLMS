import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const SubCategorySlider = ({ subcategories, onSubCategorySelect }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // State to track the selected subcategory
  const [paused, setPaused] = useState(false); // State to track whether autoplay is paused
  const [swiperInstance, setSwiperInstance] = useState(null); // Store the swiper instance

  const handleSubCategoryClick = (subcategory) => {
    setSelectedSubCategory(subcategory.id); // Set the selected subcategory
    onSubCategorySelect(subcategory); // Call the parent handler

    // Pause or resume autoplay when a subcategory is clicked
    if (swiperInstance) {
      if (paused) {
        swiperInstance.autoplay.start();
      } else {
        swiperInstance.autoplay.stop();
      }
      setPaused(!paused); // Toggle the paused state
    }
  };

  return (
    <Swiper
      className="mt-8 bg-lightBlue"
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
      onSwiper={setSwiperInstance} // Get the swiper instance
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
