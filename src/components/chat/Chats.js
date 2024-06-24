import React from 'react'
import profile from '../../assets/img/chat/img/profile.jpg'
const Chats=()=>{
    return (
        <div className='chat-chats'>
            <div className='chat-userChat'>
                <img src={profile}></img>
                <div className='chat-userChatInfo'>
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>

            <div className='chat-userChat'>
                <img src={profile}></img>
                <div className='chat-userChatInfo'>
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>

            <div className='chat-userChat'>
                <img src={profile}></img>
                <div className='chat-userChatInfo'>
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}
export default Chats