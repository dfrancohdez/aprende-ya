import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import './_crearAsesoria.scss'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { useState } from 'react'
import { Input } from '../../components/inputs/Input'
import { Boton } from '../../components/boton/Boton'
import { toast } from "react-toastify";

import { auth, db } from "../../components/auth/firebase";
import { addDoc, setDoc, doc, collection } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
function CrearAsesoriaScreen() {
    const navigate = useNavigate()
    const handleButton = (page) => {
        navigate(page)
    }
    const [sidebar, toggleSideBar] = useState(false)
    const [buttonText, setButtonText] = useState('Publicar')
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;
            console.log(user);
            const Aprender = aprender.map(prev => prev.value)
            const Requisitos = requisitos.map(prev => prev.value)
            const ContenidoCurso = contenidoCurso.map(prev => prev.value)
            if (user) {
                setButtonText('Publicando')
                await setDoc(doc(db, "Asesorias", user.uid, "Cursos", nombreCurso), {
                    nombreCurso: nombreCurso,
                    resumen: resumen,
                    nombre: nombre,
                    descripcion: descripcion,
                    aprender: Aprender,
                    requisitos: Requisitos,
                    contenidoCurso: ContenidoCurso,
                    precio: precio

                });
                for (const seccion of secciones)
                console.log(seccion)
                for (const seccion of secciones){
                    
                    await setDoc(doc(db, "Asesorias", user.uid, "Cursos", nombreCurso, "Secciones", seccion.value), {
                        nombre: seccion.value,
                        clases: seccion.clases
                    }
                    

                    )
                }
                /*for (const seccion of secciones) {
                    for (const clase of seccion) {
                        await setDoc(doc(db, "Asesorias", user.uid, "Cursos", nombreCurso, "Secciones", seccion,"Clases",clase), {
                            nombre:clase.value,
                            material:clase.material
                        })
                    }
                }*/

            }
            console.log("User Registered Successfully!!");
            toast.success("Publicado exitosamente", {
                position: "bottom-center",
            });
            handleButton("/home")
            setButtonText("Publicar")
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
        setButtonText('Publicar')
    };




    const [aprender, setAprender] = useState([{ i: 0, value: "", name: "0-aprender" }])
    const [requisitos, setRequisitos] = useState([{ i: 0, value: "", name: "0-requisitos" }])
    const [contenidoCurso, setContenidoCurso] = useState([{ i: 0, value: "", name: "0-contenidoCurso" }])
    const [secciones, setSecciones] = useState([{ i: 0, value: "", name: "0-section", clases: [{ value: "", material: [{ ruta: "", description: "" }] }] }])


    const [nombreCurso, SetNombreCurso] = useState("")
    const [resumen, SetResumen] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")




    const handleMas = () => {
        const aux = { i: aprender.length, value: "", name: aprender.length + "-aprender" }
        setAprender(prev => [...prev, aux])
    }
    const handleMasRequisitos = () => {
        const aux = { i: requisitos.length, value: "", name: requisitos.length + "-requisitos" }
        setRequisitos(prev => [...prev, aux])
    }
    const handleMasContenido = () => {
        const aux = { i: contenidoCurso.length, value: "", name: contenidoCurso.length + "-contenidoCurso" }
        setContenidoCurso(prev => [...prev, aux])
    }
    const handleMasSeccion = () => {
        toast.success("Sección agregada", {
            position: "bottom-center",
        })
        const aux = { i: secciones.length, value: "", name: secciones.length + "-section", clases: [{ value: "", material: [{ ruta: "", description: "" }] }] }
        setSecciones(prev => [...prev, aux])
    }
    const handleMasClase = (i) => {
        const newItem = { value: "", material: [{ ruta: "", description: "" }] }
        const aux = [...secciones]
        const aux1 = aux[i].clases
        //setSecciones(prev => [...{...prev[i],clases:[...prev[i].clases,aux]}])
        aux1.push(newItem)
        console.log(aux1)
        setSecciones(aux)
    }
    const handleMasMaterial = (i, j, z) => {

        console.log(i + " asesoria")
        console.log(j + " clase")
        console.log(z + "material")
        const newItem = { ruta: "", description: "" }
        const aux = [...secciones]
        const aux1 = aux[i].clases
        const aux2 = aux1[j].material
        //setSecciones(prev => [...{...prev[i],clases:[...prev[i].clases,aux]}])
        console.log(aux1)
        aux2.push(newItem)

        setSecciones(aux)
    }



    const handleMenos = (i) => {
        const aux = [...aprender]
        console.log(i)
        console.log(aux)
        aux.splice(i, 1)
        console.log(aux)
        setAprender(aux)
    }
    const handleMenosRquisitos = (i) => {
        const aux = [...requisitos]
        aux.splice(i, 1)
        setRequisitos(aux)
    }
    const handleMenosContenidoCurso = (i) => {
        const aux = [...contenidoCurso]
        aux.splice(i, 1)
        setContenidoCurso(aux)
    }
    const handleMenosSeccion = (i) => {
        const aux = [...secciones]
        aux.splice(i, 1)
        setSecciones(aux)
    }

    const handleMenosClase = (i, j) => {
        console.log(i)
        console.log(j)
        const aux = [...secciones]
        const aux1 = aux[i].clases
        aux1.splice(j, 1)
        aux[i].clases = aux1
        setSecciones(aux)

    }
    const handleMenosMaterial = (i, j, z) => {
        console.log(i)
        console.log(j)
        const aux = [...secciones]
        const aux1 = aux[i].clases
        const aux2 = aux1[j].material
        aux2.splice(z, 1)
        aux[i].clases[j].material = aux2
        setSecciones(aux)
    }

    const onFormUpdate = (e) => {
        const { name, value } = e.target
        let aux;
        if (name.endsWith("aprender")) {
            aprender.map(dato => {
                if (name === dato.name) {
                    aux = dato.i
                }
            }

            )
            let array = [...aprender]
            array[aux] = { ...array[aux], value: value }
            setAprender(array)
        } else if (name.endsWith("requisitos")) {
            requisitos.map(dato => {
                if (name === dato.name) {
                    aux = dato.i
                }
            }

            )
            let array = [...requisitos]
            array[aux] = { ...array[aux], value: value }
            setRequisitos(array)
        }



        else if (name.endsWith("section")) {
            const subString = name.split("-")

            if (subString.length >= 6) {
                if (subString[1] !== "descripcion") {
                    const aux1 = [...secciones]
                    aux1[subString[4]].clases[subString[2]].material[subString[0]].ruta = value
                    //setSecciones(prev => [...{...prev[i],clases:[...prev[i].clases,aux]}])
                    setSecciones(aux1)
                } else {
                    const aux1 = [...secciones]
                    aux1[subString[4]].clases[subString[2]].material[subString[0]].description = value
                    //setSecciones(prev => [...{...prev[i],clases:[...prev[i].clases,aux]}])
                    setSecciones(aux1)
                }
            }

            else if (subString.length === 4) {
                const aux1 = [...secciones]
                aux1[subString[2]].clases[subString[0]].value = value
                //setSecciones(prev => [...{...prev[i],clases:[...prev[i].clases,aux]}])
                setSecciones(aux1)

            } else {

                const aux1 = [...secciones]
                aux1[subString[0]].value = value
                console.log(aux1)
                //setSecciones(prev => [...{...prev[i],clases:[...prev[i].clases,aux]}])
                setSecciones(aux1)

            }
        }






        else if (name.endsWith("contenidoCurso")) {
            contenidoCurso.map(dato => {
                if (name === dato.name) {
                    aux = dato.i
                }
            }

            )
            let array = [...contenidoCurso]
            array[aux] = { ...array[aux], value: value }
            setContenidoCurso(array)
        }




        else if (name.endsWith("nombreCurso")) {
            SetNombreCurso(value)
        }
        else if (name.endsWith("resumen")) {
            SetResumen(value)
        }
        else if (name.endsWith("nombre")) {
            setNombre(value)
        }
        else if (name.endsWith("descripcion")) {

            setDescripcion(value)
        }
        else if (name.endsWith("precio")) {

            setPrecio(value)
        }




    }
    return (
        <div className='crearAsesoria'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={false} type2={true} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className='overflowx'>
                <div className='crearAsesoria-container'>
                    <form className='crearAsesoria-form' onSubmit={handleSubmit}>

                        <Input onFormUpdate={onFormUpdate} value={nombreCurso} name="nombreCurso" id="1" lable="Nombre del curso" class="input" placeholder="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" />
                        <Input onFormUpdate={onFormUpdate} value={resumen} name="resumen" id="2" class="textarea" lable="Resumen" placeholder="Desde 0, y con 16 proyectos REALES. 160 ejercicios de código. Machine Learning, Data Science, Django, IGU, Juegos y más!" />
                        <Input onFormUpdate={onFormUpdate} value={nombre} name="nombre" id="3" lable="Nombre" class="input" placeholder="Juan Pablo De la torre Valdez" />
                        <Input onFormUpdate={onFormUpdate} value={descripcion} name="descripcion" id="4" class="textarea" lable="Descripción" placeholder="Python es uno de los lenguajes más buscados del mundo. Por su sencillez, su ductilidad y su flexibilidad, se ha transformado en el lenguaje favorito. Sus instrucciones son lo más cercanas posible al lenguaje humano, lo cual hace que sea más fácil de aprender, y esto hace que sea ideal para personas que se están iniciando en el mundo de la programación." />

                        {aprender.map((dato, index) => (
                            <Input value={dato.value} onFormUpdate={onFormUpdate} handleMenos={() => handleMenos(index)} handleMas={handleMas} name={dato.i + "-aprender"} id="5" typelable={dato.i === 0 ? "mas" : ""} class="elemento" lable={dato.i === 0 ? "Lo que aprenderás" : ""} placeholder="Dominarás la programación profesional en Python" />
                        ))


                        }
                        {requisitos.map((dato, index) => (
                            <Input onFormUpdate={onFormUpdate} handleMenos={() => handleMenosRquisitos(index)} handleMas={handleMasRequisitos} value={dato.value} name={dato.i + "-requisitos"} id="6" typelable={dato.i === 0 ? "mas" : ""} class="elemento" lable={dato.i === 0 ? "Requisitos" : ""} placeholder="Acceso a un ordenador con conexión a internet" />
                        ))}
                        {contenidoCurso.map((dato, index) => (
                            <Input onFormUpdate={onFormUpdate} handleMenos={() => handleMenosContenidoCurso(index)} handleMas={handleMasContenido} value={dato.value} name={dato.i + "-contenidoCurso"} id="6" typelable={dato.i === 0 ? "mas" : ""} class="elemento" lable={dato.i === 0 ? "Contenido del curso" : ""} placeholder="Dominarás la programación profesional en Python" />
                        ))}


                        {secciones.map((dato, index) => {
                            return (
                                <Input
                                    onFormUpdate={onFormUpdate}
                                    handleMas={handleMasSeccion}
                                    handleMenos={() => handleMenosSeccion(index)}
                                    handleMasClase={() => handleMasClase(dato.i)}
                                    handleMenosClase={handleMenosClase}
                                    handleMasMaterial={handleMasMaterial}
                                    handleMenosMaterial={handleMenosMaterial}
                                    clases={dato.clases}
                                    typelable="mas"
                                    class="seccion"
                                    lable={dato.value}
                                    placeholder="Programa un creador de nombres"
                                    nameSection={dato.i + "-section"}
                                    //valor de nombre seccion
                                    value={dato.value}
                                    i={dato.i}


                                />
                            )
                        })}




                        <Input onFormUpdate={onFormUpdate} value={precio} name="precio" class="input" lable="Precio" placeholder="100" />
                        <div className='boton'>
                            <Boton block={buttonText === "Publicando" ? "block" : ""} text={buttonText} type="submit" />
                        </div>




                    </form>


                </div>

            </div>
            <Footer />
        </div>

    )


}
export default CrearAsesoriaScreen;