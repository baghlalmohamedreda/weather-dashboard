import { useState,useEffect } from "react"
import {getfavorites} from "../services/favorites"

function Favorites(){
    const [favorites,setFavorites]=useState([])
    useEffect(()=>{
        setFavortites(getfavorites())
        
    },[])
    return (
        <div>
        
        
        </div>


    )

}
export default Favorites