export default function IconHail() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      className="mx-auto w-9/12"
    >
      <defs>
        <linearGradient
          id="a"
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
        <linearGradient
          id="b"
          x1="23.25"
          y1="43.7"
          x2="24.75"
          y2="46.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset="0.45" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="30.25"
          y1="43.7"
          x2="31.75"
          y2="46.3"
          xlink:href="#b"
        />
        <linearGradient
          id="d"
          x1="37.25"
          y1="43.7"
          x2="38.75"
          y2="46.3"
          xlink:href="#b"
        />
      </defs>
      <path
        d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
        stroke="#e6effc"
        stroke-miterlimit="10"
        stroke-width="0.5"
        fill="url(#a)"
      />
      <path
        d="M24,43.5A1.5,1.5,0,1,0,25.5,45,1.5,1.5,0,0,0,24,43.5Z"
        fill="url(#b)"
      />
      <path
        d="M31,43.5A1.5,1.5,0,1,0,32.5,45,1.5,1.5,0,0,0,31,43.5Z"
        fill="url(#c)"
      />
      <path
        d="M38,43.5A1.5,1.5,0,1,0,39.5,45,1.5,1.5,0,0,0,38,43.5Z"
        fill="url(#d)"
      />
    </svg>
  );
}
