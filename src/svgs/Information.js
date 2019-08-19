import React from "react";

const Information = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill} 
      d="M15 30C6.7 30 0 23.3 0 15 0 6.7 6.7 0 15 0 23.3 0 30 6.7 30 15 30 23.3 23.3 30 15 30ZM13.4 8.3C13.4 9.2 14 9.7 15.1 9.7 15.6 9.7 16 9.6 16.3 9.3 16.5 9.1 16.7 8.7 16.7 8.3 16.7 7.3 16.1 6.8 15.1 6.8 14 6.8 13.4 7.3 13.4 8.3ZM16.5 22L16.5 11.1 13.6 11.1 13.6 22 16.5 22Z"    
    />
  </svg>
);

export default Information;