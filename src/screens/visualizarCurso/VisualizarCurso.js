import React, { useState } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from '../../components/navBar/sidebar/Sidebar';
import EncabezadoCurso from '../../components/encabezadoCurso/EncabezadoCurso';
import CuadroPortadaCurso from '../../components/cuadroPortadaCurso/CuadroPortadaCurso'
import ResumenCapitulo from '../../components/resumenCapitulo/ResumenCapitulo';
import { BotonCurso } from '../../components/botonCurso/BotonCurso';
import ImgPort from '../../assets/img/principal/Rectangle 30.png'
import { useLocation } from 'react-router-dom';
import './_visualizarCurso.scss';

function MisCursos() {
    const [sidebar, toggleSideBar] = useState(false);

    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev);
    };

    const location = useLocation();
    const { id, nombreCurso } = location.state || {}; // Acceder a los datos del estado

    console.log('Id: ', id);
    console.log('Nombre: ', nombreCurso);

    return (
        <div className='visualizarCursoScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div className={sidebar ? 'blur' : ''}></div>
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? 'blur' : ''}></div>
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
                        <CuadroPortadaCurso
                            fijar={true}
                            precio={100}
                            img={ImgPort}
                        />
                    </div>
                    <div className='botonV'>
                        <BotonCurso
                            type="button"
                            style="bold"
                            block="full-width"
                            text="Publicar Reseña"
                            page="/#"
                        />
                    </div>
                </div>
            </div>

            <div className='visualizarCursoScreen-container'>

                <div className='contenedor-titulo'>
                    <h2 className='titulo-c'>Contenido del curso</h2>
                </div>
                <div className='resumenes'>
                    <ResumenCapitulo
                        img={ImgPort}
                        nomCap={'Programa un creador de nombres'}
                        duracion={60}
                        progreso={80}
                    />
                    <ResumenCapitulo
                        img={ImgPort}
                        nomCap={'Programa un creador de nombres'}
                        duracion={60}
                        progreso={80}
                    />
                    <ResumenCapitulo
                        img={ImgPort}
                        nomCap={'Programa un creador de nombres'}
                        duracion={60}
                        progreso={80}
                    />
                    <ResumenCapitulo
                        img={ImgPort}
                        nomCap={'Programa un creador de nombres'}
                        duracion={60}
                        progreso={80}
                    />
                    <ResumenCapitulo
                        img={ImgPort}
                        nomCap={'Programa un creador de nombres'}
                        duracion={60}
                        progreso={80}
                    />
                    <ResumenCapitulo
                        img={ImgPort}
                        nomCap={'Programa un creador de nombres'}
                        duracion={60}
                        progreso={80}
                    />
                </div>


            </div>
            <Footer />
        </div>
    );
}

export default MisCursos;
