import { useEffect, useState } from "react";
import { getfavorites, removefavorite } from "../services/favorites";
import "./Favorites.css";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import {BiTrash} from "react-icons/bi"
import { useNavigate } from "react-router-dom";
function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate=useNavigate()
  function handlenavigate(cityname){
    navigate(`/?city=${cityname}`)
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  function loadFavorites() {
    setFavorites(getfavorites());
  }

  function handleRemove(city) {
    removefavorite(city);
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
          <div className="favorite-card" key={city.city} onClick={()=>handlenavigate(city.city)}>
            <div className="favorite-header" >
              <div>
                <h2>{city.city}</h2>
                <p>{city.country}</p>
              </div>

              <button
                className="remove-btn"
                onClick={(e) =>{ e.stopPropagation();
                   handleRemove(city)}}
              >
                <BiTrash />
              </button>
            </div>
            <div className="card-weather-body"><CurrentWeather weather={city} /></div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Favorites;