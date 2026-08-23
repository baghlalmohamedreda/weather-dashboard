import {Routes,Route} from "react-router-dom"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Favorites from "./pages/Favorites"
import Settings from "./pages/Settings"
import Navbar from "./components/Navbar/Navbar"

function App(){
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )

}
export default App