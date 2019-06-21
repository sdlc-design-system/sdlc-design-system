
import React from "react";

const RoundCheck = ({
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
      d="M13 0C5.8 0 0 5.8 0 13 0 20.2 5.8 26 13 26 20.2 26 26 20.2 26 13 26 5.8 20.2 0 13 0L13 0ZM20.1 8C20.6 8.4 20.6 9.1 20.1 9.5L10.8 18.9C10.5 19.1 10.3 19.2 10 19.2 9.7 19.2 9.4 19.1 9.2 18.9L6 15.7C5.6 15.3 5.6 14.6 6 14.2 6.5 13.7 7.1 13.7 7.6 14.2L10 16.6 18.6 8C19 7.5 19.7 7.5 20.1 8L20.1 8Z"
    />
  </svg>
);

export default RoundCheck;