import "./CurrentWeather.css";

function CurrentWeather({ weather }) {
    return (
        <section className="current-weather">

            <div className="weather-icon">
                <img
                    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                />
            </div>

            <h1 className="temperature">
                {Math.round(weather.temperatureCelsius)}°C
            </h1>

            <p className="description">
                {weather.description}
            </p>

            <h2 className="city">
                {weather.city}, {weather.country}
            </h2>

        </section>
    );
}

export default CurrentWeather;