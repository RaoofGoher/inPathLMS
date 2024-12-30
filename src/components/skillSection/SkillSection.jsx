import React, { useState, useEffect, useRef } from "react";
import { useGetCoursesQuery } from "../../features/explore/getall"; // Adjust import path
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice"; // Adjust path if needed
import { useNavigate } from "react-router-dom";
const SliderWithPopup = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHoveredExpanded, setIsHoveredExpanded] = useState(false);
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const { token, role, isAuthenticated, user_id } = useSelector(
    (state) => state.auth
  );
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
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
console.log("course data",data)
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

      // Temporarily pause auto scrolling
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 3000); // Resume after 3 seconds

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

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (categoryRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = categoryRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          categoryRef.current.scrollLeft = 0; // Reset to the beginning
        } else {
          categoryRef.current.scrollLeft += 1; // Scroll slowly to the right
        }
      }
    }, 30); // Adjust this number for speed (lower = faster)

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  const handleAddToCart = (course) => {
    if (isAuthenticated) {
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
    } else {
      alert("please login to continue");
    }
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/shopping");
    } else {
      alert("please login to continue");
    }
  };
  //coruse expended

  const handleToggle = (courseId) => {
    setExpandedCourseId((prevId) => (prevId === courseId ? null : courseId));
  };

  const handleHoverToggle = () => {
    setIsHoveredExpanded((prev) => !prev); // Toggle on hover
  };
  return (
    <div className="slider-container ">
      {/* Categories Section */}
      <div className="slider-section ">
        <div className="px-4 sm:px-12">
          <h1 className=" text-blueColor font-semibold mb-2 text-base sm:text-xl font-montserrat">
            All the skills you need in one place
          </h1>
          <p className=" text-base sm:text-xl mb-2 font-nunito">
            From critical skills to technical topics, INPATH supports your
            professional development.
          </p>
        </div>
        <div className="slider-wrapper">
          {showCategoryScroll.left && (
            <button
              className="slider-button left-button"
              onClick={() =>
                handleScroll(categoryRef, "left", setShowCategoryScroll)
              }
            >
              <FaChevronLeft />
            </button>
          )}
          <div
            className="slider-content"
            ref={categoryRef}
            onScroll={() =>
              checkScrollButtons(categoryRef, setShowCategoryScroll)
            }
          >
            {data.map((category) => (
              <div
                key={category.id}
                className={`font-semibold text-base  slider-item ${
                  selectedCategory?.id === category.id ? "active-item" : ""
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
              onClick={() =>
                handleScroll(categoryRef, "right", setShowCategoryScroll)
              }
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
              onScroll={() =>
                checkScrollButtons(subcategoryRef, setShowSubcategoryScroll)
              }
            >
              {selectedCategory.subcategories.map((subcategory) => (
                <div
                  key={subcategory.id}
                  className={` text-sm px-2 slider-item ${
                    selectedSubcategory?.id === subcategory.id
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
                  handleScroll(
                    subcategoryRef,
                    "right",
                    setShowSubcategoryScroll
                  )
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
        <div
          className="slider-section"
          style={{ backgroundColor: "#f9f9f9f9" }}
        >
          <div className="slider-wrapper">
            {showCourseScroll.left && (
              <button
                className="slider-button left-button"
                onClick={() =>
                  handleScroll(courseRef, "left", setShowCourseScroll)
                }
              >
                <FaChevronLeft />
              </button>
            )}
            <div
              className="slider-content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              ref={courseRef}
              onScroll={() =>
                checkScrollButtons(courseRef, setShowCourseScroll)
              }
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
                    className="course-thumbnail w-full"
                  />
                  <div className="w-full mt-2 text-justify">
                    <h3 className="text-sm text-semibold text-nowrap">
                      {course.title}
                    </h3>
                    <p
                      className={`font-nunito text-wrap  text-xs ${
                        expandedCourseId === course.id ? "" : "truncate"
                      }`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp:
                          expandedCourseId === course.id ? "none" : 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {course.description}
                    </p>
                    <button
                      className="text-blue-500 text-xs mt-2"
                      onClick={() => handleToggle(course.id)}
                    >
                      {expandedCourseId === course.id
                        ? "Show Less"
                        : "Read More"}
                    </button>
                  </div>
                  <div className="flex items-center mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-5 h-5 ${
                            index < 4 // Example: 4 out of 5 stars
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.521 8.332 1.211-6.064 5.908 1.432 8.313-7.368-3.869-7.368 3.869 1.432-8.313-6.064-5.908 8.332-1.211z" />
                        </svg>
                      ))}
                    <span className="ml-2 text-gray-600 text-sm">(4.0)</span>{" "}
                    {/* Example rating */}
                  </div>
                  <p className="font-nunito">{course.price} $</p>

                  {/* Hover Popup */}
                  {hoveredCourse?.id === course.id && (
                    <div className="h-full absolute top-0 left-full w-80 bg-[#E5F2FF] shadow-lg rounded-lg p-4 z-50 animate-slide-in transform transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2 font-montserrat">
                        {hoveredCourse.title}
                      </h3>
                      {/* <p className="text-gray-600 mb-2 font-montserrat"> */}
                      <p
                        className={`text-gray-600 mb-2 text-wrap font-montserrat text-sm ${
                          expandedCourseId === course.id ? "" : "truncate"
                        }`}
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp:
                            expandedCourseId === course.id ? "none" : 3,
                          WebkitBoxOrient: "vertical",
                        }}
                        onMouseEnter={handleHoverToggle} // Hover to expand
                        onMouseLeave={handleHoverToggle} // Hover out to collapse
                      >
                        {hoveredCourse.description}
                      </p>
                      <button
                        className="text-blue-500 text-xs mt-2"
                        onClick={() => handleToggle(course.id)}
                      >
                        {expandedCourseId === course.id
                          ? "Show Less"
                          : "Read More"}
                      </button>
                      <p className="text-gray-800 mb-2 font-montserrat">
                        Price: ${hoveredCourse.price}{" "}
                        {hoveredCourse.discount_percentage && (
                          <span className="text-green-500 font-medium">
                            ({hoveredCourse.discount_percentage}% Off)
                          </span>
                        )}
                      </p>
                      {hoveredCourse.discount_percentage && (
                        <p className="text-gray-900 font-semibold mb-4">
                          <span className="text-gray-500 font-montserrat">
                            Total Price:{" "}
                          </span>
                          $
                          {(
                            hoveredCourse.price -
                            (hoveredCourse.price *
                              hoveredCourse.discount_percentage) /
                              100
                          ).toFixed(2)}
                        </p>
                      )}
                      <div className="flex justify-between font-montserrat">
                        <button
                          onClick={() => handleAddToCart(hoveredCourse)}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300 shadow-sm"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleCheckout(hoveredCourse)}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400 transition duration-300 shadow-sm"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {showCourseScroll.right && (
              <button
                className="slider-button right-button"
                onClick={() =>
                  handleScroll(courseRef, "right", setShowCourseScroll)
                }
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


export default SliderWithPopup;
