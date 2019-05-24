import React from "react";

const IconSolution = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 496 495"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="m496 374.707031v-60.425781l-29.832031-7.640625c-2.335938-7.558594-5.351563-14.863281-9-21.796875l15.679687-26.472656-42.71875-42.730469-26.480468 15.691406c-6.929688-3.65625-14.234376-6.675781-21.792969-9.011719l-7.648438-29.820312h-60.421875l-7.640625 29.832031c-7.558593 2.335938-14.863281 5.351563-21.792969 9.007813l-26.480468-15.691406-1.871094 1.890624v-25.039062h-24c-6.742188 0-13.222656-2.867188-17.769531-7.867188-4.605469-5.0625-6.773438-11.628906-6.117188-18.511718 1.160157-12.117188 12.253907-21.621094 25.261719-21.621094h22.625v-72c0-13.234375-10.769531-24-24-24h-64v-6.625c0-21.167969-15.855469-39.257812-36.097656-41.183594-11.261719-1.105468-22.488282 2.640625-30.804688 10.207032-8.320312 7.558593-13.097656 18.359374-13.097656 29.601562v8h-64c-13.230469 0-24 10.765625-24 24v72h22.625c13.007812 0 24.101562 9.503906 25.261719 21.613281.65625 6.878907-1.511719 13.457031-6.117188 18.511719-4.546875 5.007812-11.027343 7.875-17.769531 7.875h-24v72c0 13.230469 10.769531 24 24 24h80v-22.625c0-13.007812 9.496094-24.113281 21.617188-25.265625 6.894531-.582031 13.460937 1.519531 18.519531 6.128906 5 4.535157 7.863281 11.007813 7.863281 17.761719v24h77.128906c-2.847656 5.847656-5.359375 11.878906-7.296875 18.148438l-29.832031 7.640624v60.425782l29.832031 7.640625c2.335938 7.558593 5.351563 14.863281 9 21.796875l-15.679687 26.472656 42.71875 42.730469 26.480468-15.6875c6.929688 3.652343 14.234376 6.671875 21.792969 9.007812l7.648438 29.824219h60.421875l7.640625-29.832031c7.558593-2.335938 14.863281-5.355469 21.792969-9.011719l26.480468 15.691406 42.71875-42.730468-15.679687-26.472657c3.65625-6.925781 6.664062-14.230469 9-21.796875zm-341.097656-139.808593c-8.316406-7.566407-19.566406-11.335938-30.804688-10.207032-20.242187 1.925782-36.097656 20.015625-36.097656 41.183594v6.625h-64c-4.40625 0-8-3.585938-8-8v-56h8c11.246094 0 22.03125-4.777344 29.609375-13.105469 7.558594-8.320312 11.285156-19.542969 10.207031-30.800781-1.9375-20.238281-20.023437-36.09375-41.191406-36.09375h-6.625v-56c0-4.417969 3.59375-8 8-8h80v-24c0-6.753906 2.863281-13.226562 7.863281-17.769531 5.066407-4.601563 11.617188-6.738281 18.519531-6.128907 12.121094 1.160157 21.617188 12.265626 21.617188 25.273438v22.625h80c4.40625 0 8 3.582031 8 8v56h-6.625c-21.167969 0-39.253906 15.855469-41.191406 36.101562-1.070313 11.25 2.648437 22.480469 10.207031 30.800782 7.578125 8.320312 18.363281 13.097656 29.609375 13.097656h8v25.039062l-24.839844 24.839844 8.359375 14.121094h-55.519531v-8c0-11.242188-4.777344-22.042969-13.097656-29.601562zm298.335937 134.238281-1.214843 4.511719c-2.527344 9.394531-6.230469 18.355468-11.007813 26.632812l-2.335937 4.058594 14.0625 23.742187-25.15625 25.167969-23.746094-14.070312-4.046875 2.335937c-8.289063 4.773437-17.257813 8.476563-26.648438 11.007813l-4.511719 1.214843-6.839843 26.761719h-35.578125l-6.847656-26.761719-4.511719-1.214843c-9.390625-2.53125-18.351563-6.234376-26.648438-11.007813l-4.046875-2.335937-23.746094 14.070312-25.15625-25.167969 14.0625-23.742187-2.335937-4.058594c-4.777344-8.277344-8.480469-17.238281-11.007813-26.632812l-1.214843-4.511719-26.761719-6.847657v-35.574218l26.761719-6.847656 1.214843-4.511719c2.527344-9.394531 6.230469-18.351563 11.007813-26.632813l2.335937-4.054687-14.0625-23.746094 25.15625-25.167969 23.746094 14.070313 4.046875-2.335938c8.289063-4.773437 17.257813-8.476562 26.648438-11.007812l4.511719-1.214844 6.839843-26.765625h35.578125l6.847656 26.757812 4.511719 1.214844c9.390625 2.53125 18.351563 6.234375 26.648438 11.007813l4.046875 2.335937 23.746094-14.070312 25.15625 25.167968-14.0625 23.742188 2.335937 4.058594c4.777344 8.277344 8.480469 17.238281 11.007813 26.632812l1.214843 4.511719 26.761719 6.847656v35.574219zm0 0"/>
    <path fill={fill} d="m344 280.5c-35.289062 0-64 28.710938-64 64 0 35.285156 28.710938 64 64 64 13.921875 0 27.199219-4.457031 38.398438-12.882812l-9.613282-12.78125c-8.410156 6.316406-18.359375 9.664062-28.785156 9.664062-26.472656 0-48-21.53125-48-48 0-26.472656 21.527344-48 48-48s48 21.527344 48 48c0 10.421875-3.335938 20.375-9.664062 28.789062l12.792968 9.609376c8.414063-11.207032 12.871094-24.480469 12.871094-38.398438 0-35.289062-28.710938-64-64-64zm0 0"/>
    <path fill={fill} d="m344 248.5c-52.9375 0-96 43.0625-96 96 0 52.933594 43.0625 96 96 96s96-43.066406 96-96c0-52.9375-43.0625-96-96-96zm0 176c-44.113281 0-80-35.890625-80-80 0-44.113281 35.886719-80 80-80s80 35.886719 80 80c0 44.109375-35.886719 80-80 80zm0 0"/>
    <path fill={fill} d="m408 48.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m408 80.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m424 64.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m392 64.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m328 112.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m328 144.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m344 128.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m312 128.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m440 144.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m440 176.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m456 160.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m424 160.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m288 16.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m288 48.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m304 32.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m272 32.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m136 368.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m136 400.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m152 384.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m120 384.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m56 320.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m56 352.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m72 336.5h16v16h-16zm0 0"/>
    <path fill={fill} d="m40 336.5h16v16h-16zm0 0"/>
  </svg>
);

export default IconSolution;