import dayjs from "dayjs";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function WeatherToday({ weatherDailyData }) {
  console.log(weatherDailyData);
  const todaySunrise = weatherDailyData.current.sunrise;
  const todaySunset = weatherDailyData.current.sunset;
  console.log(todaySunrise);

  //   const displayTime = (data) => {

  //     let s = convertTime(data, weatherDailyData.timezone_offset)
  //     //* let sSet = convertTime(weatherData.sys.sunset, weatherData.timezone)

  //     // const time = new Date(data);
  //     // const formatted = dayjs().format('H m');
  //     // console.log("display time is read");
  //     // console.log(time);
  //     // console.log(formatted);
  //     return  s;
  //   };

  function convertTime(data) {
    let dt = new Date(data * 1000);
    // console.log(new Date(unixTime * 1000), offset);
    const t = dayjs(dt).format("h m A");

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
        <span>Chance of Rain</span> <span>08:3{weatherDailyData.current.rain ? weatherDailyData.current.rain : "0%"}</span>
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

      {/* <div>
        <span> SUNRISE {convertTime(todaySunrise)} </span>
        <span> SUNSET {convertTime(todaySunset)} </span>
      </div> */}

      {/* <div>
        CHANCE OF RAIN
        {weatherDailyData.current.rain ? weatherDailyData.current.rain : "0%"}
      </div> */}
      {/* <div>HUMIDITY {weatherDailyData.current.humidity}%</div> */}
      {/* <div>WIND {weatherDailyData.current.wind_speed}</div> */}
      {/* <div>FEELS LIKE {weatherDailyData.current.feels_like}°</div> */}
      {/* <div>precipitation</div> */}
      {/* <div>PRESSURE {weatherDailyData.current.pressure} hPa</div> */}
      {/* <div>VISIBILITY {weatherDailyData.current.visibility / 1000} km</div> */}
      {/* <div>UV INDEX {Math.round(weatherDailyData.current.uvi)}</div> */}
    </div>
  );
}
