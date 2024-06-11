import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../components/auth/firebase";
import { toast } from "react-toastify";
import { Footer } from "../../components/footer/Footer";
import { FormLogIn } from "../../components/auth/FormLogIn"
import { NavBar } from "../../components/navBar/NavBar";
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [validCorreo, setValidCorreo] = useState(true)
    const [validPassword, setValidPassword] = useState(true)

    const validar = () => {
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        var validPassword =  /.{6,}/;
        if (validEmail.test(email)) {
            setValidCorreo(true)
            if(validPassword.test(password)){
                setValidPassword(true)
                return true;
            }else{
                setValidPassword(false)
                return false;
            }
            
        } else {
            setValidCorreo(false)
            if(validPassword.test(password)){
                setValidPassword(true)
            }else{
                setValidPassword(false)
            }
            return false;
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(validar())
        if (validar()) {
            console.log("iniciando sesion")
            try {
                setButtonText('Iniciando')
                console.log(email)
                console.log(password)
                await signInWithEmailAndPassword(auth, email, password);
                console.log("User logged in Successfully");
                window.location.href = "/home";
                toast.success("Credenciales correctas", {
                    position: "top-center",
                });
                setButtonText('Iniciar sesión')
            } catch (error) {
                console.log(error.message);

                toast.error(error.message, {
                    position: "bottom-center",
                });
            }
            setButtonText('Iniciar sesión')
        }
    };
    /*const initialDetails = {
        email: '',
        password:''

    }
    const [formDetails, setFormDetail] = useState(initialDetails)*/
    const [buttonText, setButtonText] = useState('Iniciar sesión')
    const onFormUpdate = (event) => {
        
        
        const { name, value, type, checked } = event.target
        /*setFormDetail(prev => {
            return {
                ...prev,
                [name]: value

            }
        })*/
        console.log(email)
        console.log(password)
        if (name === "email"){
            setValidCorreo(true)
            setEmail(value);
        }
            
        if (name === "password"){
            setValidPassword(true)
            setPassword(value);
        }
            
    }




    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }



    return (
        <div>
            <NavBar handleToggleSidebar={handleToggleSidebar} />


            <Sidebar sidebar={sidebar} type1={false} type2={true} />
            <div className={sidebar ? "blur" : ""}></div>
            <FormLogIn
                validCorreo={validCorreo}
                validPassword={validPassword}
                handleSubmit={handleSubmit}
                email={email}
                password={password}
                onFormUpdate={onFormUpdate}
                buttonText={buttonText} />
            <Footer />
        </div>
    );
}
export default Login;