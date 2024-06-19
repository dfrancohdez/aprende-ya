import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import EncabezadoCurso from '../../components/encabezadoCurso/EncabezadoCurso'
import './_curso.scss'
import { useState } from 'react'
import ImgLanguaje from "./language_24dp_FILL0_wght400_GRAD0_opsz24.png"
import  AsesoriaCurso  from '../../components/asesoriaCurso/AsesoriaCurso'

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
                    <div className='flotante'>
                        <AsesoriaCurso
                            fijar={true}
                            precio={100}
                            
                            //img={prev.img}
                        />
                        
                    </div>
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