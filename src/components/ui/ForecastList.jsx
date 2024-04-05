import { useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";
import IconClearDay from "../icons/IconClearDay";
import IconOvercast from "../icons/IconOvercast";
import IconFog from "../icons/IconFog";
import IconDrizzle from "../icons/IconDrizzle";
import IconHail from "../icons/IconHail";
import IconSnow from "../icons/IconSnow";
import IconRain from "../icons/IconRain";
import IconThunderstorm from "../icons/IconThunderstorm";

const weatherIconMap = new Map();
weatherIconMap.set(0, { WeatherIcon: IconClearDay, type: "Clear Day" });
weatherIconMap.set(1, { WeatherIcon: IconClearDay, type: "Mainly Clear" });
weatherIconMap.set(2, { WeatherIcon: IconOvercast, type: "Partly Cloudy" });
weatherIconMap.set(3, { WeatherIcon: IconOvercast, type: "Overcast" });
weatherIconMap.set(45, { WeatherIcon: IconFog, type: "Fog" });
weatherIconMap.set(48, { WeatherIcon: IconFog, type: "Fog" });

weatherIconMap.set(51, { WeatherIcon: IconDrizzle, type: "Drizzle" });
weatherIconMap.set(53, { WeatherIcon: IconDrizzle, type: "Drizzle" });
weatherIconMap.set(55, { WeatherIcon: IconDrizzle, type: "Drizzle" });
weatherIconMap.set(56, { WeatherIcon: IconDrizzle, type: "Drizzle" });
weatherIconMap.set(57, { WeatherIcon: IconDrizzle, type: "Drizzle" });

weatherIconMap.set(61, { WeatherIcon: IconRain, type: "Slight Rain" });
weatherIconMap.set(63, { WeatherIcon: IconRain, type: "Moderate Rain" });
weatherIconMap.set(65, { WeatherIcon: IconRain, type: "Heavy Rain" });

weatherIconMap.set(66, { WeatherIcon: IconHail, type: "Light Hail" });
weatherIconMap.set(67, { WeatherIcon: IconHail, type: "Light Hail" });

weatherIconMap.set(71, { WeatherIcon: IconSnow, type: "Light Snow" });
weatherIconMap.set(73, { WeatherIcon: IconSnow, type: "Moderate Snow" });
weatherIconMap.set(75, { WeatherIcon: IconSnow, type: "Heavy Snow" });
weatherIconMap.set(77, { WeatherIcon: IconSnow, type: "Snow Grains" });
weatherIconMap.set(85, { WeatherIcon: IconSnow, type: "Snow" });
weatherIconMap.set(86, { WeatherIcon: IconSnow, type: "Snow" });

weatherIconMap.set(80, { WeatherIcon: IconRain, type: "Slight Rain Showers" });
weatherIconMap.set(81, {
  WeatherIcon: IconRain,
  type: "Moderate Rain Showers",
});
weatherIconMap.set(82, { WeatherIcon: IconRain, type: "Heavy Rain Showers" });

weatherIconMap.set(95, {
  WeatherIcon: IconThunderstorm,
  type: "Thunderstorms",
});
weatherIconMap.set(96, {
  WeatherIcon: IconThunderstorm,
  type: "Thunderstorms",
});
weatherIconMap.set(99, {
  WeatherIcon: IconThunderstorm,
  type: "Thunderstorms",
});

export default function ForecastList() {
  const daily = useSelector((store) => {
    return store.weather.weatherData.daily;
  });

  return (
    //min-[1920px]:grid-cols-7
    <ul className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {daily.map((data) => {
        const weather_code = data.weather_code;
        const weatherIconData = weatherIconMap.get(weather_code);
        console.log(weather_code);

        return (
          <ForecastItem
            data={data}
            key={data.time}
            weatherIconData={weatherIconData}
          />
        );
      })}
    </ul>
  );
}
