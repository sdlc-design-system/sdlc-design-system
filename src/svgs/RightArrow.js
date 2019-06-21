import React from "react";

const RightArrow = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 24 20"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill} 
      d="M20.5 10.8L0.8 10.8C0.3 10.8 0 10.4 0 10 0 9.6 0.3 9.2 0.8 9.2L20.5 9.2 12.5 1.3C12.2 1 12.2 0.5 12.5 0.2 12.8-0.1 13.3-0.1 13.6 0.2L22.9 9.5C23.2 9.8 23.2 10.2 22.9 10.5L13.6 19.8C13.3 20.1 12.8 20.1 12.5 19.8 12.2 19.5 12.2 19 12.5 18.7L20.5 10.8Z"
    />
  </svg>
);

export default RightArrow;