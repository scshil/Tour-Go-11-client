import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages);
  return (
    <Container className="mt-5">
      <h1> Our All Packages</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {packages.map((pack) => (
          <Col>
            <Card>
              <Card.Img variant="top" height="140px" src={pack.picture} />
              <Card.Body>
                <Card.Title>{pack.serviceName}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <NavLink to={`/package/${pack?._id}`}>
                  {" "}
                  <Button variant="success">view</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Packages;
