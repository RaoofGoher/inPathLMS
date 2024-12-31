import React from "react";
import { usePopper } from "react-popper";

const CoursePopup = ({ course }) => {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'auto', // Default placement
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [500, 0], // Adjust popup distance
        },
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: 'viewport', // Ensure it doesn’t overflow
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start', 'bottom-start', 'right', 'left'], // Adjust to available space
        },
      },
    ],
  });

  return (
    <div
      ref={setReferenceElement}
      className="relative inline-block cursor-pointer"
    >
      <div
        ref={setPopperElement}
        style={{ ...styles.popper, width: "300px" }}
        {...attributes.popper}
        className="bg-white shadow-lg p-4 rounded border-2 border-gray-200 z-50"
      >
        <h4 className="font-bold text-lg mb-2">{course.title}</h4>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CoursePopup;
