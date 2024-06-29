import React, { useEffect, useState } from "react"
import { Footer } from "../../components/footer/Footer"
import { NavBar } from "../../components/navBar/NavBar"
import { Sidebar } from "../../components/navBar/sidebar/Sidebar"
import { useNavigate, useLocation } from "react-router-dom";
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
    const location = useLocation()
    const { item, title } = location.state || {}
    const [data, setData] = useState(null)
    const [titleSec, setTitleSec] = useState("")
    const [videos, setVideos] = useState([])
    const [materiales, setMateriales] = useState([])
    useEffect(() => {
        if (item) {
            //setData(item)
            //console.log(data?.material[0]?.ruta)
            let auxvideos = []
            let auxmateriales = []

            for (let aux of item?.material) {
                if (aux.name.startsWith("Video")) {
                    auxvideos.push({ ...aux })
                } else {
                    auxmateriales.push({ ...aux })
                }
                console.log(auxvideos)
                console.log(auxmateriales)
                setVideos(auxvideos)
                setMateriales(auxmateriales)
            }
        }
        if (title) {
            setTitleSec(title)
        }
    }, [item, title])
    //console.log(item)
    //console.log(title)
    return (
        <div>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className="classScreen-container">
                <div className="classScreen-info">
                    <h3>{titleSec}</h3>
                    <h5>{data?.value}</h5>
                    {videos.map(video =>
                        <div>
                            <h6>{video?.name}</h6>
                            <iframe width="560"
                                height="315"
                                src={video?.ruta}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen></iframe>
                            <p>{video?.description}</p>
                        </div>
                    )
                    }
                </div>
                <div className="classScreen-material">

                    {materiales.map(material =>
                        <div className="classScreen-item">
                            <div className="classScreen-img">
                                <h6>{material.name}</h6>
                                <a target="_blank" href={material.ruta}><img src={download}/></a>
                            </div>
                            <div className="classScreen-description">
                                <h6>Descripción:</h6>
                                <p>{material.description}</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    )
}