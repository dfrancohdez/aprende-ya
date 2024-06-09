import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const FormCreate = (props) => {
    const [cont, setCont] = useState(0)
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
    const cuenta = () => {
        setCont(prev => prev + 1)
    }

    return (
        <section className="contact create_contact_form" id="connect">
            <Container>
                <Row className="align-items-center">

                    <Col size={12} md={6}>
                        <h2>Sign Up</h2>
                        <form>
                            <div className="question">
                                <label>First Name</label>
                                <input autocomplete="off" aria-autocomplete="none" name="firstName" type="text" value={props.firstName} placeholder="First Name" onChange={props.onFormUpdate} />
                            </div>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input autocomplete="off" aria-autocomplete="none" name="lastName" type="text" value={props.lasttName} placeholder="Last Name" onChange={props.onFormUpdate} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input autocomplete="off" aria-autocomplete="none" name="email" type="email" value={props.email} placeholder="Email Address" onChange={props.onFormUpdate} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input autocomplete="off" aria-autocomplete="none" name="password" type="password" value={props.password} placeholder="Password" onChange={props.onFormUpdate} />
                                </Col>
                                {
                                    [...new Array(cont)].map(() => (
                                        <Col size={12} sm={6} className="px-1">
                                            <input autocomplete="off" aria-autocomplete="none" name="password" type="password" value={props.password} placeholder="Password" onChange={props.onFormUpdate} />
                                        </Col>
                                    ))

                                }

                                <Col size={12} className="px-1">
                                    <Row className="align-items">
                                        <Col>
                                            <button type="submit"><span>{props.buttonText}</span></button>
                                        </Col>

                                        <Col>
                                            <p className="su-login">
                                                Already registered <a href="/login"><span>Login</span></a>
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </form>
                        <Col>
                            <button onClick={cuenta}><span>Aumentar</span></button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FormCreate