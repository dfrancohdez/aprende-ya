import React from 'react'
import profile from '../../assets/img/chat/img/profile.jpg'
const Navbar = () => {
    return (
        <div className='chat-navbar'>
            <span className='chat-logo'>Mensajes</span>
            <div className='chat-user'>
                <img src={profile} alt=''></img>
                {/* <span>John</span>
                <button>logout</button> */}
            </div>
        </div>
    )
}
export default Navbar