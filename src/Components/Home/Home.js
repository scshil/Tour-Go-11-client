import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bannar from "./Bannar/Bannar";
import Contact from "./Contact/Contact";
import Winteroffer from "./Winteroffer/Winteroffer";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Container>
        <Row>
          <Col sm={12} md={8} lg={6}>
            {" "}
            <Winteroffer></Winteroffer>
          </Col>
          <Col sm={12} md={4} lg={6}>
            <Contact></Contact>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
