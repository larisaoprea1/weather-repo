import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useNavigate } from "react-router-dom";

const RegisterForm = ({
    onUsernameChanged, onPasswordChanged, onConfirmPasswordChanged, onEmailChanged, onSubmit
}) => {
    const navigate = useNavigate();

    return (
        <div className="app-form">
            <form id="register">
                <h5 className="title">Register</h5>

                <div className="input-group mb-2 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={solid('user-alt')} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={onUsernameChanged} />
                </div>

                <div className="input-group mb-2 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={solid('key')} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Password" aria-label="Password" onChange={onPasswordChanged} />
                </div>

                <div className="input-group mb-2 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={solid('key')} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Confirm password" aria-label="Confirm password" onChange={onConfirmPasswordChanged} />
                </div>

                <div className="input-group mb-2 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={solid('at')} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={onEmailChanged} />
                </div>

                <div className="d-flex justify-content-center mx-1">
                    <div className="btn-group w-25 mr-2" role="group">
                        <button type="button" className="btn btn-danger w-25" onClick={() => navigate("/login")}>Toggle</button>
                    </div>
                    <div className="btn-group w-50" role="group">
                        <button type="button" className="btn btn-primary w-75" onClick={onSubmit}>Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;