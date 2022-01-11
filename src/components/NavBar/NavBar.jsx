import React from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

export const NavbarApp = () => {
  return (
    <>
      <div id="navbar">
        <Navbar bg="success" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <NavbarBrand>NOMBRE</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Inicio</Nav.Link>
                <Nav.Link href="#">Productos</Nav.Link>
                <Nav.Link href="#">Nosotros</Nav.Link>
                <Nav.Link href="#">Contacto</Nav.Link>
              </Nav>
              <CartWidget />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarApp;
