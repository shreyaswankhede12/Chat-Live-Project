import React from "react";
import { LoginPage } from "./Components/Pages/Login_page/LoginPage";
import { Home } from "./Components/Pages/HomePage/Home";
import { AuthContextProvider } from './Context/authcontext.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
       <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/home" element={
              // <Protected>
                <Home />
              // </protected>
              
            }
          />
        </Routes>
       </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}