import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { SimpleButton } from '../../components/simpleButton/simpleButton'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { Accordion } from '../../components/accordion/Accordion'
import TituloBar from '../../components/tituloBar/TituloBar'
import { auth, db } from "../../components/auth/firebase";
import { QuerySnapshot, collection, getDocs,collectionGroup, query } from "firebase/firestore";

import './_misCursos.scss'
import { useState } from 'react'

function MisCursos() {
    const [sidebar, toggleSideBar] = useState(false)


    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev)
    }



    return (
        <div className='cursosScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div className='tituloBar'>
                <TituloBar/>
            </div>
            
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div> 
            
            <div className='overflowx'>
                <div className='cursosScreen-container'>
                    <div className='cursosScreen-container-content'>
                    
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )


}
export default MisCursos;