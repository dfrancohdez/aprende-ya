import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import EncabezadoCurso from '../../components/encabezadoCurso/EncabezadoCurso'


import './_curso.scss'
import { useState } from 'react'
import React, { Suspense, lazy } from 'react'
const AsesoriaMisCursos = lazy(() => import('../../components/asesoriaMisCursos/AsesoriaMisCursos'))

function MisCursos() {
    const [sidebar, toggleSideBar] = useState(false)

    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev)
    }

    return (
        <div className='cursosScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div className={sidebar ? "blur" : ""}></div>
            
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
                <div className='encabezado'>
                    <EncabezadoCurso
                        titulo={'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL'}
                        descripcionCorta={'Desde 0, y con 16 proyectos REALES. 160 ejercicios de código. Machine Learning, Data Science, Django, IGU, Juegos y más!'}
                        nombreAsesor={'Juan Pablo De la torre Valdez'}
                        calificacion={3}
                        noCalificaciones={20398}
                        noEstudiantes={43639}
                        idioma={'Español'}
                    />
                </div>
            </div> 
            
            
            <div className='cursosScreen-container'>
                //Codigo de la pagina
            </div>
            
            <Footer />
        </div>
    )
}
export default MisCursos;