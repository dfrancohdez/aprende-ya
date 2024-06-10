import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import './_homeScreen.scss'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { useState } from 'react'
import { Asesoria } from '../../components/asesoria/Asesoria'

function HomeScreen() {
    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }
    return (
        <div className='homeScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className='overflowx'>
                <div className='homeScreen-container'>
                    <div className='homeScreen-busqueda'>
                        <h6>Ubicación</h6>
                        <ul>
                            <li>Nuevo León</li>
                            <li>Distrito Federal</li>
                            <li>Estado de México</li>
                            <li>Sonora</li>
                            <li>Jalisco</li>
                            <li>Baja California</li>
                            <li>Aguascalientes</li>
                            <li>Tamaulipas</li>
                            <li>Puebla</li>
                        </ul>
                        <h6>Precio</h6>
                        <ul>
                            
                            <li>Hasta $450</li>
                            <li>$450 a $850</li>
                            <li>Más de $850</li>
                            <li>Gratis</li>
                        </ul>
                        <ul>
                            
                        </ul>
                    </div>
                    <div className='homeScreen-container-asesorias'>
                        <Asesoria />
                        <Asesoria />
                        <Asesoria />
                        <Asesoria />
                        <Asesoria />
                        <Asesoria />
                        <Asesoria />
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )


}
export default HomeScreen;