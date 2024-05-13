import React from "react";
import "./_sidebar.scss"
import { auth, db } from "../../auth/firebase";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
}from"react-icons/md"
const Sidebar=({sidebar,handleToggleSidebar})=> {
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <nav className={sidebar?"home__sidebar open":"home__sidebar"}
    onClick={()=>handleToggleSidebar(false)}
    >
        <li>
          <MdHome size={23}/>
          <span>Home</span>
        </li>
        <li>
        <MdSubscriptions size={23}/>
          <span>Subscriptions</span>
        </li>
        <li>
          <MdThumbUp size={23}/>
          <span>Liked Video</span>
        </li>
        <li>
          <MdHistory size={23}/>
          <span>History</span>
        </li>

        <li>
          <MdLibraryBooks size={23}/>
          <span>Library</span>
        </li>
        <li>
          <MdSentimentDissatisfied size={23}/>
          <span>I don't know</span>
        </li>
        <hr/>
        <li>
          <MdExitToApp size={23}/>
          <span onClick={handleLogout}>Log Out</span>
        </li>
        <hr/>

        
    </nav>
  );
}

export default Sidebar