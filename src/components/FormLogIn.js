import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import contactImg from "../assets/img/contact-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const FormLogIn = (props) => {
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
    <section className="contact contact-form" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Log In</h2>
                  <form onSubmit={props.handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input autocomplete="off" aria-autocomplete="none" name="email" type="email" value={props.email} placeholder="Email Address" onChange={props.onFormUpdate} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input autocomplete="off" aria-autocomplete="none" name="password" type="password" value={props.password} placeholder="Password" onChange={props.onFormUpdate} />
                      </Col>
                      <Col size={12} className="px-1">
                        <Row className="align-items">
                          <Col>
                            <button type="submit"><span>{props.buttonText}</span></button>
                          </Col>
                          <Col>
                            <p className="su-login">
                              New user <a href="/signup"><span>Register Here</span></a>
                            </p>
                          </Col>
                        </Row>


                      </Col>
                      {/*
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>*/
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}