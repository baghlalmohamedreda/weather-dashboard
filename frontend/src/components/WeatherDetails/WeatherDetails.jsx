import "./WeatherDetails.css";
import {
  Thermometer,
  Droplets,
  Wind,
  Gauge
} from "lucide-react";
function WeatherDetails({ weather }) {
    return (
        <section className="weather-details">

            <div className="detail-card">
                <Thermometer className="detail-icon" size={26} strokeWidth={2} />

                <div className="detail-content">
                    <h3>Feels Like</h3>
                    <p>{Math.round(weather.current.feelsLikeCelsius)}°C</p>
                </div>
            </div>

            <div className="detail-card">
                <Droplets className="detail-icon" size={26} strokeWidth={2} />

                <div className="detail-content">
                    <h3>Humidity</h3>
                    <p>{weather.current.humidity}%</p>
                </div>
            </div>

            <div className="detail-card">
                <Wind className="detail-icon" size={26} strokeWidth={2} />

                <div className="detail-content">
                    <h3>Wind</h3>
                    <p>{weather.current.windSpeedKmh.toFixed(1)} km/h</p>
                </div>
            </div>

            <div className="detail-card">
                <Gauge className="detail-icon" size={26} strokeWidth={2} />

                <div className="detail-content">
                    <h3>Pressure</h3>
                    <p>{weather.current.pressureHpa} hPa</p>
                </div>
            </div>

        </section>
    );
}

export default WeatherDetails;