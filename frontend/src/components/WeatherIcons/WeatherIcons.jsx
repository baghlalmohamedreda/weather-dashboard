import {
    WiDaySunny,
    WiNightClear,
    WiDayCloudy,
    WiCloud,
    WiRain,
    WiThunderstorm,
    WiSnow,
    WiFog
} from "react-icons/wi";

function WeatherIcons({code,size}){
   switch (code) {

        case "01d":
            return <WiDaySunny size={size} color="#FFC107" />;

        case "01n":
            return <WiNightClear size={size} color="#6C63FF" />;

        case "02d":
        case "02n":
            return <WiDayCloudy size={size} color="#FDB813" />;

        case "03d":
        case "03n":
        case "04d":
        case "04n":
            return <WiCloud size={size} color="#90A4AE" />;

        case "09d":
        case "09n":
        case "10d":
        case "10n":
            return <WiRain size={size} color="#42A5F5" />;

        case "11d":
        case "11n":
            return <WiThunderstorm size={size} color="#5C6BC0" />;

        case "13d":
        case "13n":
            return <WiSnow size={size} color="#81D4FA" />;

        default:
            return <WiFog size={size} color="#90A4AE" />;
    }

}
export default WeatherIcons