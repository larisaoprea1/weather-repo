import '../../styles/header.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    function Logout() {
        localStorage.removeItem("token");
        navigate('/');
    }

    return (
        <nav>
            {
                localStorage.getItem('token') !== null && (
                    <NavLink className="header-item" exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                )
            }
            {
                localStorage.getItem('token') === null && (
                    <NavLink className="header-item" activeClassName="active" to="/login">
                        Login
                    </NavLink>
                )
            }
            {
                localStorage.getItem('token') !== null && (
                    <NavLink className="header-item" activeClassName="active" to="/" onClick={Logout}>
                        Logout
                    </NavLink>
                )
            }
            {
                localStorage.getItem('token') === null && (
                    <NavLink className="header-item" activeClassName="active" to="/register">
                        Register
                    </NavLink>
                )
            }
        </nav >
    );
}

export default Header;