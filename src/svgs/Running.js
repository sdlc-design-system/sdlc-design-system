import React from "react";

const Running = ({
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
    <path fill={fill} d="M503 111l-1-1c-12-12-31-12-43 0l-46 47c-2 2-6 3-9 0l-65-60c-6-6-14-9-23-9h-96c-2 0-4 1-6 2l-81 77c-12 12-13 31-2 43 6 6 14 10 22 10h0c8 0 16-4 22-10l58-61h21L120 300H37c-20 0-36 15-37 33 -1 10 3 19 10 26 7 7 16 11 26 11h124c2 0 5-1 6-3l63-68 53 56 -16 103c-4 17 4 34 19 41 5 2 10 3 15 3 5 0 11-1 16-4 9-5 16-13 19-24l27-147c1-3 0-6-2-8l-73-73 58-58 41 41c11 11 31 11 42 0l76-76c6-6 9-13 9-21C512 125 509 117 503 111z"/>
    <path fill={fill} d="M406 115c29 0 53-24 53-53 0-29-24-53-53-53 -29 0-53 24-53 53C353 91 377 115 406 115z"/>
  </svg>
);

export default Running;