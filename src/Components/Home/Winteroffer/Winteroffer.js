import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import cox from "../../../Picture/cox.jpeg";
import bandorban from "../../../Picture/bandorban.jpeg";
import sylhet from "../../../Picture/sylhet.jpeg";
import tetuliya from "../../../Picture/tetuliya.jpg";

const Winteroffer = () => {
  return (
    <div>
      <h4 className="my-3">Special Winter </h4>
      <h6 className="fw-lighter">Booking will start after 7 December</h6>

      <Row className="my-5" xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img height="70px" variant="top" src={cox} />
            <Card.Body>
              <Card.Title>Cox,s Bazar</Card.Title>
              {/*  <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img height="70px" variant="top" src={bandorban} />
            <Card.Body>
              <Card.Title>Bandorban</Card.Title>
              {/*   <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img height="70px" variant="top" src={sylhet} />
            <Card.Body>
              <Card.Title>sylhet</Card.Title>
              {/*     <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img height="70px" variant="top" src={tetuliya} />
            <Card.Body>
              <Card.Title>Tetuliya</Card.Title>
              {/*    <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Winteroffer;
