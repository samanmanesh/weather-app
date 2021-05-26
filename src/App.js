import "./App.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import WeatherData from "./WeatherData";
import WeatherHourly from "./WeatherHourly";

const URL_CURRENT = "https://api.openweathermap.org/data/2.5/weather";
const URL_DAILY = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "6e4fed69198e988a933dfe45e62b901e";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [weatherDailyData, setWeatherDailyData] = useState();
  // const [query, setQuery] = useState("");
  const ref = useRef();

  const getWeather = (queries) => {
    // console.log('getting weather...')
    axios
      .get(URL_CURRENT, {
        params: {
          q: queries,
          units: "metric",
          APPID: API_KEY,
        },
      })
      .then((res) => {
        setWeatherData(res.data);
        getDailyWeather(res.data.coord.lat, res.data.coord.lon);
      });
  };

  const getDailyWeather = (lat, lon) => {
    axios
      .get(URL_DAILY, {
        params: {
          lat: lat,
          lon: lon,
          // exclude: "hourly,daily",
          units: "metric",
          APPID: API_KEY,
        },
      })
      .then((res) => {
        console.log("getDailyWeather is read");
        setWeatherDailyData(res.data);
      });
  };

  useEffect(() => {
    getWeather("Toronto");
  }, []);
  const search = (e) => {
    if (e.key === "Enter") getWeather(ref.current.value);
  };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(e => console.log('got', e))
  // }, [])

  return (
    <div className="App">
      <div className="today-section">
        {weatherData && <WeatherData weatherData={weatherData} />}
        <input
          type="text"
          className="search"
          placeholder="Search..."
          // value={query}
          ref={ref}
          // onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
        />

        {/* <button onClick={() => getWeather("Toronto")}>Toronto</button>
      <button onClick={() => getWeather("London")}>London</button> */}
      </div>
      <div className="today-time-section">
        {weatherDailyData && (
          <WeatherHourly weatherDailyData={weatherDailyData} />
        )}
      </div>
      <div className="weekdays-section">weekdays section</div>
      <div className="todays-details">todays details</div>
    </div>
  );
}

export default App;
