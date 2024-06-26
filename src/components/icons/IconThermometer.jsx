export default function IconThermometer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="mx-auto w-9/12"
    >
      <defs>
        <linearGradient
          id="a"
          x1="23.73"
          y1="19.16"
          x2="39.18"
          y2="45.93"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#515a69" stop-opacity="0.05" />
          <stop offset="0.45" stop-color="#6b7280" stop-opacity="0.05" />
          <stop offset="1" stop-color="#384354" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="23.48"
          y1="18.73"
          x2="39.43"
          y2="46.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#d4d7dd" />
          <stop offset="0.45" stop-color="#d4d7dd" />
          <stop offset="1" stop-color="#bec1c6" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="42" r="4.5" fill="#ef4444" />
      <path
        d="M32,27V42"
        fill="none"
        stroke="#ef4444"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
      />
      <path
        d="M39,41.9a7,7,0,1,1-14,0,7.12,7.12,0,0,1,3-5.83v-17a4,4,0,1,1,8,0v17A7.12,7.12,0,0,1,39,41.9ZM32.5,25H36m-3.5-4H36m-3.5,8H36"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="url(#a)"
        stroke="url(#b)"
      />
      <path
        d="M42.72,34.92a2.18,2.18,0,1,1-1.53-3.72,2.17,2.17,0,0,1,1.53,3.72Zm-2.21-.86a.91.91,0,0,0,.68.28.93.93,0,0,0,.68-.28.89.89,0,0,0,.28-.67.93.93,0,0,0-.28-.68.87.87,0,0,0-.68-.29.89.89,0,0,0-.68.29.93.93,0,0,0-.28.68A.89.89,0,0,0,40.51,34.06Z"
        fill="#374151"
      />
      <path
        d="M50.89,31.41a.47.47,0,0,1,.11.35v.66a.46.46,0,0,1-.11.35.5.5,0,0,1-.36.1H46.44v2.46h3.44a.55.55,0,0,1,.36.1.5.5,0,0,1,.11.36v.65a.5.5,0,0,1-.11.36.51.51,0,0,1-.36.1H46.44v3.44a.38.38,0,0,1-.45.46h-.76a.55.55,0,0,1-.36-.1.46.46,0,0,1-.11-.36V31.76a.43.43,0,0,1,.11-.35.5.5,0,0,1,.36-.1h5.3A.5.5,0,0,1,50.89,31.41Z"
        fill="#374151"
      />
    </svg>
  );
}
