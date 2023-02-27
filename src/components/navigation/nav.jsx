import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.scss";

import Logo from "../../assets/logo/logo4.png";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container xs={12}>
        <Navbar.Brand>
          <a href="#">
            <img
              alt="logo"
              href="#newHeader"
              data-scroll
              className="d-inline-block align-top"
              src={Logo}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link data-scroll href="#about">
              OM VIVENTE
            </Nav.Link>
            <Nav.Link data-scroll href="#portfolio">
              GALLERI
            </Nav.Link>
            <Nav.Link data-scroll href="#contact">
              KONTAKT
            </Nav.Link>
          </Nav>
          <div className="social">
            <a href="https://www.instagram.com/viventedesign" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.facebook.com/ViventeDesign" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
