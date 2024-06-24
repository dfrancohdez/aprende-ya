import React, { useState } from 'react'
import './_cesta.scss'
import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import Asesoria from '../../components/asesoria/Asesoria'
import { Boton } from '../../components/boton/Boton'
import { Recomendaciones } from '../../components/principal/recomendaciones/Recomendaciones'
export const Cesta = () => {
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
            <div className='cesta'>
                <div className='cesta-container'>
                    <div className='cesta-asesorias'>
                        <h4 className='bold'>Cesta</h4>
                        <p>2 asesorias en la cesta</p>
                        <div className='line-cesta'></div>
                        <div className='asesorias'>
                            <Asesoria nombreCurso={"hola"} nombre={"juan"} precio={"100"} type={"type2"} />
                            <Asesoria nombreCurso={"hola"} nombre={"juan"} precio={"100"} type={"type2"} />
                            <Asesoria nombreCurso={"hola"} nombre={"juan"} precio={"100"} type={"type2"} />
                        </div>
                    </div>
                    <div className='cesta-precio'>
                        <div className='cesta-precio-container'>
                            <h6>Total</h6>
                            <h4>300 MX$</h4>
                            <Boton text="comprar"/>
                        </div>
                    </div>

                </div>
                <Recomendaciones text={"También podría gustarte "}/>
            </div>
            <Footer />
        </div>
    )
}