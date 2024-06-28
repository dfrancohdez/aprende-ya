import React, { useState } from "react"
import { Footer } from "../../components/footer/Footer"
import { NavBar } from "../../components/navBar/NavBar"
import { Sidebar } from "../../components/navBar/sidebar/Sidebar"
import { useNavigate } from "react-router-dom";
import download from "../../assets/img/archivo.png"
import profile from "../../assets/img/profile.png"
import "./_clase.scss"
export const Clase = () => {
    const navigate = useNavigate();
    const [sidebar, toggleSideBar] = useState(false)
    const handleToggleSidebar = () => {
        // console.log("hola")
        toggleSideBar(prev => !prev)
    }
    return (
        <div>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className="classScreen-container">
                <div className="classScreen-info">
                    <h3>Nombre de la sección</h3>
                    <h6>Nombre de la clase</h6>
                    <div>
                    <iframe width="560"
                        height="315"
                        src="https://www.youtube.com/embed/GwIo3gDZCVQ?si=1c5ojQ1xTnXF9mHa"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                    <p>Descripción</p>
                    </div>
                </div>
                <div className="classScreen-material">
                    <div className="classScreen-item">
                        <div className="classScreen-img">
                            <h6>Nombre</h6>
                            <img src={download} />
                        </div>
                        <p>Descripción</p>
                    </div>
                    <div className="classScreen-item">
                        <div className="classScreen-img">
                            <h6>Nombre</h6>
                            <img src={download} />
                        </div>
                        <p>Descripción</p>
                    </div>
                    <div className="classScreen-item">
                        <div className="classScreen-img">
                            <h6>Nombre</h6>
                            <img src={download} />
                        </div>
                        <p>Descripción</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}