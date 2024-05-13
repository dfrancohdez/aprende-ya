import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../components/auth/firebase";
import { toast } from "react-toastify";
import { Footer } from "../../components/footer/Footer";
import {FormLogIn} from "../../components/auth/FormLogIn"
import { NavBar } from "../../components/navBar/NavBar";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setButtonText('Sending')
            console.log(email)
            console.log(password)
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in Successfully");
            window.location.href = "/home";
            toast.success("User logged in Successfully", {
                position: "top-center",
            });
            setButtonText('Send')
        } catch (error) {
            console.log(error.message);

            toast.error(error.message, {
                position: "bottom-center",
            });
        }
        setButtonText('Send')
    };
    /*const initialDetails = {
        email: '',
        password:''

    }
    const [formDetails, setFormDetail] = useState(initialDetails)*/
    const [buttonText, setButtonText] = useState('Send')
    const onFormUpdate = (event) => {
        const {name,value,type,checked}=event.target
        /*setFormDetail(prev => {
            return {
                ...prev,
                [name]: value

            }
        })*/
        console.log(email)
        if(name==="email") 
            setEmail (value);
        if(name==="password") 
            setPassword (value);
    }
    return (
        <div>
            <NavBar />
            <FormLogIn
            handleSubmit={handleSubmit} 
            email={email} 
            password={password} 
            onFormUpdate={onFormUpdate} 
            buttonText={buttonText}/>
            <Footer />
        </div>
    );
}
export default Login;