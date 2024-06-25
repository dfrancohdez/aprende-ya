import React from 'react';
import Nav_bar_C from '../nav_bar_chat/nav_bar_C';
import Search from '../search/Search';
import Chats from '../chat/chats';
const Sidebar_chat = () => {
  return (
    <div className='sidebar_chat'>
      <Nav_bar_C/>
      <Search/>
      <Chats/>
    </div>
  )
}
export default Sidebar_chat;