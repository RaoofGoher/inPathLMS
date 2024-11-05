import React from 'react';
import Slider from 'react-slick';
/* Add this in your main CSS file or index.js */
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

const heroData = [
  {
    image: 'https://via.placeholder.com/600x400?text=Image+1',
    text: 'Welcome to Our Service!',
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Image+2',
    text: 'Explore Our Features!',
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Image+3',
    text: 'Get Started Today!',
  },
];

const HeroSection = () => {
  const settings = {
    dots: true, // Shows dots for navigation
    infinite: true, // Allows infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enables autoplay
    autoplaySpeed: 4000, // Duration for autoplay
    arrows: false, // Hides default arrows
  };

  return (
    <div className="relative w-full h-96">
      <Slider {...settings}>
        {heroData.map((item, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={item.image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute left-0 top-0 flex items-center justify-start text-left text-white bg-blue-500 bg-opacity-70 p-4"
              style={{ width: '40%' }}
            >
              <h1 className="text-3xl font-bold">{item.text}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
