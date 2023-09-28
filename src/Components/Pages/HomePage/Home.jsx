import React from 'react'
import { Sidebar } from '../../Chatroom/Sidebar'
import { Chat } from '../../Chatroom/Chat'
import './Home.scss'

export const Home = () => {
  return (
    <div id= 'home' className='Home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home;
