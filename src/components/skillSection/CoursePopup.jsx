import React from "react";
import { usePopper } from "react-popper";

const CoursePopup = ({ course }) => {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "auto",
   
  });

  return (
    <div ref={setReferenceElement} >
      <div
        ref={setPopperElement}
        style={{...styles.popper, width: "300px"}}
        {...attributes.popper}
        className="bg-white shadow-lg p-4 rounded border-4 border-red-800"
      >
        <h4 className="font-bold">{course.title}</h4>
        <p className="text-gray-700">{course.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CoursePopup;
