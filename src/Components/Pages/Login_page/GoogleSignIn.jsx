import React, { useEffect, useState } from "react";
import {auth,provider} from "../../../firebase.js";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { storeUserInFirestore } from "./StoreUser";
import { createUserDocument } from "./CreateUserChat";


function GoogleSignIn(){
    const [value,setValue] = useState('')
    const navigate = useNavigate();
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            const User = data.user;
            setValue(data.user.email);
            localStorage.setItem("email",data.user.email);
            storeUserInFirestore(User);
            createUserDocument(User)
            
            navigate("/home")
        })
        
        // navigate = useNavigate();
        // navigate("/home");
        
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    })

return (
    <div>
        {
        <button onClick={handleClick}>Signin With Google</button>
        }
    </div>
);
}
export default GoogleSignIn;