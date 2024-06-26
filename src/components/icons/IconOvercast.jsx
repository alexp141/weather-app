export default function IconOvercast() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="mx-auto w-9/12"
    >
      <defs>
        <linearGradient
          id="a-1"
          x1="16.5"
          y1="19.67"
          x2="21.5"
          y2="28.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fbbf24" />
          <stop offset="0.45" stop-color="#fbbf24" />
          <stop offset="1" stop-color="#f59e0b" />
        </linearGradient>
        <linearGradient
          id="b-1"
          x1="40.76"
          y1="23"
          x2="50.83"
          y2="40.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset="0.45" stop-color="#9ca3af" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
        <linearGradient
          id="c-1"
          x1="22.56"
          y1="21.96"
          x2="39.2"
          y2="50.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
      </defs>
      <circle
        cx="19"
        cy="24"
        r="5"
        stroke="#f8af18"
        stroke-miterlimit="10"
        stroke-width="0.5"
        fill="url(#a-1)"
      />
      <path
        d="M19,15.67V12.5m0,23V32.33m5.89-14.22,2.24-2.24M10.87,32.13l2.24-2.24m0-11.78-2.24-2.24M27.13,32.13l-2.24-2.24M7.5,24h3.17M30.5,24H27.33"
        fill="none"
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <path
        d="M34.23,33.45a4.05,4.05,0,0,0,4.05,4H54.79a4.34,4.34,0,0,0,.81-8.61,3.52,3.52,0,0,0,.06-.66,4.06,4.06,0,0,0-6.13-3.48,6.08,6.08,0,0,0-11.25,3.19,6.34,6.34,0,0,0,.18,1.46h-.18A4.05,4.05,0,0,0,34.23,33.45Z"
        stroke="#848b98"
        stroke-miterlimit="10"
        stroke-width="0.5"
        fill="url(#b-1)"
      />
      <path
        d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
        stroke="#e6effc"
        stroke-miterlimit="10"
        stroke-width="0.5"
        fill="url(#c-1)"
      />
    </svg>
  );
}
