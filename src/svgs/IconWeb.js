import React from "react";

const IconWeb = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 480 480"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="M392 0H88C65.9 0 48 17.9 48 40v216c0 22.1 17.9 40 40 40h109.4l-11.4 40H160v16h160v-16h-26l-11.4-40H392c22.1 0 40-17.9 40-40V40C432 17.9 414.1 0 392 0zM202.6 336l11.4-40h51.9l11.4 40H202.6zM416 256c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24v-16h352V256zM416 224H64V40c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24V224z"/>
    <path fill={fill} d="M304 368H80c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-96C312 371.6 308.4 368 304 368zM296 464H88v-80h208V464z"/>
    <rect fill={fill} x="104" y="432" width="16" height="16"/><rect x="104" y="400" width="16" height="16"/>
    <rect fill={fill} x="136" y="400" width="16" height="16"/><rect x="168" y="400" width="16" height="16"/>
    <rect fill={fill} x="232" y="400" width="16" height="16"/><rect x="200" y="400" width="16" height="16"/>
    <rect fill={fill} x="264" y="432" width="16" height="16"/><rect x="264" y="400" width="16" height="16"/>
    <rect fill={fill} x="136" y="432" width="112" height="16"/>
    <path fill={fill} d="M368 368c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40 22.1 0 40-17.9 40-40v-32C408 385.9 390.1 368 368 368zM392 440c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-13.3 10.7-24 24-24s24 10.7 24 24V440z"/>
    <rect fill={fill} x="360" y="400" width="16" height="16"/>
    <rect fill={fill} x="181.7" y="120.1" transform="matrix(0.2751 -0.9614 0.9614 0.2751 50.7457 323.5759)" width="116.4" height="16"/>
    <path fill={fill} d="M197.1 94.1l-10.2-12.3 -48 40c-3.4 2.8-3.8 7.9-1 11.3 0.3 0.4 0.7 0.7 1 1l48 40 10.2-12.3L156.5 128 197.1 94.1z"/>
    <path fill={fill} d="M342.1 122.9c-0.3-0.4-0.6-0.7-1-1l-48-40 -10.2 12.3L323.5 128l-40.6 33.9 10.2 12.3 48-40C344.5 131.3 345 126.3 342.1 122.9z"/>
  </svg>
);

export default IconWeb;