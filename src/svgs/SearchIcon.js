import React from "react";

const SearchIcon = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 451 451"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill} 
      d="M447 428l-110-110c29-34 47-78 47-126C385 86 298 0 192 0 86 0 0 86 0 192s86 192 192 192c48 0 92-18 126-47L428 447c3 3 6 4 10 4s7-1 10-4C452 442 452 433 447 428zM27 192c0-91 74-165 165-165 91 0 165 74 165 165s-74 165-165 165C101 358 27 284 27 192z"
    />
  </svg>
);

export default SearchIcon;