import React from "react";

const Delete = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 482 482"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="M381 58h-75C302 25 275 0 241 0c-33 0-61 25-65 58h-75c-30 0-55 25-55 55v3c0 23 14 43 35 51v260c0 30 25 55 55 55h210c30 0 55-25 55-55V167c20-8 35-28 35-51v-3C436 83 412 58 381 58zM241 26c19 0 35 14 38 32h-77C206 40 222 26 241 26zM375 427c0 16-13 29-29 29H136c-16 0-29-13-29-29V171h268V427zM410 116c0 16-13 29-29 29H101c-16 0-29-13-29-29v-3c0-16 13-29 29-29h280c16 0 29 13 29 29V116z"/>
    <path fill={fill} d="M171 423c7 0 13-6 13-13V263c0-7-6-13-13-13 -7 0-13 6-13 13v147C158 417 164 423 171 423z"/>
    <path fill={fill} d="M241 423c7 0 13-6 13-13V263c0-7-6-13-13-13 -7 0-13 6-13 13v147C228 417 234 423 241 423z"/>
    <path fill={fill} d="M311 423c7 0 13-6 13-13V263c0-7-6-13-13-13 -7 0-13 6-13 13v147C298 417 304 423 311 423z"/>

  </svg>
);

export default Delete;