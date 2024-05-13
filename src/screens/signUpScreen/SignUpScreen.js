import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../components/auth/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import {FormSignup} from "../../components/auth/FormSignup"
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/NavBar";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  const [buttonText, setButtonText] = useState('Send')
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
  return (
      <div>
        <NavBar />
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