import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./galleryv2.scss";

const GalleryV2 = () => {
  return (
    <Container id="galleryContainer">
      <Row md={4} className="">
        <Col md={4} className="content gy-3 gx-3">
          <p className="align-middle">"Her kommer det noe tekst"</p>
        </Col>
        <Col md={4} className="content gy-3 gx-3">
          <img src={require("../../assets/galleryv2/bilde2.jpg")} alt="image1"/>
        </Col>
        <Col md={4} className="content gy-3 gx-3">
        <img src={require("../../assets/galleryv2/bilde6.jpg")} alt="image1"/>
        </Col>
      </Row>
      <Row md={4} className="">
        <Col md={4} className="content gy-3">
          <div className="dummy"></div>
        </Col>
        <Col md={4} className="content gy-3">
          <div className="dummy"></div>
        </Col>
        <Col md={4} className="content gy-3">
          <div className="dummy"></div>
        </Col>
      </Row>
      <Row md={4} className="">
        <Col md={4} className="content gy-3">
          <div className="dummy"></div>
        </Col>
        <Col md={4} className="content gy-3">
          <div className="dummy"></div>
        </Col>
        <Col md={4} className="content gy-3">
          <div className="dummy"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryV2;
