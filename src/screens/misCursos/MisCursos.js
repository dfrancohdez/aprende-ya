import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import TituloBar from '../../components/tituloBar/TituloBar'


import './_misCursos.scss'
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
                <div className='tituloBar'>
                    <TituloBar/>
                </div>
            </div> 
            
            
            <div className='cursosScreen-container'>
                <Suspense fallback={<div></div>}>
                    <AsesoriaMisCursos
                        fijar={true}
                        nombreCurso={'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL'}
                        nombre={'Juan Pablo De la torre Valdez'}
                        //img={prev.img}
                    />
                </Suspense>
                <Suspense fallback={<div></div>}>
                    <AsesoriaMisCursos
                        fijar={true}
                        nombreCurso={'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL'}
                        nombre={'Juan Pablo De la torre Valdez'}
                        //img={prev.img}
                    />
                </Suspense>
                <Suspense fallback={<div></div>}>
                    <AsesoriaMisCursos
                        fijar={true}
                        nombreCurso={'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL'}
                        nombre={'Juan Pablo De la torre Valdez'}
                        //img={prev.img}
                    />
                </Suspense>
                <Suspense fallback={<div></div>}>
                    <AsesoriaMisCursos
                        fijar={true}
                        nombreCurso={'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL'}
                        nombre={'Juan Pablo De la torre Valdez'}
                        //img={prev.img}
                    />
                </Suspense>
                <Suspense fallback={<div></div>}>
                    <AsesoriaMisCursos
                        fijar={true}
                        nombreCurso={'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL'}
                        nombre={'Juan Pablo De la torre Valdez'}
                        //img={prev.img}
                    />
                </Suspense>
            </div>
            
            <Footer />
        </div>
    )
}
export default MisCursos;