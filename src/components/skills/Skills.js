import { Container,Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../../assets/img/meter1.svg"
import meter2 from "../../assets/img/meter2.svg"
import meter3 from "../../assets/img/meter3.svg"
import colorSharp from "../../assets/img/color-sharp.png"
import './_skills.scss'
export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Tutorías Personalizadas: Conectamos a estudiantes con tutores altamente calificados en una variedad de materias. Ya sea que necesites ayuda con matemáticas, ciencias, idiomas o cualquier otra área, nuestros tutores están aquí para ti.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="img"/>
                                    <h5>Web develoment</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="img"/>
                                    <h5>Web develoment</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="img"/>
                                    <h5>Web develoment</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left"src={colorSharp}/>
        </section>
      )
}