import React from "react";

const Lock = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill} 
      d="M17 10L18 10C19.1 10 20 10.9 20 12L20 24C20 25.1 19.1 26 18 26L2 26C0.9 26 0 25.1 0 24L0 12C0 10.9 0.9 10 2 10L3 10 3 7C3 3.1 6.1 0 10 0 13.9 0 17 3.1 17 7L17 10ZM14 10L14 7C14 4.8 12.2 3 10 3 7.8 3 6 4.8 6 7L6 10 14 10Z"
    />
  </svg>
);

export default Lock;