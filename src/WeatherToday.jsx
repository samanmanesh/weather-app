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
    <div>
      <div>
        <span> SUNRISE {convertTime(todaySunrise)} </span>
        <span> SUNSET {convertTime(todaySunset)} </span>
      </div>

      <div>
        CHANCE OF RAIN
        {weatherDailyData.current.rain ? weatherDailyData.current.rain : "0%"}
      </div>
      <div>HUMIDITY {weatherDailyData.current.humidity}%</div>
      <div>WIND {weatherDailyData.current.wind_speed}</div>
      <div>FEELS LIKE {weatherDailyData.current.feels_like}°</div>
      {/* <div>precipitation</div> */}
      <div>PRESSURE {weatherDailyData.current.pressure} hPa</div>
      <div>VISIBILITY {weatherDailyData.current.visibility / 1000} km</div>
      <div>UV INDEX {Math.round(weatherDailyData.current.uvi)}</div>
    </div>
  );
}
