import { useState } from "react"
import "./HourlyForecast.css"
function HourlyForecast({weather}){
    return (
        <section className="hourly-forecast">
          <h2 className="section-title">
               Hourly Forecast
          </h2>
         <div className="hourly-container">
         </div>
         </section>
    )
}
export default HourlyForecast