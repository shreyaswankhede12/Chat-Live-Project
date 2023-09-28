import React, { useState } from 'react'
import "/home/shreyas/Documents/my_login_page/my_login_page/src/Components/Pages/Login_page/Page.scss";
import Loginform from "/home/shreyas/Documents/my_login_page/my_login_page/src/Components/Pages/Login_page/Login.jsx";
import Signupform from "/home/shreyas/Documents/my_login_page/my_login_page/src/Components/Pages/Login_page/Signup.jsx";
import GoogleSignIn from './GoogleSignIn';


export const LoginPage = () => {
    const [type, setType] = useState("SignIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
    const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div id='loginPage'>
        <h1>Welcome to Chat Live</h1>
      <div className={containerClass} id="container">
        <Signupform />
        <Loginform/>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your credentials and start your journey with Chat Live</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoogleSignIn/>
    </div>
  )
}
