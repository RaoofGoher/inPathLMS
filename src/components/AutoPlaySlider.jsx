import React from 'react';
import Slider from 'react-slick';
import Image1 from '../assets/hero1.jpg';
import Image2 from '../assets/hero2.jpg';
import Image3 from '../assets/hero3.jpg';

const images = [Image1, Image2, Image3];

const AutoPlaySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Optional: enables fade transition
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlaySlider;
