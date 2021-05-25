import "./App.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import WeatherData from "./WeatherData";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6e4fed69198e988a933dfe45e62b901e";

function App() {
  const [weatherData, setWeatherData] = useState();
  // const [query, setQuery] = useState("");
  const ref = useRef();

  const getWeather = (queries) => {
    // console.log('getting weather...')
    axios
      .get(URL, {
        params: {
          q: queries,
          units: "metric",
          APPID: API_KEY,
        },
      })
      .then((res) => {
        console.log(res);
        // console.log('res >>', res);
        // const { data } = res;
        // console.log('destructured data >>', data)
        // console.log(res.data);
        setWeatherData(res.data);
      });
  };

  useEffect(() => {
    getWeather("Toronto");
  }, [])
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
      <div className="today-time-section">time section</div>
      <div className="weekdays-section">weekdays section</div>
      <div className="todays-details">todays details</div>
    </div>
  );
}

export default App;
