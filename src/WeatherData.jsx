import React from "react";
import dayjs from "dayjs";
export default function WeatherData({ weatherData }) {
  console.log(weatherData);
  // const getTime = (interval) => {
  // if (interval === 0) return "Now";
  // const now = dayjs().add(interval, "hour");
  // return now.format("h A");
  //// const tomorrow = dayjs().add(interval, "day");
  //// const nextWeek = dayjs().add(interval, "week");
  //   };

  function convertTime(data) {
    let dt = new Date(data * 1000);
    // console.log(new Date(unixTime * 1000), offset);
    const t = dayjs(dt).format("hh mm - dddd, DMMM 'YY ");

    return t;
  }

  return (
    <div className="weather-data">
      <div className="temp">{Math.round(weatherData.main.temp)}º</div>
      <div className="name-date-container">
        <div className="city-name">{weatherData.name}</div>
        <div className="date-time">{convertTime(weatherData.dt)}</div>
      </div>
      <div className="description-icon-container">
        <div className="description">{weatherData.weather[0].description}</div>
      </div>

      <div className="temp-high-low">
        H:{Math.round(weatherData.main.temp_max)}° &nbsp; L:
        {Math.round(weatherData.main.temp_min)}°
      </div>
    </div>
  );
}
