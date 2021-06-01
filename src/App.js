import "./App.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import WeatherData from "./WeatherData";
import WeatherHourly from "./WeatherHourly";
import WeatherDays from "./WeatherDays";
import WeatherToday from "./WeatherToday";

const URL_CURRENT = "https://api.openweathermap.org/data/2.5/weather";
const URL_DAILY = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "6e4fed69198e988a933dfe45e62b901e";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [weatherDailyData, setWeatherDailyData] = useState();
  // const [query, setQuery] = useState("");
  const ref = useRef();

  const getWeather = (queries) => {
    // console.log("getting weather...");
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
    // getWeather(ref.current.value)
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => console.log("got", e));
  }, []);

  useEffect(() => {
    ref.current.value = "";
  }, [weatherData]);
  // const getBackground = () => {
  // return 'linear-gradient(to bottom, rgb(86, 78, 138), rgb(97, 53, 29), red)'
  // };
  //
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
      {/* {weatherData &&  src={ displayBackground()}  */}
      {/* <img src={`background/10d.jpg`} /> */}
      <header>
        {" "}
        <h1 className="header-title ">The Hava Weather</h1>
      </header>
      <div className="grid-container">
        <main>
          <div className="display-container">
            {weatherData && <WeatherData weatherData={weatherData} />}
          </div>
          {/* <div>
            show hourly data
          {weatherDailyData && (
          <WeatherHourly weatherDailyData={weatherDailyData} />
        )}
        </div> */}
        </main>

        <aside>
          <section className="search-box">
            <input
              type="text"
              className="search"
              placeholder="Another location"
              // value={query}
              ref={ref}
              // onChange={e => setQuery(e.target.value)}
              onKeyPress={search}
            />
            <button onClick={() => getWeather(ref.current.value)}>
              <img src="/icons/search.svg" alt="no" />
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

        <footer>
          Connect with us 
          <a href="">GitHub</a>
          <a href="">Instagram</a>
          <a href="">email</a>
          <a href="">Linkedin</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="App" style={{ background: getBackground() }}></div> */
}
{
  /* <div className="today-section"> */
}
{
  /* {weatherData && <WeatherData weatherData={weatherData} />} */
}

{
  /* <input */
}
// type="text"
// className="search"
// placeholder="Search..."
// value={query}
// ref={ref}
// onChange={(e) => setQuery(e.target.value)}
// onKeyPress={search}
{
  /* />; */
}
{
  /* {/* <button onClick={() => getWeather("Toronto")}>Toronto</button> */
}
// <button onClick={() => getWeather("London")}>London</button> */}
{
  /* </div> */
}
{
  /* <div className="today-time-section"> */
}
{
  /* {weatherDailyData && ( */
}
// <WeatherHourly weatherDailyData={weatherDailyData} />
// )}
{
  /* </div> */
}
{
  /* <div className="weekdays-todays-container"> */
}
{
  /* <div className="weekdays-section"> */
}
{
  /* {weatherDailyData && ( */
}
// <WeatherDays weatherDailyData={weatherDailyData} />
// )}
{
  /* </div> */
}
{
  /* <div className="todays-details"> */
}
{
  /* todays details */
}
{
  /* {weatherDailyData && <WeatherToday weatherDailyData={weatherDailyData} */
}
{
  /* />} */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* <Icon></Icon>  */
}
