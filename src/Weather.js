import React from "react";
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

export default function Weather(props) {

    function displayWeather(response) {
        alert(`The temp in ${props.city} is ${Math.round(response.data.main.temp)}`)
    };
    let apiKey = 'd039aea9f001c8513436c79fb9e6958c';
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`

    axios.get(apiURL).then(displayWeather);
    return <Audio color="#00BFFF" height={80} width={80} />
}