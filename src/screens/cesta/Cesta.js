import React, { useEffect, useState } from 'react'
import './_cesta.scss'
import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import Asesoria from '../../components/asesoria/Asesoria'
import { Boton } from '../../components/boton/Boton'
import { Recomendaciones } from '../../components/principal/recomendaciones/Recomendaciones'
import { auth, db } from "../../components/auth/firebase";
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Blocks } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
export const Cesta = () => {
    const navigate = useNavigate();
    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }
    //////////////////////////////////
    const user = auth.currentUser;
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])
    const [carga, setCarga] = useState(true)
    const [text,setText]=useState("Comprar")
    const handleButton = (page) => {
        navigate(page)
    }

    const fetchData = async () => {
        try {
            setCarga(true)
            console.log(user.uid);
            const userDataSnapshot = await getDoc(doc(db, "Users", user.uid));
            const userData = userDataSnapshot.data()
            const aux = []
            userData.cesta.forEach(async element => {
                const path = element.split('/')
                if (path.length > 1) {
                    const docRef = doc(db, path[0], path[1], path[2], path[3])
                    const snapShot = await getDoc(docRef)
                    const dataCurso = snapShot.data()
                    aux.push(dataCurso)
                    setTotal(prev => prev + parseInt(dataCurso.precio))
                    setData(aux)
                    setCarga(false)

                }

                // const snapShot=getDoc(doc(element.cesta))
                // aux.push(snapShot.data())

            });
            setCarga(false)

            console.log(aux)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (user)
            fetchData()

    }, [user])
    const comprar = async () => {

        try {
            setText("Comprando")
            let cursosComprados = []
            const user = auth.currentUser;
            console.log(user.uid);

            if (user) {
                //setButtonText('Publicando')
                const userDataSnapshot = await getDoc(doc(db, "Users", user.uid));
                const userData = userDataSnapshot.data()
                if (userData.cursosComprados)
                    cursosComprados = userData.cursosComprados
                let keys = userData.cesta.map(prev => {
                    const array = prev.split("/")

                    if (array.length > 1)
                        return array[1] + "-" + array[3]
                })

                keys = keys.filter(prev => prev !== undefined)
                console.log(keys)
                const merge = [...new Set([...cursosComprados, ...keys])]
                await updateDoc(doc(db, "Users", user.uid), {
                    cursosComprados: merge
                });



                //vaciar cesta

                await updateDoc(doc(db, "Users", user.uid), {
                    cesta: []
                });

                //
                setText("Comprar")
                /*for (const seccion of secciones) {
                    for (const clase of seccion) {
                        await setDoc(doc(db, "Asesorias", user.uid, "Cursos", nombreCurso, "Secciones", seccion,"Clases",clase), {
                            nombre:clase.value,
                            material:clase.material
                        })
                    }
                }*/


            }
            
            //console.log("User Registered Successfully!!");
            
            toast.success("Comprado exitosamente", {
                position: "bottom-center",
            });
            
            handleButton("/misCursos")

        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
        //setButtonText('Publicar')
    };


    const eliminar = async (i) => {
        const aux = [...data]
        aux.splice(i, 1)
        setData(aux)
        setTotal(prev => prev - data[i].precio)
        try {
            let cesta = []
            const user = auth.currentUser;
            console.log(user.uid);

            if (user) {
                //setButtonText('Publicando')
                const userDataSnapshot = await getDoc(doc(db, "Users", user.uid));
                const userData = userDataSnapshot.data()
                if (userData.cesta)
                    cesta = userData.cesta.filter(prev => prev !== "")
                //keys = keys.filter(prev => prev !== undefined)

                cesta.splice(i, 1)
                console.log(cesta)
                await updateDoc(doc(db, "Users", user.uid), {
                    cesta: cesta
                });

                /*for (const seccion of secciones) {
                    for (const clase of seccion) {
                        await setDoc(doc(db, "Asesorias", user.uid, "Cursos", nombreCurso, "Secciones", seccion,"Clases",clase), {
                            nombre:clase.value,
                            material:clase.material
                        })
                    }
                }*/


            }
            /*
            console.log("User Registered Successfully!!");
            
            toast.success("Publicado exitosamente", {
                position: "bottom-center",
            });
            handleButton("/home")
            setButtonText("Publicar")*/
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
        //setButtonText('Publicar')
    };

    /////////////////////////////////////////////////////
    return (
        <div>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className='cesta'>
                <div className='cesta-container'>
                    <div className='cesta-asesorias'>
                        <h4 className='bold'>Cesta</h4>
                        <p>{data.length} asesorias en la cesta</p>
                        <div className='line-cesta'></div>

                        <div className='asesorias'>
                            {data.length > 0 && data.map((asesoria, index) =>
                                <Asesoria 
                                img={asesoria.img} 
                                nombreCurso={asesoria.nombreCurso}
                                nombre={asesoria.nombre} 
                                precio={asesoria.precio} 
                                type={"type2"} 
                                value={asesoria?.califAct===0?0:asesoria?.califAct/asesoria?.reviews?.length}
                                eliminar={() => eliminar(index)} />
                            )}
                            {carga &&
                                <div className='loaderCes'>
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
                            {(data.length === 0 && !carga) &&
                                <div className='loaderCes'>
                                    <Blocks
                                        height="80"
                                        width="80"
                                        color="green"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        visible={true}
                                    />
                                    <h6>Vacio</h6>
                                </div>
                            }
                        </div>

                    </div>
                    <div className='cesta-precio'>
                        <div className='cesta-precio-container'>
                            <h6>Total</h6>
                            <h4>{total} MX$</h4>
                            <Boton block={text==="Comprando"?" block":""} text={text} onClick={() => comprar()} />
                        </div>
                    </div>

                </div>
                <Recomendaciones text={"También podría gustarte "} />
            </div>
            <Footer />
        </div>
    )
}