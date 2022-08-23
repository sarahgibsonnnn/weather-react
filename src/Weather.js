import React, { useState } from "react";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import axios from "axios";

function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});


    function findForecast(response) {
        return (
            setWeatherData({
                coord: response.data.coord,
                city: response.data.name,
                temperature: Math.round(response.data.main.temp),
                description: response.data.weather[0].main,
                iconCode: response.data.weather[0].icon,
                windSpeed: Math.round(response.data.wind.speed),
                windDirection: response.data.wind.deg,
                humidity: response.data.main.humidity,
                time: new Date(response.data.dt * 1000),
                ready: true
            })
        
        )
    }

   /* function displayWeather(event) {
        event.preventDefault();
        //  let apiKey = "d039aea9f001c8513436c79fb9e6958c";
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(findForecast);
      }
    */
      function search() {
                //  let apiKey = "d039aea9f001c8513436c79fb9e6958c";
                  let apiKey = "094780c710fa4efd669f0df8c3991927";
                  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                  axios.get(url).then(findForecast);
      }

      function handleSubmit(event) {
        event.preventDefault();
        search()

      }

      function updateCity(event) {
        setCity(event.target.value)
      }


    if(weatherData.ready) { return (
        <div className = "Weather">
            <form className = "search" onSubmit={handleSubmit}>
                <div className='row'>
                <div className='col-9'>
                    <input type="search" placeholder='Search..' className='form-control' onChange={updateCity}/>
                </div>
                <div className='col-3'>
                    <input type="submit" className='btn btn-primary w-100' />
                </div>
                </div>
            </form>   
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coord={weatherData.coord} />
        </div>
    )
        
    
    
    } else {
        search();
        return 'loading'
    }
}

export default Weather;