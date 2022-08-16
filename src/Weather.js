import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});


    function findForecast(response) {
        console.log(response);
        return (
            setWeatherData({
                city: response.data.name,
                temperature: Math.round(response.data.main.temp),
                description: response.data.weather[0].main,
                icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                windSpeed: Math.round(response.data.wind.speed),
                windDirection: response.data.wind.deg,
                humidity: response.data.main.humidity,
                time: 'Tuesday 19:29',
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


    if(weatherData.ready) {

    
    return(
        <div className = "Weather"> 
        <form className = "search">
            <div className='row'>
            <div className='col-9'>
                <input type="search" placeholder='Search..' className='form-control'/>
            </div>
            <div className='col-3'>
                <input type="submit" className='btn btn-primary w-100' />
            </div>
            </div>
        </form>   
        <header>
            <div className="row">
            <div className="col-6">
                <div>
                <h1 >
                    {weatherData.city}
                </h1>
                <h3>
                    {weatherData.time}
                </h3>
                <span>
                    <img src={weatherData.icon} alt={weatherData.description}></img>
                    <span className = "text-capitalize">
                        {weatherData.description}
                    </span>
                </span>
                
                </div>
            </div>
            <div className="col-6">
                <div className='weather-details'>
                <h3>
                    <span>
                        {weatherData.temperature}
                    <a href="#" >°C</a> /
                    <a href="#" >°F</a>
                    </span>
                </h3>
                <ul>
                    <li> <img src="/icons/water.svg"></img> {weatherData.humidity} %</li>             
                    <li> <img src="/icons/windmill.png"></img> {weatherData.windSpeed} mph</li>
                </ul>
                </div>
                
            </div>
            </div>
        </header>

        </div>
    )
    } else {
       
            //  let apiKey = "d039aea9f001c8513436c79fb9e6958c";
            let apiKey = "094780c710fa4efd669f0df8c3991927";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(url).then(findForecast);

        return 'loading'
    }
}

export default Weather;