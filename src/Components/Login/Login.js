import React from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import login from "../../Picture/login.jpg";

const Login = () => {
  const { googleSignin, user } = useAuth();

  return (
    <Container className=" ">
      <h1 className="mt-3 ">Please Login</h1>
      <div className="min-vh-100 d-flex justify-content-center align-items-center ">
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={8} lg={6}>
            <Image src={login} fluid />
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center mt-5"
            sm={12}
            md={4}
            lg={6}
          >
            <Button onClick={googleSignin} variant="secondary">
              Gmail
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
