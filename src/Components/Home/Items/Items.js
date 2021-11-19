import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://pure-crag-33813.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const showaitems = items.slice(3, 9);

  return (
    <Container className="mt-5">
      <h1> Our Packages</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {showaitems.map((pack) => (
          <Col>
            <Card>
              <Card.Img variant="top" height="140px" src={pack.picture} />
              <Card.Body>
                <Card.Title>{pack.serviceName}</Card.Title>
                <Card.Text>{pack?.details.slice(0, 65)}</Card.Text>
                <NavLink to={`/package/${pack?._id}`}>
                  {" "}
                  <Button variant="success">view</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <NavLink to="/package">
          <Button variant="info">All Packages</Button>
        </NavLink>
      </Row>
    </Container>
  );
};

export default Items;
