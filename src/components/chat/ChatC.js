import React from 'react'
import Camara from '../../assets/img/camara.png';
import Add from '../../assets/img/agregar-usuario.png';
import More from '../../assets/img/mas.png';
const ChatC = () => {
  return (
    <div className='chat'>
        <div  className='chatInfo'>
            <span>Jane</span>
            <div  className='chaticons'>
                <img src={Camara} alt=''/>
                <img src={Add} alt=''/>
                <img src={More} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default ChatC