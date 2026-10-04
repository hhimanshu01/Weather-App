import SearchBox from "./SearchBox";
import InfoBox from "./Infobox";
import { useState } from "react";

export default function WeatherApp()
{
    let [weather , setWeather] = useState({
        city : "Fatehabad",
        temp : 38.52,
        tempMax : 38.52,
        tempMin : 38.52,
        weather : "clear sky",
        feelsLike : 34.68,
        humidity : 17
    })

    let updateWeather = (newInfo) => {
        setWeather(newInfo);
    }

    return (
        <div>
            <h1 style={{textAlign : "center"}}>Weather App made with React</h1>
            <SearchBox updateInfo={updateWeather}/>
            <InfoBox info={weather}/>
        </div>
    );
}