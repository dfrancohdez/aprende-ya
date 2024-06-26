import React, { useEffect, useState } from "react"
import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import "./_calif.scss"
import Asesoria from "../../components/asesoria/Asesoria"
import { Boton } from "../../components/boton/Boton"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Input } from "../../components/inputs/Input"

import { auth, db, storage } from "../../components/auth/firebase";
import { addDoc, setDoc, doc, collection, updateDoc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Calif = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { curso } = location.state || {};
    const [data, setData] = useState("")
    const [calif, setCalif] = useState(0)
    const [sidebar, toggleSideBar] = useState(false)
    const [actCalif,setActCalif] = useState(0)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }
    const [text, setText] = useState("Publicar")
    const handleButton = (page) => {
        navigate(-1)
    }
    const [opinion, setOpinion] = useState("")
    const onFormUpdate = (e) => {
        const { value, name } = e.target
        if (name === "opinion")
            setOpinion(value)

    }
    useEffect(() => {
        if (curso){
            setData(curso)
            const aux=curso.califAct/curso.reviews.length
            console.log(aux)
            setActCalif(aux)
        }
            
    }, [curso])

    const enviar = async (e) => {
        e.preventDefault();

        console.log(data)

        try {
            setText("Publicando")
            const user = auth.currentUser
            if (user) {
                const array = data.path.split("/")
                const ref = doc(db, array[0], array[1], array[2], array[3])
                const aux = data.reviews
                const dataUserSnapshot = await getDoc(doc(db, "Users", user.uid))
                const dataUser = dataUserSnapshot.data()
                let newDate = new Date()
                let date_raw = newDate.getDate();
                let month_raw = newDate.getMonth() + 1;
                let year = newDate.getFullYear();
                
                aux.push({
                    opinion: opinion, 
                    calif: calif, 
                    name: dataUser.firstName + " " + dataUser.lastName,
                    date:date_raw+"/"+month_raw,
                })
                const auxCalif=(data.califAct+calif);
                await updateDoc(ref, {
                    reviews: aux,
                    califAct:auxCalif
                })
                console.log(auxCalif+"="+data.califAct+"+"+calif)
                setText("Publicar")
            }




            toast.success("Publicado exitosamente", {
                position: "bottom-center",
            });

            //handleButton()
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <div className="califRese">
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <form onSubmit={enviar}>
                <div className="container-calif">
                    <h3>!Deja tu Reseña¡</h3>
                    <div>
                        <Asesoria
                            img={data.img}
                            nombreCurso={data.nombreCurso}
                            nombre={data.nombre}
                            precio={""}
                            type={"type2"}
                            value={actCalif}
                        />
                        <div className="data-container">
                            <h6>Calificación</h6>
                            <Rating
                                name="size-medium"
                                value={calif}
                                onChange={(event, newValue) => {
                                    setCalif(newValue)
                                }}
                                emptyIcon={<StarIcon style={{ color: '#ddd' }} />}
                            />
                            <h6>{calif}</h6>
                        </div>
                        <Input
                            //hover="input-hover" 
                            onFormUpdate={onFormUpdate}
                            value={opinion}
                            name="opinion"
                            id="2"
                            class="textarea"
                            label="Opinión"
                            placeholder="Dejanos saber tu opinion"
                        />
                    </div>
                    <Boton type="submit" block={text === "Publicando" ? " block" : ""} text={text} />
                </div>
            </form>
            <Footer />
        </div>
    )
}