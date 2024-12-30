import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic styles for swiper
import 'swiper/css/navigation'; // Styles for navigation buttons
import { Autoplay,Navigation} from 'swiper/modules';
; // Correct import for Navigation in Swiper v11

const CategorySlider = ({ categories, onCategorySelect }) => {
  return (
    <div className="relative">
      <Swiper
      
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
            slidesPerView:4,
            spaceBetween: 50,
          },
        }}


      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}  >
            <button
              onClick={() => onCategorySelect(category)}
              className="font-bold p-2 text-blueColor rounded-md w-[320px] hover:underline"
            >
              {category.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
};

export default CategorySlider;
