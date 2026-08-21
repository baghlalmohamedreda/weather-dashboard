
export function getfavorites (){
    return JSON.parse(localStorage.getItem("favoritescitys"))||[]

}
export function addcity(city){
    const citys=getfavorites()
    const isexist =citys.some(e=>e.city===city.city) 
    if(isexist){
        return
    }
    citys.push(city)
    localStorage.setItem("favoritescitys",JSON.stringify(citys))
}
export function removefavorite(city){
    const citys=getfavorites()
    const updatecitys=citys.filter(e=>e.city!==city.city)
    localStorage.setItem("favoritescitys",JSON.stringify(updatecitys))
}