import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bannar from "./Bannar/Bannar";
import Contact from "./Contact/Contact";
import Items from "./Items/Items";
import Winteroffer from "./Winteroffer/Winteroffer";

const Home = () => {
  return (
    <div className="mb-5">
      <Bannar></Bannar>
      <Items></Items>
      <Container className="my-5">
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
