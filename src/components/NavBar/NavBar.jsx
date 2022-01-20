import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

function NavBar() {
  return (
    <>
      <header className="header">
        <Navbar className="NavBarColour" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="titulo">Buenos Aires Basquetball</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Inicio">Inicio</Nav.Link>
                <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#Contacto">Contacto</Nav.Link>
              </Nav>
              <CartWidget />
            </Navbar.Collapse>
          </Container>
        </Navbar>
        ;
      </header>
    </>
  );
}

export default NavBar;
