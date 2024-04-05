export default function IconClearDay() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="mx-auto w-9/12"
    >
      <defs>
        <linearGradient
          id="a"
          x1="26.75"
          y1="22.91"
          x2="37.25"
          y2="41.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fbbf24" />
          <stop offset="0.45" stop-color="#fbbf24" />
          <stop offset="1" stop-color="#f59e0b" />
        </linearGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="10.5"
        stroke="#f8af18"
        stroke-miterlimit="10"
        stroke-width="0.5"
        fill="url(#a)"
      />
      <path
        d="M32,15.71V9.5m0,45V48.29M43.52,20.48l4.39-4.39M16.09,47.91l4.39-4.39m0-23-4.39-4.39M47.91,47.91l-4.39-4.39M15.71,32H9.5m45,0H48.29"
        fill="none"
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
      />
    </svg>
  );
}
