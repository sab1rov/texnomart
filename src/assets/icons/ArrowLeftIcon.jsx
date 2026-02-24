import * as React from "react"
const ArrowLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M4.696 7.4h9.026v1.2H4.696l4.345 4.344-.849.849L2.4 8l5.793-5.794.849.849L4.696 7.4Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M16 0H0v16h16z" />
      </clipPath>
    </defs>
  </svg>
)
export default ArrowLeftIcon
