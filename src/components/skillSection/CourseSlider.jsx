import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const CourseSlider = ({ courses }) => {
   const dispatch = useDispatch();
  const [hoveredCourse, setHoveredCourse] = useState(null); // Track which course is hovered
  const hoveredRef = useRef(null); // Reference to the currently hovered element
const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (course) => {
    console.log("Adding to cartttt...", course);
    if (isAuthenticated) {
      const existingItem = cartItems.find((item) => item.id === course.id);

      if (existingItem) {
        alert("This course is already in your cart!");
      } else {
        dispatch(
          addToCart({
            id: course.id,
            name: course.title,
            price: course.price,
            discount_percentage: course.discount_percentage,
            quantity: 1,
          })
        );
      }
    } else {
      alert("please login to continue");
    }
  };


  return (
    <div className="relative bg-lightBlue">
      <Swiper
        className="z-10"
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
          
          <SwiperSlide
            key={course.id}
            onMouseEnter={() => setHoveredCourse(course)}
            onMouseLeave={() => setHoveredCourse(null)}
            className="py-4"
          >
            <div
              className="relative ml-12 w-full h-64 perspective-1000"
              ref={hoveredRef}
            >
              <div className="flip-card w-full h-full transition-transform duration-300">
                <div className="flip-card-inner w-full h-full transform-style-preserve-3d shadow-lg">
                  {/* Front of the card */}
                  <div className="flip-card-front absolute w-full h-full bg-white">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content Below Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                    <h4 className="text-black font-bold">{course.title}</h4>
                    <p className="text-black text-sm">
                      Price: ${course.price}
                    </p>
                    <p className="text-black text-sm">
                      Discount: {course.discount_percentage}%
                    </p>
                  </div>

                  {/* Back of the card */}
                  <div className="flip-card-back absolute w-full h-full bg-white border-4 border-blueColor flex flex-col items-center justify-center text-center transform-rotateY-180">
                    <h4 className="font-bold text-lg">{course.title}</h4>
                    <p className="text-sm text-gray-600">
                      {course.description.length > 100
                        ? `${course.description.substring(0, 300)}...`
                        : course.description}
                    </p>
                    <button onClick={() => handleAddToCart(course)} className="mt-4 bg-blueColor text-white px-4 py-2 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
