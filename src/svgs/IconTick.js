import React from "react";

const IconTick = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    
    <path fill={fill} d="M19.7 0.4C19.3-0.1 18.6-0.1 18.3 0.4L6.3 16.7 1.7 10.4C1.3 9.9 0.7 9.9 0.3 10.4 -0.1 11-0.1 11.8 0.3 12.4L5.6 19.6C6 20.1 6.6 20.1 7 19.6L19.7 2.4C20.1 1.8 20.1 1 19.7 0.4Z"/>
  </svg>
);

export default IconTick;