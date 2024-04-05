import { useEffect } from "react";

import Header from "./components/ui/Header";
import LocationInfo from "./components/ui/LocationInfo";
import { getWeather } from "./redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import ForecastList from "./components/ui/ForecastList";
import LoadingIcon from "./components/icons/LoadingIcon";

const defaultCity = "New York";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.weather.status);
  useEffect(() => {
    dispatch(getWeather(defaultCity));
  }, [dispatch]);

  return (
    <>
      {isLoading === "loading" ? (
        <div className="flex flex-col justify-center items-center bg-cover overflow-y-scroll bg-[url(/background-image.jpg)] text-sky-950 min-h-screen">
          <LoadingIcon />
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 bg-cover overflow-y-scroll bg-[url(/background-image.jpg)] text-sky-950 max-h-screen md: px-12 lg:px-28 py-6">
          <Header />
          <LocationInfo />
          <ForecastList />
        </div>
      )}
    </>
  );
}

export default App;
