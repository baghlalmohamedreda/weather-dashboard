import { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../services/favorites";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  function loadFavorites() {
    setFavorites(getFavorites());
  }

  function handleRemove(cityName) {
    removeFavorite(cityName);
    loadFavorites();
  }

  if (favorites.length === 0) {
    return (
      <section className="favorites">
        <h1>Favorite Cities</h1>

        <div className="empty-favorites">
          <h2>No favorite cities yet ❤️</h2>
          <p>Add a city from the dashboard to see it here.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="favorites">
      <h1>Favorite Cities</h1>

      <div className="favorites-grid">
        {favorites.map((city) => (
          <div className="favorite-card" key={city.city}>
            <div className="favorite-header">
              <div>
                <h2>{city.city}</h2>
                <p>{city.country}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => handleRemove(city.city)}
              >
                ❤️
              </button>
            </div>

            <img
              src={`https://openweathermap.org/img/wn/${city.current.icon}@2x.png`}
              alt={city.current.description}
            />

            <h1>{city.current.temperatureCelsius}°C</h1>

            <p>{city.current.description}</p>

            <div className="favorite-details">
              <span>💧 {city.current.humidity}%</span>
              <span>🌬 {city.current.windSpeedKmh} km/h</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Favorites;