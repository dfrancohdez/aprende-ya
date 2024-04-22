import 
import {NavBar,Container}from "react-bootstrap"
export const NavBar=()=>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="aprendeYa"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#login">Log in</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={} alt=""></img></a>
                <a href="#"><img src={} alt=""></img></a>
                <a href="#"><img src={} alt=""></img></a>
            </div>
            <button className="" onClick={()=>console.log('boton')}><span>Let's conect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}