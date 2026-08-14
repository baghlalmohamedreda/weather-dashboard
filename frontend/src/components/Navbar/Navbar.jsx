import {NavLink} from "react-router-dom"
import "./Navbar.css"
import { WiDayCloudy } from "react-icons/wi";
function Navbar(){
    return (
       <nav className="navbar">
           <div className="logo">
               <WiDayCloudy className="logo-icon" />
               <span>Weather Dashboard</span>
            </div>

            <div className="nav-links">
                     <NavLink to="/">Dashboard</NavLink>
                     <NavLink to="/favorites">Favorites</NavLink>
                     <NavLink to="/about">About</NavLink>
                     <NavLink to="/settings">Settings</NavLink>
            </div>
    </nav>

    )
}
export default Navbar