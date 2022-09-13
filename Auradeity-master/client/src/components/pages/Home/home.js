import React, { useEffect, useState } from "react";
import WeatherForm from "../../forms/weather_form";
import WeatherResponseForm from "../../forms/weather_response_form";
import { useNavigate } from "react-router-dom";

function Home() {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            navigate("/login")
        }

        getLastCityWeather()
    }, [])

    function onSubmit() {
        getCityWeather();
    }

    function onCityChanged(data) {
        setCity(data.target.value);
    }

    async function getCityWeather() {
        var token = localStorage.getItem('token');
        console.log(token);

        let result = await fetch(`https://localhost:7103/api/weather/${city}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            try {
                if (response === null || response.length == 0 || response.ok == false) {
                    return;
                }

                var data = await response.json();
                setWeather(JSON.stringify(data));
            } catch { }
        });
    }

    async function getLastCityWeather() {
        var token = localStorage.getItem('token');

        let result = await fetch(`https://localhost:7103/api/weather`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            try {
                if (response === null || response.length == 0 || response.ok == false) {
                    return;
                }

                var data = await response.json();
                setWeather(JSON.stringify(data));
            } catch { }
        });
    }

    return (
        <div>
            <WeatherForm onCityChanged={onCityChanged} onSubmit={onSubmit} />
            {weather.length > 0 && (
                <WeatherResponseForm weather={JSON.parse(weather)} />
            )}
        </div>
    );
}

export default Home;