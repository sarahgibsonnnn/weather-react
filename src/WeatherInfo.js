import React from "react";
import FormattedDate from "./FormattedDate";
import precipitationIcon from './icons/water.svg'
import windIcon from './icons/windmill.svg'
import WeatherIcon from "./WeatherIcon";
import './WeatherInfo.css'



export default function WeatherInfo(props) {
    return(
        <div className = "WeatherInfo">
       
        <header>
            <div className="row">
            <div className="col-6">
                <div>
                <h1 >
                    {props.data.city}
                </h1>
                <h3>
                    <FormattedDate date = {props.data.time}></FormattedDate>
                </h3>
                <span className="icon-desc">
                    <WeatherIcon code = {props.data.iconCode} alt = {props.data.description}/>
                    <span className = "text-capitalize">
                        {props.data.description}
                    </span>
                </span>
                
                </div>
            </div>
            <div className="col-6">
                <div className='weather-details'>
                <h3>
                    <span>
                        {props.data.temperature}
                    <a href="#" >°C</a> /
                    <a href="#" >°F</a>
                    </span>
                </h3>
                <ul>
                    <li>  <img className = "icon" src={precipitationIcon}></img> {props.data.humidity} %</li>             
                    <li> <img className = "icon" src={windIcon}></img> {props.data.windSpeed} mph</li>
                </ul>
                </div>
                
            </div>
            </div>
        </header>
        </div>
    )
}