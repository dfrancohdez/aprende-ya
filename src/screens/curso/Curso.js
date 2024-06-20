import React, { useState } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from '../../components/navBar/sidebar/Sidebar';
import EncabezadoCurso from '../../components/encabezadoCurso/EncabezadoCurso';
import AsesoriaCurso from '../../components/asesoriaCurso/AsesoriaCurso';
import { BloqTxt } from '../../components/bloqTxt/BloqTxt';
import { Accordion2 } from '../../components/accordion2/Accordion2'
import ImgPrueba from "./img/Rectangle 30.png";
import Reseña from '../../components/reseña/Reseña';
import IconoPerfil from './img/inconoPerfil.png'
import './_curso.scss';

function MisCursos() {
    const [sidebar, toggleSideBar] = useState(false);

    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev);
    };

    const items = [
        'Dominarás la programación profesional en Python',
        'Crearás programas sólidos, avanzados y útiles',
        'Trabajarás en programas del mundo real todos los días. Cada sección finaliza con un proyecto que podrás completar con lo aprendido en el día',
        'Aplicarás Python en aplicaciones como: Juegos, Inteligencia Artificial, Machine Learning, Data Science, Gestión Administrativa y mucho más',
        'Comprenderás la Programación Orientada a Objetos (OOP)',
        'Aprenderás con claridad los temas más complejos'
    ];
    const items2 = [
        'Acceso a un ordenador con conexión a internet',
        'Deseo de crecimiento rápido y ganas de aprender con alegría'
    ];

    return (
        <div className='cursosScreen'>
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
                        <AsesoriaCurso
                            fijar={true}
                            precio={100}
                            img={ImgPrueba}
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
                        <p>Python es uno de los lenguajes más buscados del mundo. Por su sencillez, su ductilidad y su flexibilidad, se ha transformado en el lenguaje favorito. Sus instrucciones son lo más cercanas posible al lenguaje humano, lo cual hace que sea más fácil de aprender, y esto hace que sea ideal para personas que se están iniciando en el mundo de la programación.
                        </p>
                        <p>Además de sencillo es poderoso: con unas pocas líneas de código puedes realizar tareas que en otros lenguajes de programación ocuparían cientos de líneas, y esto hace que aumente considerablemente tu productividad.
                        </p>
                        
                    </div>
                </div>
                <div className='contenedor-titulo'>
                    <center><h2 className='titulo-c'>Reseñas del curso</h2></center>
                        <div className='cont-line'>
                            <Reseña
                                imagenRe={IconoPerfil}
                                nombre={'José Martín Cruz'}
                                calificacion={3}
                                tiempoCali={4}
                                opinion={'Increible el curso su contenido en muy bueno, y solo tendria un comentario de mejora, en toda la parte de graficos el nivel de volumen de las clases es muy bajo.'}
                            />      
                            <Reseña
                                imagenRe={IconoPerfil}
                                nombre={'José Martín Cruz'}
                                calificacion={3}
                                tiempoCali={4}
                                opinion={'Increible el curso su contenido en muy bueno, y solo tendria un comentario de mejora, en toda la parte de graficos el nivel de volumen de las clases es muy bajo.'}
                            />
                            <Reseña
                                imagenRe={IconoPerfil}
                                nombre={'José Martín Cruz'}
                                calificacion={3}
                                tiempoCali={4}
                                opinion={'Increible el curso su contenido en muy bueno, y solo tendria un comentario de mejora, en toda la parte de graficos el nivel de volumen de las clases es muy bajo.'}
                            />          
                        </div> 
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default MisCursos;
