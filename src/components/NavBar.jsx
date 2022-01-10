import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavbarApp = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Inicio">Inicio</Nav.Link>
              <Nav.Link href="Productos">Productos</Nav.Link>
              <Nav.Link href="Nosotros">Nosotros</Nav.Link>
              <Nav.Link href="Contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
