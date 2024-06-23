import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { SimpleButton } from '../../components/simpleButton/simpleButton'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { Accordion } from '../../components/accordion/Accordion'
import './_FAQ.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

function FaqScreen() {
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

    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev)
    }

    return (
        <div className='faqScreen'>
            <NavBar type1={type1} type2={type2} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={type1} type2={type2} />
                <div className={sidebar ? "blur" : ""}></div>
            </div> 
            <div className='overflowx'>
                <div className='faqScreen-container'>
                    <div className='faqScreen-container-content'>
                        <h3>Preguntas frecuentes</h3>
                        <Accordion title={"¿Qué son los cursos en línea?"} content={"Los cursos en línea son programas educativos que se ofrecen a través de internet. Estos cursos permiten a los estudiantes aprender nuevas habilidades, adquirir conocimientos en diversas áreas y obtener certificaciones sin necesidad de asistir a clases presenciales."}/>
                        <Accordion title={"¿Cómo me registro en la plataforma?"} content={"Para registrarte, simplemente visita nuestra página de registro, proporciona tu nombre, dirección de correo electrónico y crea una contraseña."}/>
                        <Accordion title={"¿Cuáles son los costos de los cursos?"} content={"Los costos de los cursos varían dependiendo del programa y la institución que los ofrece. Algunos cursos son gratuitos, mientras que otros requieren el pago de una tarifa. Puedes encontrar información detallada sobre los costos en la página de cada curso."}/>
                        <Accordion title={"¿Se puede obtener una certificación al completar un curso en línea?"} content={"Sí, muchos cursos en línea ofrecen certificaciones al completarlos exitosamente. Estas certificaciones pueden ser útiles para mejorar tu currículum y demostrar tus habilidades a empleadores potenciales."}/>
                        <Accordion title={"¿Qué requisitos técnicos necesito para tomar un curso en línea?"} content={"Para tomar un curso en línea, necesitas una computadora o dispositivo móvil con acceso a internet, un navegador web actualizado y, en algunos casos, software específico que se mencionará en los detalles del curso. Asegúrate de revisar los requisitos técnicos antes de inscribirte."}/>
                        <Accordion title={"¿Puedo interactuar con los instructores y otros estudiantes durante el curso?"} content={"Sí, la mayoría de los cursos en línea ofrecen oportunidades para interactuar con los instructores y otros estudiantes. Esto puede incluir foros de discusión, sesiones de chat en vivo, videoconferencias y más. Estas interacciones pueden enriquecer tu experiencia de aprendizaje y ayudarte a resolver dudas que puedan surgir durante el curso."}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default FaqScreen;
