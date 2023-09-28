import React, { useContext} from 'react'
import { auth } from "../../firebase.js";
import { AuthContext } from '../../Context/authcontext';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
 
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/")
    })
  }

  return (
    <div className='navbar'>
      <span className='logo'>Chat Live</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
