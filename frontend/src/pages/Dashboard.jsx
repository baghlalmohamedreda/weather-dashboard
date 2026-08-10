import Searchbar from "../components/Header/Searchbar"
import CurrentLocation from "../components/Header/CurrentLocation"
import Forecast from "../components/Forecast/Forecast"
import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import HourlyForecast from "../components/HourlyForecast/HourlyForecast"
import WeatherDetails from "../components/WeatherDetails/WeatherDetails"
import { useState } from "react"
import weatherdata from "../data/weather.json"
import "./Dashboard.css"
function Dashboard(){
    const [weather,setWeather]=useState(null)
    function handlesearch(cityname){
        const result =weatherdata.find(i=>i.city.toLowerCase()===cityname.toLowerCase())
        setWeather(result||null)
    }
    return(
        <div className="dashboard">
            <header className="header">
                <Searchbar onHandlesearch={handlesearch} />
                <CurrentLocation />
            </header>
           <main className="dashboard-content">
              { weather &&<div className="top-section">
                        <CurrentWeather weather={weather} />
                         <WeatherDetails weather={weather} />
                          </div> 
              }
               <div className="forecast-section">
                   <HourlyForecast />
                   <Forecast />
               </div>
            </main>  
        </div>

    )
}
export default Dashboard