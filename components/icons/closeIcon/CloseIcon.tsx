import React from "react";

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

const CloseIcon = ({ className, width, height, fill }: IconProps) => {
  return (
    <svg
      className={className}
      width={width ? width : "40"}
      height={height ? height : "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" fill="white" />
      <rect
        x="12.4143"
        y="11"
        width="24"
        height="2"
        transform="rotate(45 12.4143 11)"
        fill={fill ? fill : "#C89C6C"}
      />
      <rect
        x="11"
        y="28"
        width="24"
        height="2"
        transform="rotate(-45 11 28)"
        fill={fill ? fill : "#C89C6C"}
      />
    </svg>
  );
};

export default CloseIcon;
