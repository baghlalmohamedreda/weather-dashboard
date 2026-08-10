function CurrentWeather({weathers}){
    return (
        <>
         <h1>{weathers?.city}</h1>
         <p>{weathers?.temperateur}</p>
        </>
       
    )

}
export default CurrentWeather