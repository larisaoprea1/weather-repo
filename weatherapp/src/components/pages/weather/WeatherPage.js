import { useEffect, useReducer, useState } from "react";
import{Link } from "react-router-dom"
import "./MainPageCSS.css"
import WeatherData from "./WeatherData";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import useLocalStorage from "../../../useLocalStorage";
import SearchComp from "./SearchComp";

function WeatherPage(){
   const [city, setCity] = useLocalStorage("city",""); 
   const [weatherInfo, setWeatherInfo]= useState({});
   const [loading, setLoading]= useState(true);
   
   useEffect(()=>{
       handleFetch();
   },[])

   const API_URL=`http://api.weatherapi.com/v1/forecast.json?key=f3ccb1cf28744fea8bd143806223107&q=${city}&days=6&aqi=yes&alerts=yes`;
   const handleFetch = async() =>{
      await fetch(API_URL)
       .then((response) => response.json())
       .then((data) => setWeatherInfo({
           name: data.location.name,
           country: data.location.country,
           temp_c: data.current.temp_c,
           feelslike_c: data.current.feelslike_c,
           humidity: data.current.humidity,
           icon: data.current.condition.icon,
           daycount: data.forecast.forecastday.length,
           getDay: function(days){
            return{
              id: data.forecast.forecastday[days].date_epoch,
              temp: data.forecast.forecastday[days].day.avgtemp_c,
              icon: data.forecast.forecastday[days].day.condition.icon,
              time: data.forecast.forecastday[days].date,
              text: data.forecast.forecastday[days].day.condition.text,
              max_temp: data.forecast.forecastday[days].day.maxtemp_c,
              min_temp: data.forecast.forecastday[days].day.mintemp_c,
              totalprec: data.forecast.forecastday[days].day.totalprecip_mm,
              windkph: data.forecast.forecastday[days].day.maxwind_kph,
              avghumidity: data.forecast.forecastday[days].day.avghumidity,
              sunrise: data.forecast.forecastday[days].astro.sunrise,
              sunset:data.forecast.forecastday[days].astro.sunset
            }
           },
           date: data.location.localtime,
           text: data.current.condition.text
       }));
       setLoading(false);
   }
   function logOut(){
      window.location.href = '/';
   }
   const handleSearchCity = (searchCity)=>{
    setCity(searchCity.value);
    handleFetch();
    console.log(searchCity)
   }
 return (
 <div className="all">
  <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand><Link to={"/home"} className="navlogo">Weather App</Link></Navbar.Brand>
        <a className="logout" onClick={logOut}>Logout</a>
      </Container>
    </Navbar>
 
 <h1 className="contentmain">Hello, welcome to the Weather App </h1> 
 
 <div className="weather"> 
  
 
  <SearchComp onSearchCity={handleSearchCity}/>
  <button class="searchbtn" onClick={handleFetch}>Search</button>
  </div>
 
  {loading ? (<div><h1>Loading...</h1></div>) : (<WeatherData weatherInfo={weatherInfo}/>)}


</div>);

}
export default WeatherPage;