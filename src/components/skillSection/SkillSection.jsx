import React, { useState, useEffect, useRef } from "react";
import { useGetCoursesQuery } from "../../features/explore/getall"; // Adjust import path
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice"; // Adjust path if needed
import { useNavigate } from "react-router-dom";
const SliderWithPopup = () => {
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );
  const { data, isLoading, isError } = useGetCoursesQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryRef = useRef(null);
  const subcategoryRef = useRef(null);
  const courseRef = useRef(null);
  const cartItems = useSelector((state) => state.cart.items);
  const [showCategoryScroll, setShowCategoryScroll] = useState({
    left: false,
    right: false,
  });
  const [showSubcategoryScroll, setShowSubcategoryScroll] = useState({
    left: false,
    right: false,
  });
  const [showCourseScroll, setShowCourseScroll] = useState({
    left: false,
    right: false,
  });

  // Function to check scroll visibility
  const checkScrollButtons = (ref, setShowScroll) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;

      setShowScroll({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth,
      });
    }
  };

  // Scroll handler
  const handleScroll = (ref, direction, setShowScroll) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(() => checkScrollButtons(ref, setShowScroll), 300);
    }
  };

  useEffect(() => {
    if (data && !selectedCategory) {
      setSelectedCategory(data[0]);
      setSelectedSubcategory(data[0]?.subcategories[0]);
    }
  }, [data]);

  useEffect(() => {
    checkScrollButtons(categoryRef, setShowCategoryScroll);
  }, [data]);

  useEffect(() => {
    checkScrollButtons(subcategoryRef, setShowSubcategoryScroll);
  }, [selectedCategory]);

  useEffect(() => {
    checkScrollButtons(courseRef, setShowCourseScroll);
  }, [selectedSubcategory]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  const handleAddToCart = (course) => {
    if (isAuthenticated ) {

    const existingItem = cartItems.find((item) => item.id === course.id);

    if (existingItem) {
      alert("This course is already in your cart!");
    } else {
      dispatch(
        addToCart({
          id: course.id,
          name: course.title,
          price: course.final_price,
          quantity: 1,
        })
      );
    }
  }else {
    alert("please login to continue")
  }
  };

  const handleCheckout = () => {
    if (isAuthenticated ) {

    navigate("/shopping")
    }else {
      alert("please login to continue")
    }
  }

  return (
    <div className="slider-container">
      {/* Categories Section */}
      <div className="slider-section">
        <h1 className="section-title">All the skills you need in one place</h1>
        <p className="text-3xl mb-4">
          From critical skills to technical topics, InPATH supports your professional development.
        </p>
        <div className="slider-wrapper">
          {showCategoryScroll.left && (
            <button
              className="slider-button left-button"
              onClick={() => handleScroll(categoryRef, "left", setShowCategoryScroll)}
            >
              <FaChevronLeft />
            </button>
          )}
          <div
            className="slider-content"
            ref={categoryRef}
            onScroll={() => checkScrollButtons(categoryRef, setShowCategoryScroll)}
          >
            {data.map((category) => (
              <div
                key={category.id}
                className={`slider-item ${selectedCategory?.id === category.id ? "active-item" : ""
                  }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubcategory(category.subcategories[0]);
                }}
              >
                {category.name}
              </div>
            ))}
          </div>
          {showCategoryScroll.right && (
            <button
              className="slider-button right-button"
              onClick={() => handleScroll(categoryRef, "right", setShowCategoryScroll)}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>

      {/* Subcategories Section */}
      {selectedCategory && (
        <div className="slider-section">
          <div className="slider-wrapper">
            {showSubcategoryScroll.left && (
              <button
                className="slider-button left-button"
                onClick={() =>
                  handleScroll(subcategoryRef, "left", setShowSubcategoryScroll)
                }
              >
                <FaChevronLeft />
              </button>
            )}
            <div
              className="slider-content"
              ref={subcategoryRef}
              onScroll={() => checkScrollButtons(subcategoryRef, setShowSubcategoryScroll)}
            >
              {selectedCategory.subcategories.map((subcategory) => (
                <div
                  key={subcategory.id}
                  className={`slider-item ${selectedSubcategory?.id === subcategory.id
                    ? "active-item2"
                    : ""
                    }`}
                  onClick={() => setSelectedSubcategory(subcategory)}
                >
                  {subcategory.name}
                </div>
              ))}
            </div>
            {showSubcategoryScroll.right && (
              <button
                className="slider-button right-button"
                onClick={() =>
                  handleScroll(subcategoryRef, "right", setShowSubcategoryScroll)
                }
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Courses Section */}
      {selectedSubcategory && (
        <div className="slider-section p-8" style={{ backgroundColor: "#f9f9f9f9" }}>
          <div className="slider-wrapper">
            {showCourseScroll.left && (
              <button
                className="slider-button left-button"
                onClick={() => handleScroll(courseRef, "left", setShowCourseScroll)}
              >
                <FaChevronLeft />
              </button>
            )}
            <div
              className="slider-content"
              ref={courseRef}
              onScroll={() => checkScrollButtons(courseRef, setShowCourseScroll)}
            >
              {selectedSubcategory.courses.map((course) => (
                
                <div
                  key={course.id}
                  className="course-card"
                  onMouseEnter={() => setHoveredCourse(course)}
                  onMouseLeave={() => setHoveredCourse(null)}
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="course-thumbnail"
                  />
                  <h3 className="text-2xl">{course.title}</h3>
                  <p>{course.description}</p>
                  <p>{course.price} $</p>

                  {/* Hover Popup */}
                  {hoveredCourse?.id === course.id && (
                    <div className="popup-card" style={popupStyles}>
                      <h3 className="text-xl">{hoveredCourse.title}</h3>
                      <p>{hoveredCourse.description}</p>
                      <p>
                        Price: ${hoveredCourse.price}{" "}
                        {hoveredCourse.discount_percentage && (
                          <span>
                            ({hoveredCourse.discount_percentage}% Discount)
                          </span>
                        )}
                      </p>
                      {hoveredCourse.discount_percentage && (
                        <>
                        <p>
                          Total Price: $
                          {(
                            hoveredCourse.price -
                            (hoveredCourse.price * hoveredCourse.discount_percentage) / 100
                          ).toFixed(2)}
                        </p>
                      
                      <button
                      onClick={()=>{handleAddToCart(hoveredCourse)}}
                      className="px-4 py-2 m-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center gap-2 transition-all duration-300 md:px-6 md:py-3"
                    >
                   Add to cart
                    </button>

                    <button onClick={()=>{handleCheckout(hoveredCourse)}} className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center justify-center gap-2 transition-all duration-300 md:px-6 md:py-3">
                      checkout
                    </button>
                    </>
                      )}
                     
                    </div>
                  )}
                </div>
              ))}
            </div>
            {showCourseScroll.right && (
              <button
                className="slider-button right-button"
                onClick={() => handleScroll(courseRef, "right", setShowCourseScroll)}
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const popupStyles = {
  position: "absolute",
  top: "0",
  left: "90%",
  width: "300px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  zIndex: 100,
  animation: "slideIn 0.5s ease-in-out", // Apply animation
};
export default SliderWithPopup;
