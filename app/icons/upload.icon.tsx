export const UploadIcon = ({
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
      height={height || size || 24}
      viewBox="0 -960 960 960"
      fill={filled ? fill : 'none'}
      {...props}
    >
      <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
    </svg>
  );
}
