import './App.css';
import './styles/auth.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/shared/header";
import Login from "./components/pages/Auth/login";
import Register from './components/pages/Auth/register';
import Home from './components/pages/Home/home';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
