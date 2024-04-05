import { useSelector } from "react-redux";

export default function Header() {
  const {
    relative_humidity_2m,
    snowfall,
    wind_speed_10m,
    apparent_temperature,
  } = useSelector((store) => {
    return store.weather.weatherData.current;
  });
  const rowDataStyle =
    "flex justify-evenly tracking-wide text-2xl text-lgsm:px-3 md:px-9 sm:text-3xl xl:px-4 xl:text-4xl";
  return (
    //desktop flex justify-around items-center col-start-1 col-end-8 justify-self-stretch text-xl
    <div className="flex flex-col sm:grid sm:grid-cols-2 items-center gap-x-4 col-start-1 col-end-3 text-lg px-4 py-4 gap-y-4">
      <div className={rowDataStyle}>
        <span>Humidity: </span>
        <span>{`${relative_humidity_2m}%`}</span>
      </div>

      <div className={rowDataStyle}>
        <span>Wind: </span>
        <span>{`${wind_speed_10m}`} mp/h</span>
      </div>
      <div className={rowDataStyle}>
        <span>Feels Like: </span>
        <span>{`${apparent_temperature}`} &deg;F</span>
      </div>

      <div className={rowDataStyle}>
        <span>Snowfall: </span>
        <span>{`${snowfall}`} in</span>
      </div>
    </div>
  );
}
