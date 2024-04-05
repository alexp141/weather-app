export default function ForecastItem({
  data: {
    precipitation_chance,
    temp_high,
    temp_low,
    uv_index,
    max_wind_speed,
    time,
    sunrise,
    sunset,
    snowfall_sum,
    rain_sum,
  },
  weatherIconData: { WeatherIcon, type },
}) {
  const rowDataStyle =
    "flex justify-between text-lg mt-4 capitalize sm:text-xl";

  return (
    <li>
      <div className="col-span-1 px-4 py-4 border border-sky-100 rounded-2xl bg-slate-100 bg-opacity-70">
        <p className="text-center text-2xl">{time}</p>
        <WeatherIcon />
        <p className="text-center mb-4">{type}</p>
        <div className="flex justify-evenly">
          <span>High: {temp_high}</span>
          <span>Low: {temp_low} </span>
        </div>
        <div className={rowDataStyle}>
          <span>sunrise</span>
          <span>{sunrise}</span>
        </div>
        <div className={rowDataStyle}>
          <span>sunset</span>
          <span>{sunset}</span>
        </div>
        <div className={rowDataStyle}>
          <span>Prec chance</span>
          <span>{precipitation_chance}%</span>
        </div>

        <div className={rowDataStyle}>
          <span>wind gust</span>
          <span>{max_wind_speed} mp/h</span>
        </div>
        <div className={rowDataStyle}>
          <span>UV Index</span>
          <span>{uv_index}</span>
        </div>
        <div className={rowDataStyle}>
          <span>expected rain</span>
          <span>{rain_sum} in.</span>
        </div>
        <div className={rowDataStyle}>
          <span>expected snowfall</span>
          <span>{snowfall_sum} in.</span>
        </div>
      </div>
    </li>
  );
}
