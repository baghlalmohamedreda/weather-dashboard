import "./CurrentWeather.css";

function CurrentWeather({ weather }) {
    return (
        <section className="current-weather">

            <div className="weather-icon">
                <img
                    src={`https://openweathermap.org/img/wn/${weather.current.icon}@2x.png`}
                    alt={weather.current.description}
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