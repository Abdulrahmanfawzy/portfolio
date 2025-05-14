import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content h-80 d-flex align-items-start">
          <Row className="justify-content-center align-items-center w-100">
            <Col
              md={6}
              className="home-header text-left d-flex flex-column justify-content-center"
            >
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Abdulrahman Fawzy</strong>
              </h1>
              <div style={{ padding: "0px 50px" }}>
                <Type />
              </div>
            </Col>
            <Col
              md={6}
              className="text-right d-flex align-items-center justify-content-center"
            >
              <img
                src={homeLogo || "/placeholder.svg"}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
