import React from "react";

const Check = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 27 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  
    <path fill={fill} d="M6.2 12.2C4.7 11.1 2.6 11.4 1.5 12.9 0.4 14.4 0.7 16.5 2.2 17.6L8.9 22.7C10.4 23.8 12.6 23.5 13.7 22L25.5 6C26.6 4.5 26.3 2.4 24.8 1.3 23.3 0.2 21.1 0.5 20 2L10.3 15.3 6.2 12.2Z"/>
 </svg>
);

export default Check;