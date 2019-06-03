import React from "react";

const IconCopy = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 13 14"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >    
    <rect stroke={fill} fill="none" x="3.5" y="4" width="8.6" height="9.5"/>
    <path stroke={fill} fill="none" d="M0.9 7.3L7.1 1 0.9 1 0.9 7.3Z"/>
  </svg>
);

export default IconCopy;