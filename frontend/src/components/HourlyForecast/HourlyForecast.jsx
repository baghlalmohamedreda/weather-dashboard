import { useState } from "react"
import "./HourlyForecast.css"
import WeatherIcons from "../WeatherIcons/WeatherIcons"
function HourlyForecast({weather}){
    return (
        <section className="hourly-forecast">
          <h2 className="section-title">
               Hourly Forecast
          </h2>
          <div className="hourly-list">
            {weather.hourly.map((e,i)=>
            <div key={i} className="hourly-card">
                <p>{e.time.slice(0, 5)}</p>
                <WeatherIcons
                      code={e.icon}
                      size={60}
                />
                <h3>{Math.round(e.temperatureCelsius)}°C</h3>
            </div>
            )}
          </div>
    
         </section>
    )
}
export default HourlyForecast