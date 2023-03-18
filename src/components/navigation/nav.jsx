import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.scss";

import Logo from "../../assets/logo/logo4.png";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" collapseOnSelect='true'>
      <Container className='mx-0 mx-lg-5'>
        <Navbar.Brand>
          <a href="#top">
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
        <Navbar.Collapse className='justify-content-lg-evenly justify-content-center'>
          <Nav className='justify-content-center justify-content-lg-around' >
            <Nav.Link data-scroll href="#about" className="link my-1 align-self-center">
              OM VIVENTE
            </Nav.Link>
            <Nav.Link data-scroll href="#galleryV2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className="link gap-1 my-1 align-self-center">
              GALLERI
            </Nav.Link>
            <Nav.Link data-scroll href="#contact" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" className="link gap-1 my-1 align-self-center">
              KONTAKT
            </Nav.Link>
          </Nav>
          <div className='d-flex my-3 justify-content-center justify-content-lg-evenly'>
            <a
              href="https://www.instagram.com/viventedesign"
              target="_blank"
              rel="noreferrer"
              className='mx-2'
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.facebook.com/ViventeDesign"
              target="_blank"
              rel="noreferrer"
              className='mx-2'
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
