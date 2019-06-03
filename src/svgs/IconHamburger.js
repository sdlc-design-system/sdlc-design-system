import React from "react";

const IconHamburger = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 35 29"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >    
    <path strokeWidth={"3"} stroke={fill} d="M1.5 2L33.5 2"/>
    <path strokeWidth={"3"} stroke={fill} d="M1.5 14L33.5 14"/>
    <path strokeWidth={"3"} stroke={fill} d="M1.5 27L21 27"/>
  </svg>
);

export default IconHamburger;