import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

async function getPosition(location = "New York, New York") {
  const result = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`
  );
  const data = await result.json();
  //   console.log(data);
  //   console.log(data.results[0]);
  return data.results[0];
}
export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async function (arg) {
    const {
      name: city,
      country,
      population,
      latitude,
      longitude,
      country_code,
    } = await getPosition(arg);

    const weatherResult = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,snowfall,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`
    );
    const {
      current,
      daily,
      elevation,
      timezone,
      timezone_abbreviation,
      ...other
    } = await weatherResult.json();
    console.log("daily", daily);
    console.log("current", current);
    console.log("other", other);
    return {
      latitude,
      longitude,
      current,
      daily,
      elevation,
      timezone,
      timezone_abbreviation,
      city,
      country,
      population,
      country_code,
    };
  }
);

const initialState = {
  weatherData: {
    latitude: 0,
    longitude: 0,
    current: {},
    daily: [],
    elevation: 0,
    timezone: "",
    timezone_abbreviation: "",
    city: "",
    country: "",
    population: 0,
    country_code: "",
  },
  status: "idle",
  error: "No errors",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearWeather(state, action) {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.status = "idle";
        state.weatherData.daily = action.payload.daily.time.map((date, i) => {
          return {
            time: i === 0 ? "Today" : date.split("-").slice(1).join("-"),
            precipitation_chance:
              action.payload.daily.precipitation_probability_max[i],
            temp_high: action.payload.daily.temperature_2m_max[i],
            temp_low: action.payload.daily.temperature_2m_min[i],
            uv_index: action.payload.daily.uv_index_max[i],
            max_wind_speed: action.payload.daily.wind_speed_10m_max[i],
            sunrise: action.payload.daily.sunrise[0].split("T")[1],
            sunset: action.payload.daily.sunset[i].split("T")[1],
            rain_sum: action.payload.daily.rain_sum[i],
            snowfall_sum: action.payload.daily.snowfall_sum[i],
            weather_code: action.payload.daily.weather_code[i],
          };
        });
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = "error";
        state.error = "error getting weather data";
      });
  },
});

export const { clearWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
