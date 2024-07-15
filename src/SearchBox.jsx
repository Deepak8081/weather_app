import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import  "./SearchBox.css"
export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="04efae67a7bbf3e085b4282352653509";

let getWeatherInfo=async()=>{
let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
let data=await response.json();
//console.log(data);
let result={
    city:city,
    temp:data.main.temp,
    tempMin:data.main.temp_min,
    tempMax:data.main.temp_max,
    humidity:data.main.humidity,
    feelLike:data.main.feels_like,
    weather:data.weather[0].description,
    // pressure:data.main.pressure,
    // wind:data.wind.speed,
    // city:data.name,
    // country:data.sys.country,
}
console.log(result);
return result;
}
    
    
    let handleChange= (evt) =>{
        setCity(evt.target.value);
    };

    let handleSubmit= async(evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
       updateInfo(newInfo);
    };
    return (
        <div className="SearchBox">
            {/* <h3>Search For the whether</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="City" onChange={handleChange} label="City Name" variant="outlined" value={city} required  />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">SEARCH</Button>
            </form>
        </div>
    );
}