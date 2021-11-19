import React, { useState } from 'react';
import "./Search.css"
import axios from "axios"
import Weather from './Weather';
import Noweather from './Noweather';

function Search() {

    const API_KEY = "6d707830ff874bbb88e111545211911"

    const [city,setCity] = useState("");
    const [weather,setWeather] = useState(null);
   

    const getWeather = async () =>{
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
      setWeather(response.data);
    
    }

    

    return (
        <div className ="search">
            <div className="searchBox">
            <input value={city} onChange={(e) => {setCity(e.target.value)}} type="text" placeholder="Enter the city name" />
            <button className="search__button" onClick={getWeather}>Search</button>
            </div>
            

             {weather ? <Weather data = {weather}/> : <Noweather/>}

                  
          
        </div>
    )
}

export default Search
