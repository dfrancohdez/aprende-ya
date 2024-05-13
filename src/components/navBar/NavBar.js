"use client"
import {useEffect, useState}from "react"
import {Navbar,Container,Nav}from "react-bootstrap"
import logo from '../../logo.png'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import './_navbar.scss'
export const NavBar=()=>{
    const [activeLink,setActiveLink]=useState("home");
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll)
        return () => window.removeEventListener("scroll",onScroll)//when the component is removed
    },[])
    const onUpdateActiveLink=(value)=>{
      setActiveLink(value)
    }
    //className="bg-body-tertiary"
    return(
        <Navbar expand="lg"  className={scrolled?"scrolled":""} >
      <Container>
        <Navbar.Brand href="#home">
            <img className="home-icon" src={logo} alt="aprendeYa"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink==='about'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="/login"className={activeLink==='login'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('login')}>Log in</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt=""></img></a>
                <a href="#"><img src={navIcon2} alt=""></img></a>
                <a href="#"><img src={navIcon3} alt=""></img></a>
            </div>
            <button className="" onClick={()=>console.log('boton')}><span>Let's conect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}