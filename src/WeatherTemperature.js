import React from "react"
import './WeatherTemperature.css'

export default function WeatherTemperature(props) {
   
    return  (  
        <span className = "WeatherTemperature">
            {props.celcius}
            <span className = "unit">°C</span> 
        </span>
        )

}