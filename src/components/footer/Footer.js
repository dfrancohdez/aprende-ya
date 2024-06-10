import { Container, Col, Row } from "react-bootstrap"
import logo from '../../logo.png'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import './_footer.scss'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="">
          <img className="" src={logo} alt="Logo" />
        </div>
        <div>
        <ul>
          <li><a href="">Aprende-ya Business</a></li>
          <li><a href="">Enseña en Aprende-ya</a></li>
          <li><a href="">Consigue la aplicación</a></li>
          <li><a href="">¿Quiénes somos?</a></li>
          <li><a href="">Ponte en contacto con nosotros</a></li>
        </ul>
        <ul>
          <li><a href="">Empleo</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Ayuda y asistencia</a></li>
          <li><a href="">Afiliado</a></li>
          <li><a href="">Inversores</a></li>
        </ul>
        <ul>

          <li><a href="">Condiciones</a></li>
          <li><a href="">Política de privacidad</a></li>
          <li><a href="">Configuración de cookies</a></li>
          <li><a href="">Mapa del sitio</a></li>
          <li><a href="">Declaración de accesibilidad</a></li>

        </ul>
        </div>
      </div>
    </footer>
  )
}