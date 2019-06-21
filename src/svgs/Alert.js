import React from "react";

const Alert = ({
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
      d="M26 22L15 1C14 0 14 0 13 0 12 0 12 0 11 1L0 22C0 23 0 23 0 24 1 25 1 25 2 25L24 25C25 25 25 25 26 24 26 23 26 23 26 22L26 22ZM12 7C12 7 13 6 13 6 13 6 14 7 14 7L14 17C14 18 13 18 13 18 13 18 12 18 12 17L12 7 12 7ZM13 21C12 21 12 21 12 20 12 20 12 19 13 19 14 19 14 20 14 20 14 21 14 21 13 21L13 21Z"
    />
  </svg>
);

export default Alert;