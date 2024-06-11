import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { SimpleButton } from '../../components/simpleButton/simpleButton'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { useState } from 'react'
import './_profileScreen.scss'
import accountIcon from '../../assets/img/account-profile.svg'
import coursesIcon from '../../assets/img/cursos.svg'

function ProfileScreen() {
    const [sidebar, toggleSideBar] = useState(false)
    const [name, setName] = useState('Nombre Apellido')

    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleLinkClick = (event) => {
        event.preventDefault(); // Previene la acción por defecto del enlace
        alert('¡Enlace clicado!');
    }

    return (
        <div className='homeScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className='overflowx'>
                <div className='profileScreen-container'>
                    <div className='profileScreen-container-sidenav'>
                        <h6>Configuraciones</h6>
                        <a href='#' className='profileScreen-container-sidenav-contCoursesSelect'><img src={accountIcon} alt='Perfil' className='profileScreen-container-sidenav-iconAccount'></img>Tu Perfil</a>
                        <a href='#' className='profileScreen-container-sidenav-contCourses'><img src={coursesIcon} alt='Cursos Publicados' className='profileScreen-container-sidenav-iconCourses'></img><div className='profileScreen-container-sidenav-contCourses-text'></div>Cursos publicados</a>
                        <a className= 'profileScreen-container-sidenav-delete' href='#' onClick={handleLinkClick}><div className='profileScreen-container-sidenav-delete-text'></div>Eliminar cuenta</a>
                    </div>
                    <div className='profileScreen-container-content'>
                        <h5>Tu Perfil</h5>
                        <hr className='profileScreen-container-content-line'></hr>
                        <h6>Nombre</h6>
                        <div className='profileScreen-container-content-text'>El nombre asociado a esta cuenta.</div>
                        <input type='text' className='profileScreen-container-content-unlocked' value={name} onChange={handleNameChange}></input>
                        <h6>Correo</h6>
                        <div className='profileScreen-container-content-text'>El correo asociado a esta cuenta.</div>
                        <input type='text' className='profileScreen-container-content-locked' value="example@email.com"></input>
                        <div className='profileScreen-container-content-button'><SimpleButton text='Guardar cambios' style='bold'/></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )


}
export default ProfileScreen;