import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let days = ["Sund", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        return day
    }
    return (
        <div className = "WeatherForecastDay"> 
             <div>
                {day()}
              </div>
            <WeatherIcon code = {props.data.weather[0].icon} alt = "Forecast Icon" size={40}/> 
            <div className="forecast-temperatures">
                <span className="forecast-temperature-max">{maxTemperature()}</span> 
                <span className="forecast-temperature-min">{minTemperature()}</span> 
            </div>
        </div>
    )
}