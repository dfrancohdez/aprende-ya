import React, { useState } from 'react'
import portada from '../../assets/img/portada.jpg'

import './_asesoriaCurso.scss'

import { Blocks } from 'react-loader-spinner'
import { BotonCurso } from '../../components/botonCurso/BotonCurso';
import { BotonCorazon } from '../botonCorazon/BotonCorazon';



import { auth, db, storage } from "../../components/auth/firebase";
import { addDoc, setDoc,updateDoc, doc, collection,getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AsesoriaCurso = ({ precio, img,fijar,path}) => {
    const [cargando,setImg]=useState(true);
    const [text,setText]=useState("Añadir a la cesta" )
    ///////////////////////Base de datos cesta
    const addCesta = async () => {
        setText("Añadiendo")
        try {
            let cesta=[]
            const user = auth.currentUser;
            console.log(user.uid);

            if (user) {
                //setButtonText('Publicando')
                const userDataSnapshot=await getDoc(doc(db, "Users", user.uid));
                const userData=userDataSnapshot.data()
                if(userData.cesta)
                cesta=userData.cesta
                console.log(path)
                cesta.push(path)
                await updateDoc(doc(db, "Users", user.uid), {
                    cesta:cesta
                });
                
                /*for (const seccion of secciones) {
                    for (const clase of seccion) {
                        await setDoc(doc(db, "Asesorias", user.uid, "Cursos", nombreCurso, "Secciones", seccion,"Clases",clase), {
                            nombre:clase.value,
                            material:clase.material
                        })
                    }
                }*/
               

            }
            setText("Añadir a la cesta")
            
            //console.log("User Registered Successfully!!");
            
            toast.success("Añadido exitosamente", {
                position: "bottom-center",
            });
            /*
            handleButton("/home")
            setButtonText("Publicar")*/
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
        //setButtonText('Publicar')
    };



    ////////////////////////////////////////////////////////////////////////////////
    return (
        
        <div className='asesoria2'>
           
            <div className={fijar?'fijar2':""}>
                <div className='centrar-loader'>
                    <img onLoad={()=>setImg(false)} src={!img ? portada:img}/>
                    {cargando&&<div className='loader-img2'><Blocks
                        height="80"
                        width="80"
                        color="green"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        visible={true}
                    /></div>}
                </div>
            </div>
            <h6 className='bold'>{precio} MXN$</h6>
            <div className='container-botones'>
                <div className='bot-1'>
                    <BotonCurso 
                        type="button" 
                        style="bold" 
                        block={text==="Añadiendo"?" blockCu":""}
                        text={text}
                        page="/#"
                        handleButton={()=>addCesta()}
                    />
                </div>
                <div className='bot-2'>
                    <BotonCorazon 
                        style="primary" 
                        page="/#" 
                    />
                </div>
                
            </div>
            
        </div>
    )
}
export default AsesoriaCurso