import React from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export default function WeatherDays({ weatherDailyData }) {
  const days = weatherDailyData.daily;

  console.log(days);

  const getDay = (interval) => {
    const tomorrow = dayjs(1).add(interval, "day");
    return tomorrow.format("dddd");
  };
  return (
    <div className="weather-daily">
      {days.map((data, index) => {
        return (
          <div key={uuidv4()}>
            <div className="display-days">
              <div className="days-name">{getDay(index)}</div>
              <img
                src={`icons/${data.weather[0].icon}.svg`}
                // src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                className="display-icon-days"
              />
              <div>
                <div className="display-temp-max">
                  {Math.round(data.temp.max)}°
                </div>
                <div className="display-temp-min">
                  {Math.round(data.temp.min)}°
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
