import React from "react";

const Controls = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="M8 14c3.5 0 6.4-2.6 6.9-6H54c0.6 0 1-0.4 1-1s-0.4-1-1-1H14.9C14.4 2.6 11.5 0 8 0 4.1 0 1 3.1 1 7S4.1 14 8 14zM8 2c2.8 0 5 2.2 5 5s-2.2 5-5 5S3 9.8 3 7 5.2 2 8 2z"/>
    <path fill={fill} d="M48 42c-3.5 0-6.4 2.6-6.9 6H2c-0.6 0-1 0.4-1 1s0.4 1 1 1h39.1c0.5 3.4 3.4 6 6.9 6 3.9 0 7-3.1 7-7S51.9 42 48 42zM48 54c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S50.8 54 48 54z"/>
    <path fill={fill} d="M54 27H35.4c-0.4-3.6-3.5-6.4-7.2-6.4 -3.7 0-6.8 2.8-7.2 6.4H2c-0.6 0-1 0.4-1 1s0.4 1 1 1h19.1c0.6 3.4 3.5 6 7.1 6 3.6 0 6.5-2.6 7.1-6H54c0.6 0 1-0.4 1-1S54.6 27 54 27zM28.2 33C25.3 33 23 30.7 23 27.8s2.3-5.2 5.2-5.2 5.2 2.3 5.2 5.2S31.1 33 28.2 33z"/>
  </svg>
);

export default Controls;