import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const { Navbar, Container, Nav } = require("react-bootstrap");
const { HashLink } = require("react-router-hash-link");

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home">Tour Bee</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">
              Guides
            </Nav.Link>

            <Nav.Link as={HashLink} to="/myorders">
              My Orders
            </Nav.Link>
            <Nav.Link as={HashLink} to="/manageorders">
              Manage Orders
            </Nav.Link>
            <Nav.Link as={HashLink} to="/addService">
              Add Service
            </Nav.Link>
            {user?.displayName ? (
              <button
                className="btn btn-primary"
                onClick={logOut}
                variant="light"
              >
                Logo Out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text className="ms-3"> {user?.displayName}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
