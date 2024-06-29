import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from '../../components/navBar/sidebar/Sidebar';
import { auth, db } from "../../components/auth/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import { getCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import TituloBar from '../../components/tituloBar/TituloBar';

import './_misCursos.scss';
import { useState, useEffect } from 'react';
import React, { Suspense, lazy } from 'react';
const AsesoriaMisCursos = lazy(() => import('../../components/asesoriaMisCursos/AsesoriaMisCursos'));

function MisCursos() {
    const navigate = useNavigate();
    useEffect(() => {
        const userID = getCookie('sesion');
        if (!userID) {
            navigate("/");
        }
    }, [navigate]);
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
                        console.log(parte1+" "+parte2)
                        const asesoriasDocRef = doc(db, 'Asesorias', parte1);
                        const cursosCollectionRef = collection(asesoriasDocRef, 'Cursos');
                        const cursoDocRef = doc(cursosCollectionRef, parte2);
                        const cursoDocSnapshot = await getDoc(cursoDocRef);

                        if (cursoDocSnapshot.exists()) {
                            const cursoData = cursoDocSnapshot.data();
                            //no se obtienen las secciones
                            return { ...cursoData, id: parte1,path:cursoDocSnapshot.ref.path }; // Devuelve el curso con su ID
                        } else {
                            console.log('El documento curso no existe');
                            return null;
                        }
                    }));
                    console.log(cursosCompradosInfo)
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
                <div >
                    <TituloBar />
                </div>
            </div>
            <Suspense fallback={<div></div>}>
                <div className='misCursosScreen-container'>
                    {cursosComprados&&cursosComprados.map((curso, index) => (
                        <AsesoriaMisCursos
                            key={index}
                            fijar={true}
                            nombreCurso={curso.nombreCurso}
                            nombre={curso.nombre}
                            img={curso.img}
                            id={curso.id} // Pasa el ID directamente desde el objeto curso
                            path={curso.path}
                        />
                    ))}
                </div>
            </Suspense>

            <Footer />
        </div>
    );
}

export default MisCursos;
