import { Nav, Container, Navbar } from "react-bootstrap";


const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Administrador</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link href="#link">Registro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;