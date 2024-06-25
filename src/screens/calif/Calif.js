import React, { useState } from "react"
import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import "./_calif.scss"
import Asesoria from "../../components/asesoria/Asesoria"
import { Boton } from "../../components/boton/Boton"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Input } from "../../components/inputs/Input"
export const Calif = () => {
    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }
    return (
        <div className="califRese">
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <form>
                <div className="container-calif">
                    <h3>!Deja tu Reseña¡</h3>
                    <div>
                        <Asesoria
                            img={""}
                            nombreCurso={""}
                            nombre={""}
                            precio={""}
                            type={"type2"}
                        />
                        <div className="data-container">
                            <h6>Calificación</h6>
                            <Rating
                                name="size-medium"
                                defaultValue={2}

                                emptyIcon={<StarIcon style={{ color: '#ddd' }} />}
                            />
                            <h6>5</h6>
                        </div>
                        <Input
                            //hover="input-hover" 
                            //onFormUpdate={onFormUpdate} 
                            //value={resumen} 
                            name="opinion"
                            id="2"
                            class="textarea"
                            label="Opinión"
                            placeholder="Dejanos saber tu opinion"
                        />
                    </div>
                    <Boton type="submit" text="Publicar" />
                </div>
            </form>
            <Footer />
        </div>
    )
}