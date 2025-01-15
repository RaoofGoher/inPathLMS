import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic styles for swiper
import 'swiper/css/navigation'; // Styles for navigation buttons
import { Autoplay, Navigation } from 'swiper/modules'; // Correct import for Navigation in Swiper v11

const CategorySlider = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
  const [paused, setPaused] = useState(false); // State to track whether autoplay is paused
  const [swiperInstance, setSwiperInstance] = useState(null); // Store the swiper instance

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id); // Set the selected category
    onCategorySelect(category); // Call the parent handler

    // Pause or resume autoplay when a category is clicked
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
    <div className="relative">
      <Swiper
        className='z--10'
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
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="font-bold p-2 text-blueColor rounded-md w-[320px] hover:underline"
            >
              <span
                className={` p-2 ${
                  selectedCategory === category.id
                    ? 'p-8 bg-gray-600 text-white rounded' // Add background and text color when selected
                    : ''
                }`}
              >
                {category.name}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
