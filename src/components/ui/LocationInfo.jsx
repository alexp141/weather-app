import { useSelector } from "react-redux";
import Search from "./Search";

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default function LocationInfo() {
  const {
    city,
    country,
    country_code,
    current: { temperature_2m },
  } = useSelector((store) => {
    return store.weather.weatherData;
  });

  const flag = getFlagEmoji(country_code);

  return (
    <div className="flex flex-col col-start-1 col-end-3 items-center my-8 ">
      <span className="text-4xl md:text-5xl lg:text-6xl">
        {temperature_2m} &deg;F
      </span>
      <span className="text-8xl md:text-9xl lg:text-10xl">{flag}</span>
      <span className="text-xl md:text-2xl lg:text-3xl">{`${city}, ${country}`}</span>
      <Search />
    </div>
  );
}
