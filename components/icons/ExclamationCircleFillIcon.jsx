const ExclamationCircleFillIcon = ({ size, color }) => {
  const iconStyle = `fill-current h-${size} w-${size} m-auto ${color}`;
  return (
    <svg
      focusable="false"
      className={iconStyle}
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </svg>
  );
};

export default ExclamationCircleFillIcon;