import "./WeatherDetails.css";

function WeatherDetails({ weather }) {
    return (
        <section className="weather-details">

            <div className="detail-card">
                <span className="detail-icon">🌡️</span>

                <div className="detail-content">
                    <h3>Feels Like</h3>
                    <p>{weather.feelsLike}°C</p>
                </div>
            </div>

            <div className="detail-card">
                <span className="detail-icon">💧</span>

                <div className="detail-content">
                    <h3>Humidity</h3>
                    <p>{weather.humidity}%</p>
                </div>
            </div>

            <div className="detail-card">
                <span className="detail-icon">🌬️</span>

                <div className="detail-content">
                    <h3>Wind</h3>
                    <p>{weather.wind} km/h</p>
                </div>
            </div>

            <div className="detail-card">
                <span className="detail-icon">🌡️</span>

                <div className="detail-content">
                    <h3>Pressure</h3>
                    <p>{weather.pressure} hPa</p>
                </div>
            </div>

        </section>
    );
}

export default WeatherDetails;