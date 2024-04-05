import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../redux/weatherSlice";

export default function Search() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  return (
    <form className="text-lg md:text-xl mt-10 space-x-2 flex flex-col gap-2 items-center sm:block">
      <input
        className="border rounded-full px-3 py-1 bg-sky-100 text-stone-900 w-86"
        type="text"
        onChange={(e) => {
          setLocation(e.target.value);
          console.log("location set");
        }}
        placeholder="city, country"
      />
      <button
        className="bg-blue-800 border border-blue-800 rounded-full text-sky-100 px-4 py-1"
        onClick={(e) => {
          e.preventDefault();
          dispatch(getWeather(location));
        }}
      >
        Search
      </button>
    </form>
  );
}
