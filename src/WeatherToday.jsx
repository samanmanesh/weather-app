import dayjs from "dayjs";
import React from "react";
// import { v4 as uuidv4 } from "uuid";

export default function WeatherToday({ weatherDailyData }) {
  console.log(weatherDailyData);
  const todaySunrise = weatherDailyData.current.sunrise;
  const todaySunset = weatherDailyData.current.sunset;

  function convertTime(data) {
    let dt = new Date(data * 1000);
    // console.log(new Date(unixTime * 1000), offset);
    const t = dayjs(dt).format("h:m A");

    return t;
  }

  return (
    <div className="weather-details">
      <h3>Weather Details</h3>
      <div>
        <span>Sunrise</span> <span> {convertTime(todaySunrise)} </span>{" "}
      </div>
      <div>
        {" "}
        <span>Sunset</span> <span>{convertTime(todaySunset)}</span>{" "}
      </div>
      <div>
        <span>Chance of Rain</span> <span> {weatherDailyData.current.rain ? weatherDailyData.current.rain : "0%"}</span>
      </div>
      <div>
        <span>Humidity</span>
        <span>{weatherDailyData.current.humidity}%</span>
      </div>
      <div>
        <span>Wind</span>
        <span>{weatherDailyData.current.wind_speed}</span>
      </div>
      <div>
        <span>Feels Like</span>
        <span>{weatherDailyData.current.feels_like}°</span>
      </div>
      <div>
        <span>UV INDEX</span> <span>{Math.round(weatherDailyData.current.uvi)}</span>
      </div>

    </div>
  );
}
