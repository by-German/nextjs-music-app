export const SkipBackIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: number;
  width?: number;
  [key: string]: any;
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : 'none'}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    </svg>
  );
}