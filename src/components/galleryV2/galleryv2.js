import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./galleryv2.scss";

const GalleryV2 = () => {
  return (
    <Container id="galleryContainer">
    <h3>"Et hjem skal gjenspeile menneskene som bor der, - og livet de lever."</h3>
      <Row md={3} className="">
        <Col md={4} className="content gx-3">
          <p className="align-middle">"Her kommer det noe tekst"</p>
        </Col>
        <Col md={4} className="content">
          <img
            src={require("../../assets/galleryv2/bilde2.jpg")}
            alt="image1"
          />
        </Col>
        <Col md={4} className="content">
          <img
            src={require("../../assets/galleryv2/bilde6.jpg")}
            alt="image2"
          />
        </Col>
      </Row>
      <Row md={4} className="">
        <Col md={4} className="content gy-3">
          <img
            src={require("../../assets/galleryv2/bilde3.JPG")}
            alt="image2"
          />
        </Col>
        <Col md={4} className="content gy-3">
          <img
            src={require("../../assets/galleryv2/bilde8.jpg")}
            alt="image2"
          />
        </Col>
        <Col md={4} className="content gy-3">
          <p>"Her kommer det også en tekst"</p>
        </Col>
      </Row>
      <Row md={4} className="">
        <Col md={4} className="content gy-3">
          <img
            src={require("../../assets/galleryv2/bilde9.jpg")}
            alt="image2"
          />
        </Col>
        <Col md={4} className="content gy-3">
          <p>"Her kommer det også en eller annen tekst om detaljer."</p>
        </Col>
        <Col md={4} className="content gy-3">
          <img
            src={require("../../assets/galleryv2/bilde7.jpg")}
            alt="image2"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryV2;
