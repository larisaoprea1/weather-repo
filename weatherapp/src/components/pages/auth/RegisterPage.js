import { useState } from "react";
import{Link } from "react-router-dom"
import "./RegisterPageCss.css"
function RegisterPage(){
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const handleRegister = e=> {
        e.preventDefault();
        
        const Data ={
            email: email,
            password: password
        };
        fetch("https://localhost:7226/signup", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>{
        console.log(res)
        setEmail("")
        setPassword("")
    }
    );
    };
    
    
 return(
    <div className="content">
    <div className="imagediv1">
   
    </div>
     {/* //form */}
     <div className="loginform">
    <h1 className="title1">Are you new ?</h1>
    <h1 className="title1">Create an account and join us.</h1>
        <form>
            <div className="container information">
                
                <input type="text" name="email" onChange={onEmailChange} class="email" id="email" required autocomplete="off" />
                <label for="email"><span>Email:</span></label>

                <input type="password" name="psw" onChange={onPasswordChange} class="psw" id="psw" required autocomplete="off" />
                <label for="psw"><span>Password:</span></label>

            </div>
            <div className="mybtn1"> <button onClick={handleRegister} type="submit" class="registerbtn1">Register</button></div>
            <div className="container newacc">
                
            <p>You already have an account?<Link to={"/"}>Login here</Link>.</p>
            </div>
        </form>
    </div>
</div>
 );
}
export default RegisterPage;