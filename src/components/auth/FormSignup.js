import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import contactImg from "../../assets/img/contact-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Boton } from "../boton/Boton";
import { Input } from "../inputs/Input";


export const FormSignup = (props) => {
    /*//handleSubmit,formDetails,onFormUpdate,buttonText
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setButtonText("Sending...")
        let response= await fetch("http://localhost:5000/contact",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json;charset=utf-8"
            },
            body:JSON.stringify(formDetails)
        })
        setButtonText("Send")
        let result=response.json()
        setFormDetail(initialDetails)
        if(result.code===200){
            setStatus({success:true,message:'Message sent successfully'})
        }else{
            setStatus({seccess:false,message:'Something went wrong, please try again later'})
        }
    }*/

    return (
        <section className="login-section">
            <div>
                <div className="login-container">

                    <div className="login-form">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn form-items" : "form-items"}>
                                    <h2>Iniciar Sesión</h2>
                                    <form onSubmit={props.handleSubmit}>
                                        <div >
                                            <Input error={props.validNombre?"":"Nombre no valido"} lable="Ingresar nombre" class="input" name="firstName" type="text" value={props.firstName} placeholder="Ricardo Lopez" onFormUpdate={props.onFormUpdate} />
                                        </div>
                                        <div >
                                            <Input error={props.validCorreo?"":"Correo no valido"}  lable="Ingresar correo" class="input" name="email" type="email" value={props.email} placeholder="correo@gmail.com" onFormUpdate={props.onFormUpdate} />
                                        </div>
                                        <div >
                                            <Input error={props.validPassword?"":"Contraseña no valida"}  lable="Ingresar contraseña" class="input" name="password" type="password" value={props.password} placeholder="Contraseña" onFormUpdate={props.onFormUpdate} />
                                        </div>

                                        <div className="form-boton">       
                                            <Boton block={props.buttonText==="Creando"?"block":""}text={props.buttonText} type="submit"/>
                                        </div>


                                        {/*
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>*/
                                        }
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </div>
                    <div className="login-img">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                        <p className="su-login">Ya tienes una cuenta?</p>
                        <Boton text="Iniciar sesión" page="/login"/>
                    </div>
                </div>
            </div>
        </section>
    )
}