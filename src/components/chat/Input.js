import React from 'react'
import img from '../../assets/img/chat/img/img.png'
import attach from '../../assets/img/chat/img/attach.png'
const Input=()=>{
    return (
        <div className='chat-input'>
                <input type='text' placeholder='Type something...'/>
                <div className='chat-send'>
                    <img src={attach}/>
                    <input type='file' style={{display:"none"}} id='file'/>
                    <label htmlFor='file'>
                        <img src={img}/>
                    </label>
                    <button>Send</button>
                </div>
        </div>
    )
}
export default Input