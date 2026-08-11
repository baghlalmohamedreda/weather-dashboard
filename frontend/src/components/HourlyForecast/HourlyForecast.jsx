import { useState } from "react"
import "./HourlyForecast.css"
function HourlyForecast({weather}){
    return (
        <section className="hourly-forecast">
          <h2 className="section-title">
               Hourly Forecast
          </h2>
         <div className="hourly-container">
            {weather.hourly.map((hour,k)=>(
                <div className="hour-card" key={k}>
                    <p className="hour-time">{hour.time}</p>
                    <span className="hour-icon">{hour.icon}</span>
                    <span className="hour-temp">{hour.temperature}°C</span>
                </div>
            )
            )}
         </div>
         </section>
    )
}
export default HourlyForecast