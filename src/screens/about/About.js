import React, { useState } from "react"
import { Footer } from "../../components/footer/Footer"
import { Sidebar } from "../../components/navBar/sidebar/Sidebar"
import portada from '../../assets/img/portada.jpg'
import { NavBar } from "../../components/navBar/NavBar"
import "./_about.scss"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

const About = () => {
    const [sidebar, toggleSideBar] = useState(false)
    const [type1, setType1] = useState(false); //No inicio sesion
    const [type2, setType2] = useState(true); //Si inicio sesion
    const navigate = useNavigate();

    useEffect(() => {
        const userID = getCookie('sesion');
        if (userID) {
            setType1(true);
            setType2(false);
        }
    }, []);

    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }
    return (
        <div className="about">
            <NavBar type1={type1} type2={type2} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={type1} type2={type2} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className="about-container">
                <div className="text-container-about">
                    <h2>Justificación</h2>
                    <p>
                        La educación es un requisito indispensable para alcanzar el desarrollo sostenible de las naciones y mejorar la calidad de vida de la población (Sistema Interactivo de Consulta de Estadística Educativa, 2020), modelador de sociedades orientadas a la inclusión, progreso, bienestar socioeconómico, integración cultural y de movilidad social. En educación superior en México, según cifras del Sistema Interactivo de Consulta de Estadística Educativa (2020) de la Secretaría de Educación Pública, el promedio de abandono escolar en los últimos diez años es del 7.3 %, lo cual lo convierte en un problema de importancia debido a su impacto educativo, social y económico.
                    </p>
                    <p>
                        En la actualidad existen varias plataformas que tienen como objetivo el fomento de la educación y evitar el rezago escolar, pero solo ofrecen recursos educativos y no tienen un enfoque más específico a las regiones o comunidades, por lo que el objetivo de este proyecto es mejorar la forma en la que se imparte y distribuye la educación, innovando en el área ya que la aplicación implementará un chatbot potenciado por inteligencia artificial que puede resolver dudas puntuales y guiar a los usuarios en la búsqueda de asesores, además que facilitará el intercambio de habilidades y conocimientos entre usuarios, permitiendo que aquellos con mayor dominio en una materia puedan ayudar a otros que lo necesiten.
                    </p>
                    <h2>Misión</h2>
                    <p>
                    Ofrecer una plataforma educativa interactiva y accesible que aborde las necesidades específicas de aprendizaje de las comunidades y regiones de México, reduciendo la tasa de abandono escolar y promoviendo la inclusión y el progreso socioeconómico a través de tecnologías avanzadas como chatbots de inteligencia artificial y redes colaborativas de usuarios.
                    </p>
                    <h2>Visión</h2>
                    <p>
                    Ser la aplicación web educativa líder en México, reconocida por su capacidad para personalizar la experiencia educativa, fomentar la retención escolar y empoderar a los estudiantes a través del intercambio colaborativo de conocimientos, contribuyendo así al desarrollo sostenible y al bienestar socioeconómico del país.
                    </p>
                    <h2>Funciones principales</h2>
                        <h5>Intercambio colaborativo:</h5>
                        <ul>
                            <li>Los usuarios pueden ofrecer y recibir asesorías en diversas materias.</li>
                            <li>Se facilita la interacción entre usuarios para un aprendizaje más efectivo.</li>
                            <li>Un sistema de reseñas y calificaciones ayuda a mantener la calidad del servicio y proporciona retroalimentación a los asesores.</li>

                            <li>Mensajería privada permite a los usuarios comunicarse confidencialmente para discutir detalles de las asesorías, hacer preguntas o coordinar horarios.</li>
                        </ul>

                        <h5>Tecnología inteligente:</h5>
                        <ul>
                            <li>Un chatbot potenciado por IA puede resolver dudas puntuales y guiar a los usuarios en la búsqueda de asesores.</li>
                            <li>El chatbot facilita la navegación en la plataforma.</li>
                        </ul>

                        <h5>Accesibilidad:</h5>
                        <ul>
                            <li>La plataforma es gratuita y accesible a través de internet, esto permite que cualquier persona pueda beneficiarse de ella, independientemente de su ubicación o condición socioeconómica.</li>
                        </ul>

                        <h5>Personalización:</h5>
                        <ul>
                            <li>Ofrecer a los usuarios la posibilidad de personalizar su perfil y elegir sus preferencias de aprendizaje.</li>
                            <li>Recomendar asesorías y recursos educativos en función de los intereses y necesidades individuales de cada usuario.</li>
                        </ul>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About