import { React, useState, useEffect } from 'react'
import logo from '../../../logo.png'
// import navIcon1 from '../../assets/img/nav-icon1.svg'
// import navIcon2 from '../../assets/img/nav-icon2.svg'
// import navIcon3 from '../../assets/img/nav-icon3.svg'
import profile from '../../../assets/img/profile.svg'
import bell from '../../../assets/img/bell.svg'
import cart from '../../../assets/img/cart.svg'
import message from '../../../assets/img/mensaje.svg'
import { Boton } from "../../boton/Boton"
import { FaBars } from "react-icons/fa"
import './_sidebar.scss'

export const Sidebar = (props) => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    useEffect(() => {
        // Applying on mount
        if (props.sidebar)
            document.body.style.overflow = "hidden";
        // Applying on unmount    
        return () => {
            document.body.style.overflow = "visible";
        }
    }, [props.sidebar])

    return (
        <div className={props.sidebar ? 'sidebar__navbar open' : 'sidebar__navbar'}>
            <ul>
                <li>
                    <a href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><h6>Inicio</h6></a>
                </li>
                <li>
                    <a href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><h6>Sobre Nosotros</h6></a>
                </li>
                <li>
                    <a href="/login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}><h6>FAQ</h6></a>
                </li>
                {props.type1 &&<li>
                     <a href="/login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}><h6>Publicar</h6></a>
                </li>}
                {props.type2 && <li>
                    <a href="/login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}><h6>Iniciar sesión</h6></a>
                </li>}
                {props.type1 && 
                
                <li>
                    <a href="#"><img src={bell} alt=""></img><h6 className='regular'>Notificaciones</h6></a>
                    
                </li>}
                {props.type1 && 
                <li>  
                    <a href="#"><img src={profile} alt=""></img><h6 className='regular'>Perfil</h6></a>
                    
                </li>}
                {props.type1 && 
                <li>
                    
                    <a href="#"><img src={message} alt=""></img><h6 className='regular'>Mensajes</h6></a>
                    
                </li>}
                {props.type1 && 
                <li>
                    
                    <a href="#"><img src={cart} alt=""></img><h6 className='regular'>Carrito</h6></a>
                    
                </li>}

                {props.type1 &&
                <li>
                     <Boton text="Mis cursos" style="bold" />
                </li>}
                {props.type2 &&<li>
                     <Boton text="Crear cuenta" style="bold" page="/signup"/>
                </li>}

            </ul>
        </div>
    )
}

