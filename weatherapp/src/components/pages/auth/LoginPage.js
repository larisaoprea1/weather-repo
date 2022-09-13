import React from "react";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import "./LoginPageCss.css"

function LoginPage(){
    const history = useNavigate();
    const [email, setLoginEmail]= useState("");
    const [password, setLoginPassword]= useState("");

    const onEmailLoginChange = e => setLoginEmail(e.target.value);
    const onPasswordLoginChange = e => setLoginPassword(e.target.value);

    const handleLogin = e => {
        e.preventDefault();
        
        const Data ={
            email: email,
            password: password
        };
        fetch("https://localhost:7226/login", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{
        history("/home", { replace: true });
    });
    }
return(
<div className="content">
    {/* //form */}
    <div className="loginform">
    <h1 className="title">Welcome to the Weather App</h1>
    <h1 className="title">Login</h1>
        <form>
            <div className="container information">
                
                <input type="text" onChange={onEmailLoginChange} name="email" class="email" id="email" required autocomplete="off" />
                 <label for="email"><span>Email:</span></label>

                <input type="password" onChange={onPasswordLoginChange} name="psw" class="psw" id="psw" required autocomplete="off" />
                <label for="psw"><span>Password:</span></label>

            </div>
            <div className="mybtn"> <button onClick={handleLogin} type="submit" class="registerbtn">Login</button></div>
            <div className="container newacc">
                
            <p>You don't have an account?<Link to={"/register"}>Register here</Link>.</p>
           
            </div>
        </form>
    </div>
    <div className="imagediv"></div>
</div>
);
}
export default LoginPage;