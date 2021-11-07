import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, logout } = useFirebase();
  console.log(user);
  /*   console.log(user?.providerData);
  console.log(user?.providerData.displayName); */
  /*   const Name = user?.providerData[0]?.displayName;
  console.log(Name); */

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <div>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/addservice">AddService</NavLink>
              <NavLink to={`/purchesitem/${""}`}>orders</NavLink>
            </Nav>
          </div>
          {/*login  */}
          <div>
            {user.Displayname ? (
              <button onClick={logout}>logout</button>
            ) : (
              <NavLink to="/login">
                {" "}
                <button>login</button>
              </NavLink>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
