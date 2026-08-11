import "./Searchbar.css"
import { useState } from "react"

function Searchbar({onHandlesearch}){
    const [city,setCity]=useState("")
    const [err,setErr]=useState("")
    function handleclick(e){
        e.preventDefault()
        if(!city.trim()){
            setErr("tu dois remplir le champ")
            return
        }
        onHandlesearch(city.trim())
    }
    return (
        <div className="search-container">
            <div className="searchbar">
                <input onChange ={e=>{setCity(e.target.value); setErr("")} } value={city} type = "text" placeholder="Search for a city..." />
                <button onClick={handleclick} >🔍</button>
            </div>
              {err && <span className="error">{err}</span>}
        </div>
    )
}
export default Searchbar