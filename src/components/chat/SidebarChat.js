import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
const SidebarChat=()=>{
    return (
        <div className='chat-sidebar'>
            <Navbar/>
            <Search />
            <Chats />
        </div>
    )
}
export default SidebarChat