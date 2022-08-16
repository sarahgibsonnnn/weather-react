import React, { useState } from "react";
import './Weather.css';
import Search from './Search'
import axios from "axios";

function Weather() {
return(
    <div className = "Weather">
         <Search/>
         <header>
        <div className="row">
          <div className="col-6">
            <div>
              <h1 >
                London
              </h1>
              <h3>
                Tuesday 17:23
              </h3>
              <span>
                <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' alt="mostly cloudy"></img>
                <span>
                    Clouds
                </span>
              </span>
              
            </div>
          </div>
          <div className="col-6">
            <div className='weather-details'>
              <h3>
                <span>
                     21
                  <a href="#" >°C</a> /
                  <a href="#" >°F</a>
                </span>
              </h3>
              <ul>
                <li> <img src="/icons/water.svg"></img> 84%</li>             
                <li> <img src="/icons/windmill.png"></img> 4 mph</li>
              </ul>
            </div>
            
          </div>
        </div>
      </header>

    </div>
)
}

export default Weather;