import "./CurrentWeather.css";
import WeatherIcons from "../WeatherIcons/WeatherIcons";
function CurrentWeather({ weather }) {
    return (
        <section className="current-weather">

            <div className="weather-icon">
                <WeatherIcons
                code={weather.current.icon}
                size={60}
                />
            </div>

            <h1 className="temperature">
                {Math.round(weather.current.temperatureCelsius)}°C
            </h1>

            <h2 className="city">
                {weather.city}, {weather.country}
            </h2>
        </section>
    );
}

export default CurrentWeather;