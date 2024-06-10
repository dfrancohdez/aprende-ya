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
                        <Input id="1" label="Nombre del curso" type="input"text="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" />
                        <Input id="2" type="textarea"label="Resumen" text="Desde 0, y con 16 proyectos REALES. 160 ejercicios de código. Machine Learning, Data Science, Django, IGU, Juegos y más!" />
                        <Input id="3" label="Nombre" type="input"text="Juan Pablo De la torre Valdez" />
                        <Input id="4" type="textarea"label="Descripción" text="Python es uno de los lenguajes más buscados del mundo. Por su sencillez, su ductilidad y su flexibilidad, se ha transformado en el lenguaje favorito. Sus instrucciones son lo más cercanas posible al lenguaje humano, lo cual hace que sea más fácil de aprender, y esto hace que sea ideal para personas que se están iniciando en el mundo de la programación." />
                        <Input id="5" typeLabel="mas" type="elemento"label="Lo que aprenderás" text="Dominarás la programación profesional en Python" />
                        <Input id="6" typeLabel="mas" type="elemento"label="Requisitos" text="Acceso a un ordenador con conexión a internet" />
                        <Input id="6" typeLabel="mas" type="elemento"label="Contenido del curso" text="Dominarás la programación profesional en Python" />


                        <Input id="6" typeLabel="mas" type="seccion"label="Nombre de la sección" text="Programa un creador de nombres" />

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