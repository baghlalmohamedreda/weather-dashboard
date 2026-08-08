import {NavLink} from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return (
       <nav className="navbar">
            <div className="logo">
        🌤       <span>Weather Dashboard</span>
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