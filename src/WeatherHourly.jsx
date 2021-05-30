import React from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export default function WeatherHourly({ weatherDailyData }) {
  
  // console.log(weatherDailyData);
  const hourly = weatherDailyData.hourly;
  console.log(weatherDailyData.hourly);

  const getTime = (interval) => {
    if (interval === 0) return "Now";
    const now = dayjs().add(interval, "hour");
    return now.format("h A");
    // const tomorrow = dayjs().add(interval, "day");
    // const nextWeek = dayjs().add(interval, "week");
  };
  // console.log(weatherDailyData);

  if (!hourly) return null;
  return (
    <div className="weather-hourly">
      {hourly.map((data, index) => {
        return (
          <div key={uuidv4()}>
            <div className="display-time">{getTime(index)}</div>

            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              className="display-icon"
            />
            <div className="display-temp">{Math.round(data.feels_like)}°</div>
          </div>
        );
      })}
    </div>
  );
}
