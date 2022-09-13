import React from 'react'
import { useEffect, useState } from "react";
import RegisterForm from "../../forms/register_form";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    function onUsernameChanged(data) {
        setUsername(data.target.value)
    }

    function onPasswordChanged(data) {
        setPassword(data.target.value)
    }

    function onConfirmPasswordChanged(data) {
        setConfirmPassword(data.target.value)
    }

    function onEmailChanged(data) {
        setEmail(data.target.value)
    }

    function onSubmit(data) {
        register();
    }

    async function register() {
        let result = await fetch("https://localhost:7103/api/Authentication/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                email: email
            })
        }).then(async (response) => {
            if (response.ok == false) {
                // Ceva eroare aici.
                return;
            }

            var token = await response.json();
            localStorage.setItem('token', token);
        });
    }

    return (
        <RegisterForm
            onUsernameChanged={onUsernameChanged}
            onPasswordChanged={onPasswordChanged}
            onConfirmPasswordChanged={onConfirmPasswordChanged}
            onEmailChanged={onEmailChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Register;