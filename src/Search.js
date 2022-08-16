import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

function Search() {
  let [city, setCity] = useState("London");
  let [forecast, setForecast] = useState([]);

  function findForecast(response) {
    console.log(response);
    let iconCode = response.data.weather[0].icon;
    return setForecast([
      {
        type: "Temperature",
        value: Math.round(response.data.main.temp),
        unit: "°C"
      },
      {
        type: "Description",
        value: response.data.weather[0].main,
        unit: ""
      },
      {
        type: "Humidity",
        value: Math.round(response.data.main.humidity),
        unit: "%"
      },
      {
        type: "Wind",
        value: Math.round(response.data.wind.speed),
        unit: "mph"
      },
      {
        type: "Icon",
        value: `http://openweathermap.org/img/wn/${iconCode}@2x.png`,
        unit: ""
      }
    ]);
  }
  function displayWeather(event) {
    event.preventDefault();
    //  let apiKey = "d039aea9f001c8513436c79fb9e6958c";
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(findForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={displayWeather}>
        <div className='row'>
          <div className='col-9'>
            <input type="search" onChange={updateCity} placeholder='Search..' className='form-control'/>
          </div>
          <div className='col-3'>
            <input type="submit" className='btn btn-primary w-100' onSubmit={displayWeather} />
          </div>
        </div>
      </form>
      <ul>
        {forecast.map((i, index) => {
          if (i.type !== "Icon") {
            return (
              <li key={index}>
                {i.type}: {i.value} {i.unit}
              </li>
            );
          } else {
            return (
              <li key={index}>
                <img src={i.value} width={50} alt="weather-icon"/>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Search;
