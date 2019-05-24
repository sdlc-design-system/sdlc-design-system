import React from "react";

const IconInformation = ({
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
      d="M13 0C5.8 0 0 5.8 0 13 0 20.2 5.8 26 13 26 20.2 26 26 20.2 26 13 26 5.8 20.2 0 13 0L13 0ZM13.8 19.1C13.8 19.5 13.4 19.8 13 19.8 12.6 19.8 12.3 19.5 12.3 19.1L12.3 8.9C12.3 8.5 12.6 8.1 13 8.1 13.4 8.1 13.8 8.5 13.8 8.9L13.8 19.1 13.8 19.1ZM13 7.2C12.5 7.2 12 6.7 12 6.2 12 5.6 12.5 5.2 13 5.2 13.5 5.2 14 5.6 14 6.2 14 6.7 13.5 7.2 13 7.2L13 7.2Z"    
    />
  </svg>
);

export default IconInformation;