import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ fontWeight: "900" }}>Tour-Go</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <NavLink
                  activeClassName="active"
                  className="navlink"
                  to="/home"
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  activeClassName="active"
                  className="navlink"
                  to="/package"
                >
                  Packages
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  activeClassName="active"
                  className="navlink"
                  to="/about"
                >
                  About
                </NavLink>
              </Nav.Link>
              {user?.email && (
                <NavDropdown title="More" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    {" "}
                    <NavLink
                      activeClassName="active"
                      className="navlink"
                      to="/myorders"
                    >
                      Yours Orders
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink
                      activeClassName="active"
                      className="navlink"
                      to="/manageallorders"
                    >
                      All orders
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink
                      activeClassName="active"
                      className="navlink"
                      to="/addservice"
                    >
                      Add package
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Form className="d-flex">
              {" "}
              {user?.email && (
                <div
                  style={{ color: "green", fontWeight: "600" }}
                  className="me-3 "
                >
                  <p>{`Hi ${user?.displayName}`}</p>
                </div>
              )}
              {user?.email ? (
                <Button onClick={logout} variant="outline-danger">
                  Logout
                </Button>
              ) : (
                <NavLink to="/login">
                  {" "}
                  <Button variant="outline-success">Login</Button>
                </NavLink>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
