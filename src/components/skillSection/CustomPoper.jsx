import React, { useState, useEffect, useRef } from "react";

const CustomPopup = ({ children, targetRef, isVisible, onClose }) => {
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isVisible && targetRef.current && popupRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const popupRect = popupRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = targetRect.bottom + 10; // Default below the element
      let left = targetRect.left;

      // Adjust for right overflow
      if (left + popupRect.width > viewportWidth) {
        left = viewportWidth - popupRect.width - 10; // 10px margin
      }

      // Adjust for bottom overflow
      if (top + popupRect.height > viewportHeight) {
        top = targetRect.top - popupRect.height - 10; // Position above
      }

      // Update position
      setPosition({ top, left });
    }
  }, [isVisible, targetRef]);

  if (!isVisible) return null;

  return (
    <div
      ref={popupRef}
      style={{
        position: "absolute", 
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 9999,
        background: "#fff",
        border: "1px solid #ccc",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        padding: "10px",
        maxWidth: "200px",
      }}
      onMouseLeave={onClose}
    >
      {children}
    </div>
  );
};

export default CustomPopup;
