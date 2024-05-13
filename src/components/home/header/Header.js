import React from "react";
import "./_header.scss"
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md"//material disign
import logo from "../../../logo.png"
const Header = ({handleToggleSidebar}) => {
  return (
    <div className="border border-dark home__header">
      <FaBars className="home__header__menu" size={26} 
      onClick={()=>handleToggleSidebar()}
      />
      <img src={logo} alt="" className="home__header__logo" />
      <form action="">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <dic className="home__header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
        alt="avatar"/>
      </dic>

    </div>
  );
}

export default Header