import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Searvice = (props) => {
  const { service } = props;
  // console.log(service);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.Name}</Card.Title>
          {/* <Card.Text>{service.discription}</Card.Text> */}
          <Link to={`/services/${service._id}`}>
            <Button variant="primary">View</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Searvice;
