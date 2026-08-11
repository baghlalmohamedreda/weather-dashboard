import Searchbar from "../components/Header/Searchbar"
import CurrentLocation from "../components/Header/CurrentLocation"
import Forecast from "../components/Forecast/Forecast"
import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import HourlyForecast from "../components/HourlyForecast/HourlyForecast"
import WeatherDetails from "../components/WeatherDetails/WeatherDetails"
import { useState } from "react"
import { getsearchweather } from "../services/service"
import "./Dashboard.css"
function Dashboard(){
    const [weather,setWeather]=useState(null)
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    async function handlesearch(cityname) {
    try {
        setLoading(true);
        setError("");

        console.log("🔵 Recherche lancée :", cityname);

        const data = await getsearchweather(cityname);

        console.log("🟢 Data reçue dans Dashboard :", data);

        setWeather(data);

    } catch (error) {

        console.error("🔴 Erreur :", error);

        setWeather(null);
        setError(error.message);

    } finally {
        setLoading(false);
    }
}
    return(
        <div className="dashboard">
            <header className="header">
                <Searchbar onHandlesearch={handlesearch} />
                <CurrentLocation />
            </header>
            <main className="dashboard-content">
             {loading && (
                  <div className="loading-state">
                    <p>Chargement de la météo...</p>
                  </div>
    )}


                {error &&(
                     <div className="error-state">
                         <h2>Ville introuvable</h2>
                         <p> Nous n'avons trouvé aucune ville correspondant à votre recherche.
                             Vérifiez l'orthographe puis réessayez.
                         </p>
                     </div>
                )}
          { !loading && weather && (
           <>
               <div className="top-section">
                   <CurrentWeather weather={weather} />
                   <WeatherDetails weather={weather} />
               </div>

               <div className="forecast-section">
                   <HourlyForecast  />
                   <Forecast />
               </div>
            </>
        )}
            </main>
        </div>
    )
}
export default Dashboard