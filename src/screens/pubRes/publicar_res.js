import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { NavBar } from '../../components/navBar/NavBar'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import Asesoria from '../../components/asesoria2/Asesoria2'
import { useState } from 'react'
import "./_publicar.scss"
import image1 from"./imagen1.png"
function Publicar_res () {
    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
    // console.log("hola")
    toggleSideBar(prev => !prev)
    }
    return (
        <div className='princ'>
        <NavBar type1={false} type2={true} handleToggleSidebar={handleToggleSidebar} />
        <Sidebar sidebar={sidebar} type1={false} type2={true} />
        <h3>Deja tu reseña!</h3>   
 
        <div className='cursoo'><Asesoria/></div>
        <div className='centrar'>
        <div className='reseñas'>
               <div className='feedback'>
                <label>Aspectos positivos</label> 
               <input type="text" placeholder='¿Qué te gustó?'/>
               </div>
               <div className='feedback'>
                <label>Aspectos negativos</label>
               <input type="text" placeholder='¿Qué no te gustó? ¿En qué puede mejorar?'/>
               </div>
               <button type="submit">Publicar</button>
        </div>
        </div>
        <div  className='img1'>
        <img  src={image1} />
        </div>   
        <Footer />
        </div>
            
  )
}

export default Publicar_res