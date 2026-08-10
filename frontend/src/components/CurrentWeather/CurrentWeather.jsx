import "./CurrentWeather.css"
function CurrentWeather({weather}){
    return (
        <section className="current-weather">
            <div className="weather-icon">
                {weather?.icon}
            </div>
            <h1 className="temperateur">{weather?.temperature}°C</h1>
            <p className="description">{weather?.description}</p>
            <h2 className="city">{weather?.city}</h2>
        </section>
       
    )

}
export default CurrentWeather