import React, { useState } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from '../../components/navBar/sidebar/Sidebar';
import EncabezadoCurso from '../../components/encabezadoCurso/EncabezadoCurso';
import AsesoriaCurso from '../../components/asesoriaCurso/AsesoriaCurso';
import { BloqTxt } from '../../components/bloqTxt/BloqTxt';
import { Accordion2 } from '../../components/accordion2/Accordion2'
import { useLocation } from 'react-router-dom';
import ImgPrueba from "./img/Rectangle 30.png";
import Reseña from '../../components/reseña/Reseña';
import IconoPerfil from './img/inconoPerfil.png'
import './_curso.scss';

function MisCursos() {
    const [sidebar, toggleSideBar] = useState(false);

    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev);
    };

    const location = useLocation();
    const { prev } = location.state || {}; // Acceder a los datos del estado

    const items = [];
    prev.aprender.map(apre =>
        items.push(apre)
    )

    const items2 = [];
    prev.requisitos.map(requisito =>
        items2.push(requisito)
    )

    return (
        <div className='cursosScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div className={sidebar ? 'blur' : ''}></div>
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? 'blur' : ''}></div>
                <div className='encabezado'>
                    <EncabezadoCurso
                        titulo={prev.nombreCurso}
                        descripcionCorta={prev.resumen}
                        nombreAsesor={prev.nombre}
                        calificacion={prev?.califAct===0?0:prev?.califAct/prev.reviews.length}
                        noCalificaciones={prev?.reviews?.length}
                        noEstudiantes={43639}
                        idioma={'Español'}
                    />
                    <div className='flotante'>
                        <AsesoriaCurso
                            fijar={true}
                            precio={prev.precio}
                            img={prev.img}
                            path={prev.path}
                        />
                    </div>
                </div>

            </div>
            <div className='cursosScreen-container'>

                <div className='contenido-izquierda'>
                    <BloqTxt titulo="Lo que aprenderás" items={items} />
                    <div className='contenedor-titulo'>
                        <h2 className='titulo-c'>Contenido del curso</h2>
                        <Accordion2 title={"¿Qué son los cursos en línea?"} content={"Los cursos en línea son programas educativos que se ofrecen a través de internet. Estos cursos permiten a los estudiantes aprender nuevas habilidades, adquirir conocimientos en diversas áreas y obtener certificaciones."} tiempo={60} img={ImgPrueba}/>
                        <Accordion2 title={"¿Cómo me registro en la plataforma?"} content={"Para registrarte, simplemente visita nuestra página de registro, proporciona tu nombre, dirección de correo electrónico y crea una contraseña."} tiempo={60} img={ImgPrueba}/>
                        <Accordion2 title={"¿Qué son los cursos en línea?"} content={"Los cursos en línea son programas educativos que se ofrecen a través de internet. Estos cursos permiten a los estudiantes aprender nuevas habilidades, adquirir conocimientos en diversas áreas y obtener certificaciones."} tiempo={60} img={ImgPrueba}/>
                        <Accordion2 title={"¿Cómo me registro en la plataforma?"} content={"Para registrarte, simplemente visita nuestra página de registro, proporciona tu nombre, dirección de correo electrónico y crea una contraseña."} tiempo={60} img={ImgPrueba}/>
                    </div>
                </div>
                <div className='contenido-derecha'>
                    <BloqTxt titulo="Requisitos" items={items2} />
                    <div className='contenedor-titulo'>
                        <h2 className='titulo-c'>Descripción</h2>
                        <p>{prev.descripcion}
                        </p>                      
                    </div>
                </div>
                <div className='contenedor-titulo'>
                    <center><h2 className='titulo-c'>Reseñas del curso</h2></center>
                        <div className='cont-line'>
                            {prev.reviews.map(review=>
                            <Reseña
                                imagenRe={IconoPerfil}
                                nombre={review?.name}
                                calificacion={review?.calif}
                                tiempoCali={review?.date}
                                opinion={review?.opinion}
                            />      
                            )}
                        </div> 
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default MisCursos;
