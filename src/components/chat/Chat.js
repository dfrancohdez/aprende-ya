import React from 'react'
import cam from '../../assets/img/chat/img/cam.png'
import add from '../../assets/img/chat/img/add.png'
import more from '../../assets/img/chat/img/more.png'
import { Messages } from './Messages'
import Input from './Input'
const Chat=()=>{
    return (
        <div className='chat-chat'>
            <div className='chat-chatInfo'>
                <span>Jane</span>
                <div className='chat-chatIcons'>
                    <img src={cam}></img>
                    <img src={add}></img>
                    <img src={more}></img>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}
export default Chat