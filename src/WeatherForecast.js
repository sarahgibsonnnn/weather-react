import React, { useState, useEffect } from "react";
import './WeatherForecast.css'
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false)
    }, [props.coord]
    );

    
    function handleResponse(response) {
        setForecast(response.data.daily)
        setLoaded(true)
    }
   
    if(loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className = "col" key={index}>
                                    <WeatherForecastDay data={dailyForecast}/>
                                </div>
                            );
                        } else { 
                        return null
                        }
                    })}
                </div>
            </div>
        )
    } else {
    //    let apiKey = "d039aea9f001c8513436c79fb9e6958c";
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let lat = props.coord.lat;
        let lon = props.coord.lon;
        let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);

        return null
    }

}