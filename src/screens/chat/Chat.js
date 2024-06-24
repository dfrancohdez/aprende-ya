import React,{useState} from 'react'
import SidebarChat from '../../components/chat/SidebarChat'
import Chat from '../../components/chat/Chat'
import './_chat.scss'
import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
export const ChatScreen=()=>{
    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }
    return (
        <div>
        <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
        <div className='chat-home'>
            <div className='chat-container'>
            <SidebarChat/>
            <Chat/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}