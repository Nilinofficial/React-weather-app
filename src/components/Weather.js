import React from 'react';
import "./Weather.css"
import axios from "axios"

function Weather({data}) {


    console.log(data);
    


    return (
        <div className="weather">
              <img className="weather__image" src={data?.current?.condition?.icon} alt="" srcset="" />
    <p>{data?.current?.condition?.text}</p>
        
         <p>Location :{data?.location?.name},{data?.location?.region},{data?.location?.country} </p>  
          <h1>Temperature : {data?.current?.temp_c} °C</h1>
           <p>Feels like: {data?.current?.feelslike_c}</p>
        <p> Date & Time : {data?.location?.localtime}</p>
        <p>Wind Speed : {data?.current?.wind_kph} Km/h</p> 
      
        </div>
    )
}

export default Weather
