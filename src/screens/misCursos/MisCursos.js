import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from '../../components/navBar/sidebar/Sidebar';
import { auth, db } from "../../components/auth/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import TituloBar from '../../components/tituloBar/TituloBar';

import './_misCursos.scss';
import { useState, useEffect } from 'react';
import React, { Suspense, lazy } from 'react';
const AsesoriaMisCursos = lazy(() => import('../../components/asesoriaMisCursos/AsesoriaMisCursos'));

function MisCursos() {
    const [sidebar, toggleSideBar] = useState(false);
    const [cursosComprados, setCursosComprados] = useState([]);

    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userDocRef = doc(db, 'Users', user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    const cursosCompradosData = userData.cursosComprados || [];

                    const cursosCompradosInfo = await Promise.all(cursosCompradosData.map(async (curso) => {
                        const partes = curso.split('-');
                        const parte1 = partes[0]; // Id
                        const parte2 = partes[1]; // curso

                        const asesoriasDocRef = doc(db, 'Asesorias', parte1);
                        const cursosCollectionRef = collection(asesoriasDocRef, 'Cursos');
                        const cursoDocRef = doc(cursosCollectionRef, parte2);
                        const cursoDocSnapshot = await getDoc(cursoDocRef);

                        if (cursoDocSnapshot.exists()) {
                            const cursoData = cursoDocSnapshot.data();
                            return { ...cursoData, id: parte1 }; // Devuelve el curso con su ID
                        } else {
                            console.log('El documento curso no existe');
                            return null;
                        }
                    }));

                    setCursosComprados(cursosCompradosInfo.filter(curso => curso !== null)); // Filtrar nulos
                } else {
                    console.log('El documento del usuario no existe');
                }
            } catch (error) {
                console.error('Error al obtener el documento del usuario:', error);
            }
        };

        if (user) {
            fetchUserData();
        }

    }, [user]);

    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev);
    };

    return (
        <div className='misCursosScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div className={sidebar ? "blur" : ""}></div>

            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
                <div className='tituloBar'>
                    <TituloBar />
                </div>
            </div>
            <Suspense fallback={<div></div>}>
                <div className='misCursosScreen-container'>
                    {cursosComprados.map((curso, index) => (
                        <AsesoriaMisCursos
                            key={index}
                            fijar={true}
                            nombreCurso={curso.nombreCurso}
                            nombre={curso.nombre}
                            img={curso.img}
                            id={curso.id} // Pasa el ID directamente desde el objeto curso
                        />
                    ))}
                </div>
            </Suspense>

            <Footer />
        </div>
    );
}

export default MisCursos;
