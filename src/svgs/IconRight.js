import React from "react";

const IconRight = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 14 26"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    transform="rotate(90)"
  >
<path fill={fill} d="M18.3 19.7C18.7 20.1 19.3 20.1 19.7 19.7 20.1 19.3 20.1 18.7 19.7 18.3L7.7 6.3C7.3 5.9 6.7 5.9 6.3 6.3L-5.7 18.3C-6.1 18.7-6.1 19.3-5.7 19.7 -5.3 20.1-4.7 20.1-4.3 19.7L7 8.4 18.3 19.7Z"/>


  </svg>
);

export default IconRight;