import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbars">
        <Container className="navbarss">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className="navbar_brand px-5">TITANIA</Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="d-flex flex-row justify-content-end">
              <Nav.Link href="/" className="links px-5 py-3">
                HOME
              </Nav.Link>

              <Nav.Link href="#about" className="links mx-4 py-3">
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#solutions" className="links mx-4 py-3">
                SOLUTIONS
              </Nav.Link>
              <Nav.Link href="#services" className="links mx-4 py-3">
                SERVICES
              </Nav.Link>
              <Nav.Link href="#blog" className="links mx-4 py-3">
                BLOG
              </Nav.Link>
              <Nav.Link href="#contacts" className="links mx-4 py-3">
                CONTACTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
