import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import materia1 from "../../../assets/img/principal/icon-park_code-computer.svg"
import materia2 from "../../../assets/img/principal/material-symbols_science.svg"
import materia3 from "../../../assets/img/principal/octicon_number-24.svg"
import materia4 from "../../../assets/img/principal/tabler_list-letters.svg"
import './_recomendaciones.scss'
import Asesoria from "../../asesoria/Asesoria";
import img from "../../../assets/img/principal/Isometric Stickers Charts.png"
import React, { useState,useEffect,Suspense } from "react";
import { auth, db } from "../../../components/auth/firebase";
import { QuerySnapshot, collection, getDocs, collectionGroup, query, where, and } from "firebase/firestore";
export const Recomendaciones = ({ text }) => {
    const [carga, setCarga] = useState(false)
    const [asesorias, setAsesorias] = useState([])
    const fetchPost = async () => {
        setCarga(true)
        let newData = []
        const asesorias = query(collectionGroup(db, 'Cursos'))
        const querySnapshot = await getDocs(asesorias);
        querySnapshot.forEach((doc) => {
            newData.push({ ...doc.data(), id: doc.id, path: doc.ref.path })
            console.log(newData)
        });
        setCarga(false)
        setAsesorias(newData)
        // console.log(newData)
    }

    useEffect(() => {
        fetchPost();

    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <div className="skill-bx">
                {!text && <div className="skill-content">
                    <img src={img} />
                    <h5>
                        Una amplia selección de cursos
                        Elige entre más de 210.000 cursos de vídeo en línea con nuevo contenido cada mes
                    </h5>
                </div>}
                <div className="centrar">
                    <h2>{text ? text : "Los estudiantes están viendo"}</h2>
                </div>

                <Carousel
                    centerMode={true}

                    responsive={responsive} infinite={true} className="skill-slider">

                    {/* <Asesoria precio="100"nombreCurso="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" nombre="Juan Pablo De la torre Valdez"/>
                <Asesoria precio="100"nombreCurso="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" nombre="Juan Pablo De la torre Valdez"/>
                <Asesoria precio="100"nombreCurso="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" nombre="Juan Pablo De la torre Valdez"/>
                <Asesoria precio="100"nombreCurso="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" nombre="Juan Pablo De la torre Valdez"/> */}

                    {asesorias.length > 0 && asesorias.map(prev =>
                        <Suspense fallback={<div></div>}>
                            <div>
                                <Asesoria
                                    
                                    precio={prev.precio}
                                    nombreCurso={prev.nombreCurso}
                                    nombre={prev.nombre}
                                    img={prev.img}
                                    value={prev?.califAct === 0 ? 0 : prev?.califAct / prev?.reviews?.length}
                                />
                            </div>
                        </Suspense>
                    )

                    }
                </Carousel>
            </div>

        </section>
    )
}