import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import InfoBox from './Infobox';

export default function SearchBox({updateInfo})
{
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let [city , setCity] = useState("");
    let [error,setError] = useState(false);

    let getInfo = async () => {
        try 
        {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                feelsLike : jsonResponse.main.feels_like,
                humidity : jsonResponse.main.humidity,
                weather : jsonResponse.weather[0].description,
            }

            console.log(result);
            return result;
        }
        catch(err)
        {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try
        {
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getInfo();
            updateInfo(info);
            setError(false);
        }
        catch(err)
        {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <h3>Search any city</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
                <br /><br />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
            {error ? <h4 style={{color : "red"}}>Place not found !!</h4> : null }
        </div>
    );
}