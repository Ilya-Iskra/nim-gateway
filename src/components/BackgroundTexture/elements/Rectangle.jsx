function Rectangle({ style }) {
  return (
    <svg
      style={style}
      className="figure"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.25"
        y="1.25"
        width="11.5"
        height="11.5"
        rx="1.75"
        stroke="black"
        strokeOpacity="0.05"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export default Rectangle;
