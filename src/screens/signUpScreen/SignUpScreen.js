import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../components/auth/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { FormSignup } from "../../components/auth/FormSignup"
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/NavBar";
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");



  const [validCorreo, setValidCorreo] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  const [validNombre, setValidNombre] = useState(true)
  const validar = () => {
    var validEmailEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var validPasswordEx = /.{6,}/;
    var validNombreEx = /^[A-Za-z]{5,}$/;
    let aux=true
    if (validEmailEx.test(email)) {
      setValidCorreo(true)
    } else {
      setValidCorreo(false)
      aux=false
    }
    if (validPasswordEx.test(password)) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
      aux=false
    }

    if (validNombreEx.test(fname)) {
      setValidNombre(true)
    } else {
      setValidNombre(false)
      aux=false
    }
    return aux;

  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(validar())
    if (validar()) {
      console.log("iniciando sesion")
      try {
        setButtonText('Creando')
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstName: fname,
            lastName: lname,
            photo: ""
          });
        }
        console.log("User Registered Successfully!!");
        toast.success("Usuario registrado exitosamente", {
          position: "top-center",
        });
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
          position: "bottom-center",
        });
      }
      setButtonText('Crear cuenta')
    }
  };
  const [buttonText, setButtonText] = useState('Crear cuenta')
  const onFormUpdate = (event) => {
    const { name, value, type, checked } = event.target
    /*setFormDetail(prev => {
        return {
            ...prev,
            [name]: value

        }
    })*/
    console.log(value)
    if (name === "email") {
      setValidCorreo(true)
      setEmail(value);
    }

    if (name === "password") {
      setValidPassword(true)
      setPassword(value);
    }
    /*
  if (name === "lastName"){
    setLname(value);
  }*/

    if (name === "firstName") {
      setValidNombre(true)
      setFname(value);
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
      <FormSignup
        validCorreo={validCorreo}
        validPassword={validPassword}
        validNombre={validNombre}
        handleSubmit={handleSubmit}
        email={email}
        password={password}

        firstName={fname}
        onFormUpdate={onFormUpdate}
        buttonText={buttonText} />
      <Footer />
    </div>
  );
}
export default SignUp;