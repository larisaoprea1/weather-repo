import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate } from "react-router-dom";
import '../../styles/weather.css'

const WeatherResponseForm = (props) => {
    var data = props.weather;

    if (data.list === null) {
        return (<></>)
    }

    return (
        <div className="app-form">
            <br />

            <p id="weather-response">
                City: {data.list[0].name}
            </p>
            <p id="weather-response">
                Temperature: {data.list[0].main.temp}C
            </p>

            <br></br>
        </div>
    );
};

export default WeatherResponseForm;