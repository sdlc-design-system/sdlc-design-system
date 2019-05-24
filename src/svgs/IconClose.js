import React from "react";

const IconClose = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="M505.9 6.1c-8.1-8.1-21.2-8.1-29.2 0L6.1 476.7c-8.1 8.1-8.1 21.2 0 29.2C10.1 510 15.4 512 20.7 512c5.3 0 10.6-2 14.6-6.1L505.9 35.3C514 27.2 514 14.1 505.9 6.1z"/>
    <path fill={fill} d="M505.9 476.7L35.3 6.1c-8.1-8.1-21.2-8.1-29.2 0 -8.1 8.1-8.1 21.2 0 29.2l470.6 470.6c4 4 9.3 6.1 14.6 6.1 5.3 0 10.6-2 14.6-6.1C514 497.9 514 484.8 505.9 476.7z"/>
  </svg>
);

export default IconClose;