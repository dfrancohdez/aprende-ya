import React from "react";
import "./_video.scss";
import {AiFillEye}from"react-icons/ai"
const Video=()=> {
  return (
    <div className="home__video">
        <div className="home__video__top">
          <img src="	https://i.ytimg.com/vi/3v-xJ4GImIc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDW9af0Bl7TLS_EJvsVtN-r305ZBQ" alt=""/>
          <span>05:34</span>
        </div>
        <div className="home__video__title">
          Youtube-clone
        </div>
        <div className="home__video__details">
          <span>
            <AiFillEye/> 5m views • 
          </span>
          <span>
             5 days ago
          </span>
        </div>
        <div className="home__video__channel">
          <img src="https://yt3.ggpht.com/ytc/AIdro_nBMZVFA7nkIFmtpBgbz0LE59y9wmj9AusPTlzeUhW3DA=s68-c-k-c0x00ffffff-no-rj" alt=""/>
          <p>Canal chanel</p>
        </div>
    </div>
  );
}

export default Video