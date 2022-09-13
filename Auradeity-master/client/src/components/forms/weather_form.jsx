import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate } from "react-router-dom";
import '../../styles/weather.css'

const WeatherForm = ({ onCityChanged, onSubmit }) => {
    return (
        <div className="app-form">
            <form id="weather">
                <h5 className="title">Search weather</h5>

                <div className="input-group mb-2 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={solid('globe')} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="City" aria-label="City" onChange={onCityChanged}/>
                </div>

                <div className="d-flex justify-content-center mx-1">
                    <div className="btn-group w-75 mr-2 mt-3" role="group">
                        <button type="button" className="btn btn-danger w-25" onClick={onSubmit}>Get info</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WeatherForm;