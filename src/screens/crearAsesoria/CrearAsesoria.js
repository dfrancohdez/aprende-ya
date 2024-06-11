import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import './_crearAsesoria.scss'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { useState } from 'react'
import { Input } from '../../components/inputs/Input'
import { Boton } from '../../components/boton/Boton'

function CrearAsesoriaScreen() {
    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }

    const [aprender, setAprender] = useState([{ i: 0, value: "", name: "0-aprender" }])
    const [requisitos, setRequisitos] = useState([{ i: 0, value: "", name: "0-requisitos" }])
    const [contenidoCurso, setContenidoCurso] = useState([{ i: 0, value: "", name: "0-contenidoCurso" }])

    const [nombreCurso, SetNombreCurso] = useState("")
    const [resumen, SetResumen] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [nombre, setNombre] = useState("")




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

    const handleMenos = () => {
        setAprender(prev => prev.slice(0, -1))
    }
    const handleMenosRquisitos = () => {
        setRequisitos(prev => prev.slice(0, -1))
    }
    const handleMenosContenidoCurso = () => {
        setContenidoCurso(prev => prev.slice(0, -1))
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
        } else if (name.endsWith("requisitos")){
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
        else if (name.endsWith("contenidoCurso")){
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




        else if (name.endsWith("nombreCurso")){
            SetNombreCurso(value)
        }
        else if (name.endsWith("resumen")){
            SetResumen(value)
        }
        else if (name.endsWith("nombre")){
            setNombre(value)
        }
        else if (name.endsWith("descripcion")){

            setDescripcion(value)
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
                    <form className='crearAsesoria-form'>

                        <Input  onFormUpdate={onFormUpdate} value={nombreCurso}name="nombreCurso" id="1" label="Nombre del curso" class="input" placeholder="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" />
                        <Input onFormUpdate={onFormUpdate} value={resumen}name="resumen" id="2" class="textarea" label="Resumen" placeholder="Desde 0, y con 16 proyectos REALES. 160 ejercicios de código. Machine Learning, Data Science, Django, IGU, Juegos y más!" />
                        <Input onFormUpdate={onFormUpdate} value={nombre}name="nombre" id="3" label="Nombre" class="input" placeholder="Juan Pablo De la torre Valdez" />
                        <Input onFormUpdate={onFormUpdate} value={descripcion}name="descripcion" id="4" class="textarea" label="Descripción" placeholder="Python es uno de los lenguajes más buscados del mundo. Por su sencillez, su ductilidad y su flexibilidad, se ha transformado en el lenguaje favorito. Sus instrucciones son lo más cercanas posible al lenguaje humano, lo cual hace que sea más fácil de aprender, y esto hace que sea ideal para personas que se están iniciando en el mundo de la programación." />

                        {aprender.map((dato) => (
                            <Input value={dato.value} onFormUpdate={onFormUpdate} handleMenos={handleMenos} handleMas={handleMas} name={dato.i + "-aprender"} id="5" typeLabel={dato.i===0?"mas":""} class="elemento" label={dato.i===0?"Lo que aprenderás":""} placeholder="Dominarás la programación profesional en Python" />
                        ))


                        }
                        {requisitos.map((dato) => (
                            <Input onFormUpdate={onFormUpdate} handleMenos={handleMenosRquisitos} handleMas={handleMasRequisitos} value={dato.value} name={dato.i + "-requisitos"} id="6" typeLabel={dato.i===0?"mas":""} class="elemento" label={dato.i===0?"Requisitos":""}  placeholder="Acceso a un ordenador con conexión a internet" />
                        ))}
                        {contenidoCurso.map((dato) => (
                            <Input onFormUpdate={onFormUpdate} handleMenos={handleMenosContenidoCurso} handleMas={handleMasContenido} value={dato.value} name={dato.i + "-contenidoCurso"} id="6" typeLabel={dato.i===0?"mas":""} class="elemento" label={dato.i===0?"Contenido del curso":""} placeholder="Dominarás la programación profesional en Python" />
                        ))}

                        <Input id="6" typeLabel="mas" class="seccion" label="Nombre de la sección" placeholder="Programa un creador de nombres" />

                        <div className='boton'>
                            <Boton text="Publicar" />
                        </div>




                    </form>


                </div>

            </div>
            <Footer />
        </div>

    )


}
export default CrearAsesoriaScreen;