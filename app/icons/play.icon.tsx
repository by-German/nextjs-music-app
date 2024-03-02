import React from "react";

export const PlayIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}: {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
  [key: string]: any;
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : 'none'}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};