import "./CurrentWeather.css";
import { Heart } from "lucide-react"
import WeatherIcons from "../WeatherIcons/WeatherIcons";
import { useState } from "react";
import {addcity,getfavorites,removefavorite } from "../../services/favorites";
function CurrentWeather({ weather }) {
    const [isfavorite,setIsfavorite]=useState(()=>{
        const favorites=getfavorites()
        return favorites.some((e)=>e.city===weather.city)
    })
    function togglefavorite(city) {
    if (isfavorite) {
        removefavorite(city);
        setIsfavorite(false);
    } else {
        addcity(city);
        setIsfavorite(true);
    }
}
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
            <button
                className="favorite-btn"
            >
                <Heart size={22} className={isfavorite? "favorite active" :"active"} onClick={()=>togglefavorite(weather)} />
            </button>
        </section>
    );
}

export default CurrentWeather;