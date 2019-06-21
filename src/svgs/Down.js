import React from "react";

const Down = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 26 14"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M1.7 0.3C1.3-0.1 0.7-0.1 0.3 0.3 -0.1 0.7-0.1 1.3 0.3 1.7L12.3 13.7C12.7 14.1 13.3 14.1 13.7 13.7L25.7 1.7C26.1 1.3 26.1 0.7 25.7 0.3 25.3-0.1 24.7-0.1 24.3 0.3L13 11.6 1.7 0.3Z" />
  </svg>
);

export default Down;