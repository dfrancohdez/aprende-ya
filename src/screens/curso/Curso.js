import React, { useState, useEffect } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from '../../components/navBar/sidebar/Sidebar';
import EncabezadoCurso from '../../components/encabezadoCurso/EncabezadoCurso';
import AsesoriaCurso from '../../components/asesoriaCurso/AsesoriaCurso';
import { BloqTxt } from '../../components/bloqTxt/BloqTxt';
import { Accordion2 } from '../../components/accordion2/Accordion2'
import { useLocation } from 'react-router-dom';
import { db } from "../../components/auth/firebase";
import { getDocs, collection } from "firebase/firestore";
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

    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        const fetchSecciones = async () => {
            try {
                const asesoriasSnapshot = await getDocs(collection(db, 'Asesorias'));
                let seccionesList = [];

                for (const asesoriaDoc of asesoriasSnapshot.docs) {
                    const cursosCollectionRef = collection(asesoriaDoc.ref, 'Cursos');
                    const cursosSnapshot = await getDocs(cursosCollectionRef);

                    for (const cursoDoc of cursosSnapshot.docs) {
                        if (cursoDoc.id === prev.nombreCurso) {
                            const seccionesCollectionRef = collection(cursoDoc.ref, 'Secciones');
                            const seccionesSnapshot = await getDocs(seccionesCollectionRef);

                            seccionesSnapshot.forEach(doc => {
                                seccionesList.push({ id: doc.id, ...doc.data() });
                            });
                        }
                    }
                }

                setSecciones(seccionesList);
            } catch (error) {
                console.error('Error al obtener las secciones:', error);
            }
        };

        fetchSecciones();
    }, []);

    console.log(secciones);



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
                <div className='cursosScreen-info'>
                <div className='contenido-izquierda'>
                    <BloqTxt titulo="Lo que aprenderás" items={items} />

                    <div className='contenedor-titulo'>
                        <h2 className='titulo-c'>Clases</h2>
                        {secciones && secciones.map((doc) => (
                            <Accordion2
                                title={doc.nombre}
                                content={doc.clases}
                                noClases={doc.clases.length}
                                
                            />
                        ))}
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
