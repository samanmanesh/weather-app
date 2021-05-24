import React from 'react'

export default function WeatherData({weatherData}) {
    return (
        <div>
            <h2>{Math.round(weatherData.main.temp)}ºC</h2>
            <h3>{weatherData.weather[0].description}</h3>
        </div>
    )
}
