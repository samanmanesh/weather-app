import React, { useEffect } from 'react'
import dayjs from 'dayjs';

export default function WeatherHourly({weatherDailyData}) {

    const hourly = weatherDailyData.hourly;

    /**
     *  clouds: 100
        dew_point: 15.18
        dt: 1621976400
        feels_like: 29.25
        humidity: 42
        pop: 0.05
        pressure: 1012
        temp: 29.42
        uvi: 3.36
     */
    console.log(hourly)

    const getTime = interval => {
        if (interval === 0) return 'Now'
        const now = dayjs().add(interval, 'hour');
        return now.format('h A')
    }
    return (
        <div style={{display: 'flex', width: '100vw', overflow: 'scroll'}}>
            {
                hourly.map((data, index) => <div>
                    {data.feels_like}
                    <br />
                    <b>{getTime(index)}</b>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
                    </div>)
            }
        </div>
    )
}
