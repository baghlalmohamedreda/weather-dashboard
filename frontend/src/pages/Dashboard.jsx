import Searchbar from "../components/Header/Searchbar"
import Forecast from "../components/Forecast/Forecast"
import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import HourlyForecast from "../components/HourlyForecast/HourlyForecast"
import WeatherDetails from "../components/WeatherDetails/WeatherDetails"
import { useState ,useEffect} from "react"
import { useSearchParams } from "react-router-dom"
import { getsearchweather } from "../services/service"
import "./Dashboard.css"
function Dashboard(){
    const [weather, setWeather] = useState(() => {
    const savedWeather = localStorage.getItem("weather");
    return savedWeather ? JSON.parse(savedWeather) : null;
});
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    useEffect(() => {
    if (weather) {
        localStorage.setItem("weather", JSON.stringify(weather));
    } else {
        localStorage.removeItem("weather");
    }
}, [weather])
const [SearchParams]=useSearchParams()
const city=SearchParams.get("city")
useEffect(()=>{
    if(city){
        handlesearch(city)
    }

},[city])

    async function handlesearch(cityname) {
    try {
        setLoading(true);
        setError("");
        const data = await getsearchweather(cityname);
        setWeather(data);
    } catch (error) {
        setWeather(null);
        setError(error.message);
    } finally {
        setLoading(false);
    }
}
    return(
        <div className="dashboard">
            <header className="header">
                <Searchbar onHandlesearch={handlesearch} weather={weather} />
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
                   <HourlyForecast weather={weather}  />
                   <Forecast weather={weather} />
               </div>
            </>
        )}
            </main>
        </div>
    )
}
export default Dashboard