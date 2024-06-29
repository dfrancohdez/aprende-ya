import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import './_homeScreen.scss'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import React, { Suspense, lazy } from 'react'
import { auth, db } from "../../components/auth/firebase";
import { QuerySnapshot, collection, getDocs, collectionGroup, query, where, and } from "firebase/firestore";
import { Blocks } from 'react-loader-spinner'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import './_loader.scss'
import { getCookie } from "../../utils/cookie";
const Asesoria = lazy(() => import('../../components/asesoria/Asesoria'))

function HomeScreen() {
    const navigate = useNavigate();
    useEffect(() => {
        const userID = getCookie('sesion');
        if (!userID) {
            navigate("/");
        }
    }, [navigate]);
    const [buscar,setBuscar]= useState("")
    const [sidebar, toggleSideBar] = useState(false)
    const [carga, setCarga] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }

    const [asesorias, setAsesorias] = useState([])
    const fetchPost = async () => {
        setCarga(true)
        let newData = []
        const asesorias = query(collectionGroup(db, 'Cursos'))
        const querySnapshot = await getDocs(asesorias);
        querySnapshot.forEach((doc) => {
            newData.push({ ...doc.data(),id:doc.id, path:doc.ref.path})
            console.log(newData)
        });
        setCarga(false)
        setAsesorias(newData)
        // console.log(newData)
    }

    useEffect(() => {
        fetchPost();

    }, [])

    const categoria = async (value) => {
        let newData = []
        const asesorias = query(collectionGroup(db, 'Cursos'), where("categoria", "==", value))
        const querySnapshot = await getDocs(asesorias);
        querySnapshot.forEach((doc) => {
            newData.push({ ...doc.data(), id: doc.id, path:doc.ref.path })
        });

        setAsesorias(newData)
        console.log(newData)
    }

    const precio = async (value1, value2) => {
        let newData = []
        const asesorias = query(collectionGroup(db, 'Cursos'), and(where("precio", ">=", value1), where("precio", "<=", value2)))
        const querySnapshot = await getDocs(asesorias);
        querySnapshot.forEach((doc) => {
            newData.push({ ...doc.data(), id: doc.id, path:doc.ref.path})
        });

        setAsesorias(newData)
        console.log(newData)
    }
    const precio1 = async (value1) => {
        let newData = []
        const asesorias = query(collectionGroup(db, 'Cursos'), where("precio", ">=", value1))
        const querySnapshot = await getDocs(asesorias);
        querySnapshot.forEach((doc) => {
            newData.push({ ...doc.data(), id: doc.id, path:doc.ref.path })
        });

        setAsesorias(newData)
        console.log(newData)
    }
    const precio2 = async (value1) => {
        let newData = []
        const asesorias = query(collectionGroup(db, 'Cursos'), where("precio", "==", value1))
        const querySnapshot = await getDocs(asesorias);
        querySnapshot.forEach((doc) => {
            newData.push({ ...doc.data(), id: doc.id, path:doc.ref.path })
        });

        setAsesorias(newData)
        console.log(newData)
    }
    const search = async (value) => {
        let newData = []
        const asesorias = query(collectionGroup(db, 'Cursos'), where("nombreCurso", "==", value))
        const querySnapshot = await getDocs(asesorias);
        querySnapshot.forEach((doc) => {
            newData.push({ ...doc.data(), id: doc.id, path:doc.ref.path })
        });

        setAsesorias(newData)
        console.log(newData)
    }

    const [activeLink, setActiveLink] = useState("");
    const [activeLinkPrecio, setActiveLinkPrecio] = useState("");

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
        if (value === "todo") {
            fetchPost()
        }
        else {

            categoria(value)
        }
    }
    const onUpdateActiveLinkPrecio = (value) => {
        setActiveLinkPrecio(value)
        if (value === "todo") {
            fetchPost()
        } else {
            if (value === "450")
                precio("0", "450")
            else if (value === "500")
                precio("450", "850")
            else if (value === "850")
                precio1("850")
            else if (value === "gratis")
                precio2("0")


        }
    }
    const buscarUpdate = (e) => {
        const { name, value } = e.target
        if (name === "buscar")
            setBuscar(value)
        if(e?.code==="Enter"){
            search(buscar)
        }
    }

    const handleClick = (prev) => {
        {

            navigate('/curso', {
                state: {
                    prev
                }
            })

        }
    };


    return (
        <div className='homeScreen'>
            {carga &&
                <div className='loader'>
                    <Blocks
                        height="80"
                        width="80"
                        color="green"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        visible={true}
                    />
                </div>
            }
            {asesorias.length === 0 && !carga &&
                <div className='loader'>
                    <Blocks
                        height="80"
                        width="80"
                        color="green"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        visible={true}
                    />
                    <h6>No hay resultados</h6>
                </div>
            }
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>

            <div className='busqueda-bar'>

                <div className="input buscar-input">
                    <div className='click-lupa' onClick={() => search(buscar)}>
                        <FaMagnifyingGlass size={28} />
                    </div>


                    <input
                        onChange={buscarUpdate}
                        onKeyDown={buscarUpdate}
                        //error={props.validCorreo?"":"Correo no valido"} 
                        //label="Ingresar correo"
                        value={buscar}
                        name="buscar"
                        type="text"
                        placeholder="Buscar"
                    />
                </div>
            </div>

            <div className='overflowx'>
                <div className='homeScreen-container'>
                    <div className='homeScreen-busqueda'>
                        {/* <h6>Ubicación</h6>
                        <ul>
                            <li>Nuevo León</li>
                            <li>Distrito Federal</li>
                            <li>Estado de México</li>
                            <li>Sonora</li>
                            <li>Jalisco</li>
                            <li>Baja California</li>
                            <li>Aguascalientes</li>
                            <li>Tamaulipas</li>
                            <li>Puebla</li>
                        </ul> */}
                        <h6>Categoría</h6>
                        <ul>
                            <li onClick={() => onUpdateActiveLink('matematicas')}
                                className={activeLink === 'matematicas' ? 'active categoria-link' : 'categoria-link'}>Matemáticas</li>
                            <li onClick={() => onUpdateActiveLink('fisica')}
                                className={activeLink === 'fisica' ? 'active categoria-link' : 'categoria-link'}>Física</li>
                            <li onClick={() => onUpdateActiveLink('programacion')}
                                className={activeLink === 'programacion' ? 'active categoria-link' : 'categoria-link'}>Programación</li>
                            <li onClick={() => onUpdateActiveLink('quimica')}
                                className={activeLink === 'quimica' ? 'active categoria-link' : 'categoria-link'}>Quimica</li>
                            <li onClick={() => onUpdateActiveLink('todo')}
                                className={activeLink === 'todo' ? 'active categoria-link' : 'categoria-link'}>Todo</li>
                        </ul>
                        <h6>Precio</h6>
                        <ul>

                            <li onClick={() => onUpdateActiveLinkPrecio('450')}
                                className={activeLinkPrecio === '450' ? 'active categoria-link' : 'categoria-link'}>Hasta $450</li>
                            <li onClick={() => onUpdateActiveLinkPrecio('500')}
                                className={activeLinkPrecio === '500' ? 'active categoria-link' : 'categoria-link'}>$450 a $850</li>
                            <li onClick={() => onUpdateActiveLinkPrecio('850')}
                                className={activeLinkPrecio === '850' ? 'active categoria-link' : 'categoria-link'}>Más de $850</li>
                            <li onClick={() => onUpdateActiveLinkPrecio('gratis')}
                                className={activeLinkPrecio === 'gratis' ? 'active categoria-link' : 'categoria-link'}>Gratis</li>
                            <li onClick={() => onUpdateActiveLinkPrecio('todo')}
                                className={activeLinkPrecio === 'todo' ? 'active categoria-link' : 'categoria-link'}>Todo</li>
                        </ul>
                        <ul>

                        </ul>
                    </div>

                    <div className='homeScreen-container-asesorias'>

                        {asesorias.length > 0 && asesorias.map(prev =>
                            <Suspense fallback={<div></div>}>
                                <div onClick={() => handleClick(prev)}>
                                    <Asesoria
                                        fijar={true}
                                        precio={prev.precio}
                                        nombreCurso={prev.nombreCurso}
                                        nombre={prev.nombre}
                                        img={prev.img}
                                        value={prev?.califAct===0?0:prev?.califAct/prev?.reviews?.length}
                                    />
                                </div>
                            </Suspense>
                        )

                        }

                    </div>

                </div>

            </div>
            <Footer />
        </div>

    )


}
export default HomeScreen;