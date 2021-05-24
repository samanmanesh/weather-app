import "./App.scss";
import axios from 'axios';
import { useEffect, useState } from "react";
import WeatherData from "./WeatherData";


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6e4fed69198e988a933dfe45e62b901e';



function App() {
  const [weatherData, setWeatherData] = useState();  
  const getWeather = (cityName) => {
    axios.get(URL, {params: {
      q: cityName,
      units: 'metric',
      APPID: API_KEY
    }}).then(res => setWeatherData(res.data))
  }
console.log(weatherData)
  return (
    <div className="App">
      {weatherData && <WeatherData weatherData={weatherData}/>}
      
     <button onClick={() => getWeather("Toronto")}>Toronto</button>
     <button onClick={() => getWeather("London")}>London</button>
    </div>
  );
}

export default App;
