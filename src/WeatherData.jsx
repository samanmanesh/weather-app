import React from 'react'

export default function WeatherData({weatherData}) {
   
    // /// Capitalized the first letter of each words but I used css instead
    // const convertingUpperCase = () =>{
    //     const str = weatherData.weather[0].description
    //     function capitalize(str) {
    //         return str.charAt(0).toUpperCase() + str.slice(1);
    //       }
          
    //       const caps = str.split(' ').map(capitalize).join(' ');
    //   return caps;    
    // }
    return (
        <div>
            <div className="city-name">{weatherData.name}</div>
            {/* <div className="description">{convertingUpperCase()}</div> */}
            <div className="description">{weatherData.weather[0].description}</div>
            <div className="temp">{Math.round(weatherData.main.temp)}º</div>
            <div className="temp-high-low">H:{Math.round(weatherData.main.temp_max)}° &nbsp; L:{Math.round(weatherData.main.temp_min)}°</div>
        </div>
    )
}
