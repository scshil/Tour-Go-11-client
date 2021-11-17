import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";

const PackageDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:7000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  console.log(service);
  return (
    <div className="min-vh-100">
      <Container>
        <Row className="my-5">
          <Col sm={12} md={6} lg={6}>
            <Image src={service?.picture} fluid />
            <h2 className="my-3">{service?.serviceName}</h2>
            <p style={{ textAlign: "justify" }}>{service?.details}</p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            Booking From
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PackageDetails;
