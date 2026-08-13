import "./Forecast.css"
import WeatherIcons from "../WeatherIcons/WeatherIcons"
function Forecast({weather}){
    return(
        <section className="forecast">
            <h2 className="forecast-title">5 days forecast</h2>
            <div className="forecast-header">
               <span>Day</span>
               <span>Weather</span>
               <span>Min</span>
               <span>Max</span>
            </div>
            <div className="forecast-list">
                {weather.daily.map((day,i)=>
                <div key={i} className="forecast-card">
                     <span className="forecast-day">
                            {new Date(day.date).toLocaleDateString("en-US", {
                                weekday: "short",
                            })}
                        </span>
                        <div className="forecast-icon">
                            <WeatherIcons
                               code={day.icon}
                               size={60}
                            />
                        </div>
                        <span className="forecast-min">{Math.round(day.minTemperatureCelsius)}</span>
                        <span className="forecast-max">{Math.round(day.maxTemperatureCelsius)}</span>
                </div>
            )}
            </div>
        </section>
    )
}
export default Forecast

