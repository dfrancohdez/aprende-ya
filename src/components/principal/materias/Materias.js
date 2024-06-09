import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import materia1 from "../../../assets/img/principal/icon-park_code-computer.svg"
import materia2 from "../../../assets/img/principal/material-symbols_science.svg"
import materia3 from "../../../assets/img/principal/octicon_number-24.svg"
import materia4 from "../../../assets/img/principal/tabler_list-letters.svg"
import './_materias.scss'
export const Materias = () => {
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
                <Carousel
                
                additionalTransfrom={-1 * 5}
                            responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <h5>Programación</h5>
                        <img src={materia1} alt="img" />
                    </div>
                    <div className="item">
                        <h5>Ciencia</h5>
                        <img src={materia2} alt="img" />

                    </div>
                    <div className="item">
                        <h5>Matemáticas</h5>
                        <img src={materia3} alt="img" />

                    </div>
                    <div className="item">
                        <h5>Ingles</h5>
                        <img src={materia4} alt="img" />

                    </div>

                </Carousel>
            </div>

        </section>
    )
}