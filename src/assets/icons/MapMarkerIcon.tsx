const MapMarkerIcon = ({
  width = 52,
  height = 65,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 52 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.5391 60.6C25.5391 60.6 48.0783 40.5652 48.0783 25.5391C48.0783 13.0911 37.9872 3 25.5391 3C13.0911 3 3 13.0911 3 25.5391C3 40.5652 25.5391 60.6 25.5391 60.6Z"
      stroke={color}
      strokeWidth={6}
    />
    <path
      d="M32.7401 24.6005C32.7401 28.5769 29.5165 31.8005 25.5401 31.8005C21.5636 31.8005 18.3401 28.5769 18.3401 24.6005C18.3401 20.624 21.5636 17.4005 25.5401 17.4005C29.5165 17.4005 32.7401 20.624 32.7401 24.6005Z"
      stroke={color}
      strokeWidth={6}
    />
  </svg>
);

export default MapMarkerIcon;
