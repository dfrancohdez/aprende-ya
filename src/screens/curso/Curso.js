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
                    <div className='contenedor-titulo'>
                        <h2 className='titulo-c'>Reseñas del curso</h2>
                        <Reseña
                            fijar={true}
                            precio={100}
                            img={ImgPrueba}
                        />
                    </div>
                </div>
                <div className='contenido-derecha'>
                    <BloqTxt titulo="Requisitos" items={items2} />
                </div>

                

            </div>
            <Footer />
        </div>
    );
}

export default MisCursos;
