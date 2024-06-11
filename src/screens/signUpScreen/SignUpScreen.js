import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../components/auth/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import {FormSignup} from "../../components/auth/FormSignup"
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/NavBar";
import {Sidebar} from '../../components/navBar/sidebar/Sidebar'
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          photo:""
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
  };
  const [buttonText, setButtonText] = useState('Crear cuenta')
  const onFormUpdate = (event) => {
      const {name,value,type,checked}=event.target
      /*setFormDetail(prev => {
          return {
              ...prev,
              [name]: value

          }
      })*/
      console.log(value)
      if(name==="email") 
          setEmail (value);
      if(name==="password") 
          setPassword (value);
      if(name==="lastName") 
        setLname (value);
      if(name==="firstName") 
        setFname (value);
  }

  const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }

  return (
      <div>
        <NavBar handleToggleSidebar={handleToggleSidebar}/>
        <Sidebar sidebar={sidebar} type1={false} type2={true} />
        <div className={sidebar ? "blur" : ""}></div>
          <FormSignup
          handleSubmit={handleSubmit} 
          email={email} 
          password={password} 
          lastName={lname}
          firstName={fname}
          onFormUpdate={onFormUpdate} 
          buttonText={buttonText}/>
          <Footer />
      </div>
  );
}
export default SignUp;