import React from 'react'
import { useEffect, useState } from "react";
import LoginForm from "../../forms/login_form";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onUsernameChanged(data) {
        setUsername(data.target.value)
    }

    function onPasswordChanged(data) {
        setPassword(data.target.value)
    }

    function onSubmit(data) {
        login();
    }

    async function login() {
        let result = await fetch("https://localhost:7103/api/Authentication/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(async (response) => {
            if(response.ok == false) {
                // Ceva eroare aici.
                return;
            }
            
            var token = await response.json();
            localStorage.setItem('token', token);
            navigate('/');
        });
    }

    return (
        <LoginForm
            onUsernameChanged={onUsernameChanged}
            onPasswordChanged={onPasswordChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Login;