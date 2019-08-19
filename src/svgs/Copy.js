import React from "react";

const Copy = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >  
    <g transform="translate(-552 -988)translate(553 989)">
      <path stroke={fill} fill="none" d="M2.5 2.5L2.5 10.5 10.5 10.5 10.5 2.5 2.5 2.5Z"/>
      <polyline stroke={fill} fill="none" points="6 0 0 0 0 5.8"/>
    </g>  
  </svg>
);

export default Copy;