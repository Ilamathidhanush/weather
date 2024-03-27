import React, { useState } from 'react'   //usig rafce change this jsx into component
import './WeatherApp.css'   //importing css file

import s from '../Assets/s.png'
import swr from '../Assets/swr.png'
import swc from '../Assets/swc.png'
import bc from '../Assets/bc.png'
import r from '../Assets/r.png'
import c from '../Assets/c.png'
import m from '../Assets/m.png'
import t from '../Assets/t.png'
import cws from '../Assets/cws.png'
import hum from '../Assets/humidity.png'
import win from '../Assets/wind.png'
import srch from '../Assets/search.png'





const WeatherApp = () => {

  let api_key="APIKEY";       //copied api key from openweathermapapi
 
  const[wicon,setWicon] = useState(swc);


  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value===""){
      return 0;
    }
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}` ;
    
    let response = await fetch(url);
    let data = await response.json();

    const humi = document.getElementsByClassName("hum-per");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("wether-temp");
    const loc = document.getElementsByClassName("wether-loc");

   humi[0].innerHTML = data.main.humidity+" %";
   wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
   temp[0].innerHTML = Math.floor(data.main.temp)+"°C";
   loc[0].innerHTML = data.name;

   if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ){
    setWicon(s);
   }
   else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n" ){
    setWicon(swc);
   }
  
   else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n" ){
    setWicon(c);
   }
   else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n" ){
    setWicon(bc);
   }
   else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n" ){
    setWicon(r);
   }
   else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n" ){
    setWicon(swr);
   }
   else if (data.weather[0].icon==="11d" || data.weather[0].icon==="11n" ){
    setWicon(t);
   }
   else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n" ){
    setWicon(cws);
   }
   else if (data.weather[0].icon==="50d" || data.weather[0].icon==="50n" ){
    setWicon(m);
   }

  }

  return (

    <div className='container' >
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='SEARCH'/>
             <div className='search_icon'onClick={()=>{search()}}>
             <img src={srch} alt=''/>
             </div>
        </div>
        <div className="weather_image">
          <img src={wicon} alt=''/>
        </div>
        <div className="weatherdeg">
        <div className='wether-temp'>24°C</div>
        <div className='wether-loc'>London</div>
        </div>
        <div className="data-container">
          <div className="element">
          <img src= {hum} alt='' className='icon'/>
          <div className="hum-per">64%</div>
          <div className="text">Humidity</div>
        </div>
        <div className="element">
          <img src={win}alt='' className='icon'/>
          <div className="wind-rate">18 km/h</div>
          <div className="text">Wind Speed</div>
        </div>
    </div>
    </div>
  )
}

export default WeatherApp