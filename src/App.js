import "./App.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import WeatherData from "./WeatherData";
// import WeatherHourly from "./WeatherHourly";
import WeatherDays from "./WeatherDays";
import WeatherToday from "./WeatherToday";

const URL_CURRENT = "https://api.openweathermap.org/data/2.5/weather";
const URL_DAILY = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "6e4fed69198e988a933dfe45e62b901e";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [weatherDailyData, setWeatherDailyData] = useState();
  const ref = useRef();

  const getWeather = (queries) => {
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
          exclude: "",
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => console.log("got", e));
  }, []);

  useEffect(() => {
    ref.current.value = "";
  }, [weatherData]);
  const displayBackground = () => {
    console.log("displayBack is read");
    const image = weatherData.weather[0].icon;

    return (
      <img src="image" alt="" />
    )`background/${weatherData.weather[0].icon}.svg`;
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(background/${weatherData?.weather[0].icon}.jpg)`,
      }}
    >
      <header>
        <h1 className="header-title ">The Hava Weather</h1>
      </header>
      <div className="grid-container">
        <main>
          <div className="display-container">
            {weatherData && <WeatherData weatherData={weatherData} />}
          </div>
         
        </main>

        <aside>
          <section className="search-box">
            <input
              type="text"
              className="search"
              placeholder="Another location"
              ref={ref}
              onKeyPress={search}
            />
            <button onClick={() => getWeather(ref.current.value)}>
              <img src="icons/search.svg" alt="search" />
            </button>
          </section>
          <section className="city-offer">
            <ul>
              <li onClick={() => getWeather("Birmingham")}>Birmingham</li>
              <li onClick={() => getWeather("Manchester")}>Manchester</li>
              <li onClick={() => getWeather("New York")}>New York</li>
              <li onClick={() => getWeather("California")}>California</li>
            </ul>
          </section>
          <section className="weather-details">
            {weatherDailyData && (
              <WeatherToday weatherDailyData={weatherDailyData} />
            )}
          </section>
          <section className="next-days">
            <h3> Next Days</h3>
            {weatherDailyData && (
              <WeatherDays weatherDailyData={weatherDailyData} />
            )}
          </section>
        </aside>
      </div>

      <footer>
        <div> <div>Connect with us </div> 

        <a href="https://github.com/samanmanesh" target="_blank" rel="noreferrer">
          {" "}
          <img src="icons/gitHub.svg" alt="github" />
        </a>
        <a href="https://instagram.com/samansmanesh" target="_blank" rel="noreferrer">
          <img src="icons/instagram.svg" alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/saman-manesh-96b257213/"
          target="_blank" rel="noreferrer"
        >
          <img src="icons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="mailto:samanmanesh7@gmail.com" target="_blank" rel="noreferrer">
          <img src="icons/mail.svg" alt="mail" />
        </a>
        </div>
        <div className="creator-name">Created by Saman Manesh </div>
      </footer>
    </div>
  );
}

export default App;

