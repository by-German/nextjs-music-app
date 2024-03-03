export const PauseIcon = ({
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
      viewBox="0 -960 960 960"
      fill={filled ? fill : 'none'}
      {...props}
    >
      <path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" />
    </svg>
  );
}