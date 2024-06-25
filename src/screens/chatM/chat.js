import React from 'react';
import Sidebar_chat from '../../components/sidebar_chat/sidebar_chatM';
import Chats from '../../components/chat/chats';
import ChatC from '../../components/chat/ChatC';
import './_chat.scss';
const Chat = () => {
  return (
    <div className='home_chat'>
        <div className='container_chat'>
            <Sidebar_chat/>
            <ChatC/>
        </div>

    </div>
    
  )
}
export default Chat;