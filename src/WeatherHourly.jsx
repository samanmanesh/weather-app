import React from 'react'
import dayjs from 'dayjs';

export default function WeatherHourly({weatherDailyData}) {

    const hourly = weatherDailyData.hourly;

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
