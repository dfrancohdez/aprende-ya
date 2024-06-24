import React from 'react'
import profile from '../../assets/img/chat/img/profile.jpg'
const Message=()=>{
    return (
        <div className='chat-message chat-owner'>
            <div className='chat-messageInfo'>
                <img src={profile}></img>
                <span>Just now</span>
            </div>
            
            <div className='chat-messageContent'>
                <p>Hello</p>
                 <img src={profile}/>
            </div>
        </div>
    )
}
export default Message