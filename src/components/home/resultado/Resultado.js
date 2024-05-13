import React from "react";
import { Container,Col,Row } from "react-bootstrap";
import CategoriesBar from "../categoriesBar/CategoriesBar";
import Video from'../video/Video'
import './_resultado.scss'
const Resultado=()=> {
  return (
    <Container>
        <CategoriesBar />
        <Row className="home__resultado">
            {
                [...new Array(20)].map(()=>(
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                ))
            }
        </Row>
    </Container>
  );
}

export default Resultado