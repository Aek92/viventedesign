import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './nav.scss'

import Logo from "../../assets/logo/logo4.png";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand>
          <a href='#'>
            <img  alt="logo" href="#newHeader" data-scroll className="d-inline-block align-top" src={Logo} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link data-scroll href='#about'>OM VIVENTE</Nav.Link>
            <Nav.Link data-scroll href='#portfolio'>GALLERI</Nav.Link>
            <Nav.Link data-scroll href='#contact'>KONTAKT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
