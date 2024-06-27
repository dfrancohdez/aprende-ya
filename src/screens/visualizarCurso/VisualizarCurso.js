import React, { useState, useEffect } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from '../../components/navBar/sidebar/Sidebar';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../components/auth/firebase";
import EncabezadoCurso from '../../components/encabezadoCurso/EncabezadoCurso';
import CuadroPortadaCurso from '../../components/cuadroPortadaCurso/CuadroPortadaCurso'
import ResumenCapitulo from '../../components/resumenCapitulo/ResumenCapitulo';
import { BotonCurso } from '../../components/botonCurso/BotonCurso';
import ImgPort from '../../assets/img/principal/Rectangle 30.png'
import { useLocation } from 'react-router-dom';
import './_visualizarCurso.scss';
import { useNavigate } from "react-router-dom";
function MisCursos() {
    const navigate = useNavigate();
    const [sidebar, toggleSideBar] = useState(false);
    const [curso, setCurso] = useState(null);
    const [secciones, setSecciones] = useState([]);

    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev);
    };

    const location = useLocation();
    const { id, nombreCurso } = location.state || {};

    useEffect(() => {
        const fetchData = async () => {
            if (!id || !nombreCurso) {
                console.error('El estado de la ubicación no está definido.');
                return;
            }

            try {
                const asesoriasDocRef = doc(db, 'Asesorias', id);
                const cursosCollectionRef = collection(asesoriasDocRef, 'Cursos');
                const cursoDocRef = doc(cursosCollectionRef, nombreCurso);
                const cursoDocSnapshot = await getDoc(cursoDocRef);

                if (cursoDocSnapshot.exists()) {
                    const cursoData = cursoDocSnapshot.data();
                    setCurso({...cursoData,path:cursoDocSnapshot.ref.path}); // Guarda los datos del curso
                } else {
                    console.log('El documento curso no existe');
                }
            } catch (error) {
                console.error('Error al obtener el documento del curso:', error);
            }
        };

        const fetchSecciones = async () => {
            if (!id || !nombreCurso) {
                console.error('El estado de la ubicación no está definido.');
                return;
            }

            try {
                const asesoriasDocRef = doc(db, 'Asesorias', id);
                const cursosCollectionRef = collection(asesoriasDocRef, 'Cursos');
                const cursoDocRef = doc(cursosCollectionRef, nombreCurso);
                const seccionesCollectionRef = collection(cursoDocRef, 'Secciones');
                const seccionesSnapshot = await getDocs(seccionesCollectionRef);

                const seccionesList = seccionesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setSecciones(seccionesList);
                
            } catch (error) {
                console.error('Error al obtener las secciones del curso:', error);
            }
        };

        fetchData();
        fetchSecciones();
    }, [id, nombreCurso]);

    console.log('El curso es: ', curso);
    const handleButton = () => {
        navigate('/calif', {
            state: {
                curso
            }
        })
    }
    return (
        <div className='visualizarCursoScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div className={sidebar ? 'blur' : ''}></div>
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? 'blur' : ''}></div>
                <div className='encabezado'>
                        <EncabezadoCurso
                            titulo={curso?.nombreCurso}
                            descripcionCorta={curso?.descripcion} // Ajusta esto según la estructura de tu objeto de curso
                            nombreAsesor={curso?.nombreAsesor} // Ajusta esto según la estructura de tu objeto de curso
                            calificacion={curso?.califAct===0?0:curso?.califAct/curso?.reviews?.length}
                            noCalificaciones={curso?.reviews?.length}
                            noEstudiantes={43639}
                            idioma={'Español'}
                        />

                        <div className='flotante'>
                            <CuadroPortadaCurso
                                fijar={true}
                                precio={curso ? curso?.precio : 0} // Ajusta esto según la estructura de tu objeto de curso
                                img={curso?.img}
                            />
                            <BotonCurso
                            type="button"
                            style="bold"
                            block="full-width"
                            text="Publicar Reseña"
                            handleButton={() => handleButton()}
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
                        img={ImgPort} // Ajusta esto según la estructura de tu objeto de sección
                        nomCap={'Programa un creador de nombres'} // Ajusta esto según la estructura de tu objeto de sección
                        duracion={60} // Ajusta esto según la estructura de tu objeto de sección
                        progreso={80} // Ajusta esto según la estructura de tu objeto de sección
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MisCursos;
