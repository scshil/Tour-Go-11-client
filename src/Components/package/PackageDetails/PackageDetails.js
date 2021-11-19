import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./PackageDetails.css";
const PackageDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://pure-crag-33813.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  // console.log(user);
  // console.log(service);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://pure-crag-33813.herokuapp.com/purchesitem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((order) => {
        if (order?.insertedId) {
          alert("Booking Sucessfull");
          reset();
        }
      });
  };
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
            <form className="bookingForm" onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name")} defaultValue={user?.displayName} />
              <input
                {...register("packagename")}
                defaultValue={service?.serviceName}
              />
              <input {...register("email")} value={user?.email} />
              <textarea
                {...register("address")}
                placeholder="Enter Contact Address"
              />
              <input
                type="number"
                {...register("phoneNo")}
                placeholder="Enter your Phone Number"
              />
              <input
                type="number"
                {...register("price")}
                value={service?.price}
              />
              <input type="submit" value="Book" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PackageDetails;
