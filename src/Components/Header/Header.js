import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="">
      <Navbar className="d-flex justify-content-end" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/package">Packages</NavLink>
            <NavLink to="/addservice">AddServices</NavLink>
          </Nav>
        </Container>
        <div className="buttons">
          {user?.displayName ? (
            <div>
              <Button onClick={logout}>Logout</Button>
              <p>
                <strong>{user.displayName}</strong>
              </p>
            </div>
          ) : (
            <Link to="/login">
              {" "}
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
