import Searchbar from "../components/Header/Searchbar"
import CurrentLocation from "../components/Header/CurrentLocation"
import Forecast from "../components/Forecast/Forecast"
import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import HourlyForecast from "../components/HourlyForecast/HourlyForecast"
import WeatherDetails from "../components/WeatherDetails/WeatherDetails"
import "./Dashboard.css"
function Dashboard(){
    return(
        <div className="dashboard">
            <header className="header">
                <Searchbar />
                <CurrentLocation />
            </header>
           <main className="dashboard-content">
            <currentWeather />
            <WeatherDetails />
            <HourlyForecast />
            <Forecast />
            </main>  
        </div>

    )
}
export default Dashboard