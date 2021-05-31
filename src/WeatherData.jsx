import React from "react";
import dayjs from "dayjs";

export default function WeatherData({ weatherData }) {
  console.log(weatherData);

  function convertTime(data) {
    let dt = new Date(data * 1000);
    // console.log(new Date(unixTime * 1000), offset)
    const t = dayjs(dt).format("hh:mm - dddd, D MMM 'YY ");
    return t;
  }

  return (
    <div className="weather-data">
      <div className="temp">{Math.round(weatherData.main.temp)}º</div>
      <div className="data">
        <div className="name-icon-container">
          <div className="city-name">{weatherData.name}</div>
          <div className="icon">
            <img
              src={`icons/${weatherData.weather[0].icon}.svg`}
              className="icon"
            />
          </div>
        </div>
        <div className="description-date-container">
          <div className="date-time">{convertTime(weatherData.dt)}</div>
          <div className="description">
            {weatherData.weather[0].description}
          </div>
        </div>
      </div>

      {/* <div className="temp-high-low">
        H:{Math.round(weatherData.main.temp_max)}° &nbsp; L:
        {Math.round(weatherData.main.temp_min)}°
      </div> */}
    </div>
  );
}
