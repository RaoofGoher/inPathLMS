import React, { useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faRocket, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive'

import Image1 from '../assets/h1.jpg';
import Image2 from '../assets/h2.jpg';
import Image3 from '../assets/h3.jpg';
import Image4 from '../assets/h4.jpg';

const heroData = [
  {
    image: Image1,
    title: 'Welcome to Our Service!',
    description: 'Experience the best service with us. We prioritize your satisfaction and strive to meet all your needs. Our team is dedicated to providing exceptional support and a seamless experience.',
    icon: faSmile,
  },
  {
    image: Image2,
    title: 'Explore Our Features!',
    description: 'Discover a range of features tailored to meet your needs. From user-friendly interfaces to advanced functionalities, we offer tools designed to enhance your productivity and efficiency.',
    icon: faRocket,
  },
  {
    image: Image3,
    title: 'Get Started Today!',
    description: 'Join us and start your journey with our easy onboarding process. Our platform is designed to get you up and running quickly, so you can focus on what really matters—growing your business.',
    icon: faStar,
  },
  {
    image: Image4,
    title: 'Join Us Today!',
    description: 'Become a part of our vibrant community and grow together. By joining us, you’ll gain access to a wealth of resources, expert insights, and a supportive network of professionals.',
    icon: faUsers,
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmall = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const settings = {
    dots: false, // Shows dots for navigation
    infinite: true, // Allows infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enables autoplay
    autoplaySpeed: 4000, // Duration for autoplay
    arrows: false, // Hides default arrows
    beforeChange: (current, next) => setCurrentIndex(next), // Update the index on slide change
  };

  return (
    <div className={`flex ${isSmall ? "flex-col" : ""} w-full h-[80vh]`}>
     

      {/* Text Column */}
      <div className={`${isSmall ? 'w-full' :'w-1/3'} flex flex-col justify-center text-left text-white bg-primaryColor p-4`}>
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={heroData[currentIndex].icon} className="text-8xl text-secondaryColor mb-2" />
          <h1 className="text-3xl font-bold">{heroData[currentIndex].title}</h1>
          <p className="mt-2">{heroData[currentIndex].description}</p>
        </div>
      </div>
       {/* Slider Column */}
       <div className={`${isSmall ? 'w-full' : 'w-2/3'} h-full`}>
        <Slider {...settings}>
          {heroData.map((item, index) => (
            <div key={index} className="relative w-full h-full">
              <img
                src={item.image}
                alt={`Hero ${index + 1}`}
                className="w-full h-[80vh] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    

  );
};

export default HeroSection;
