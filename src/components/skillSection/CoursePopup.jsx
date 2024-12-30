import React, { useState } from "react";
import { usePopper } from "react-popper";

const CoursePopup = ({ course }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right",
  });

  return (
    <div
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      ref={setReferenceElement}
    >
      {showPopup && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-white shadow-lg p-4 rounded"
        >
          <h4>{course.title}</h4>
          <p>{course.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursePopup;
