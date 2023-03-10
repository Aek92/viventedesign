import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Light from "./light";
import "./galleryv2.scss";

const GalleryV2 = (props) => {
  return (
    <Container id="galleryV2">
      <Light />
      <Row md={3} className="my-3">
        <Col md={4} className='d-flex align-items-center'>
          <div className="content quote">
            <p>"Her kommer det en tekst"</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="content">
            <img src={require("../../assets/gallery/bilde2.jpg")} alt="img" />
          </div>
        </Col>
        <Col md={4}>
          <div className="content ">
            <img src={require("../../assets/gallery/bilde6.jpg")} alt="img" />
          </div>
        </Col>
      </Row>
      <Row md={3} className="my-3">
        <Col md={4}>
          <div className="content dummy">
            <img src={require("../../assets/gallery/bilde51.JPG")} alt="img" />
          </div>
        </Col>
        <Col md={8} className='d-flex align-items-center'>
          <div className="content quote">
            <p>Her kommer enda et sitat....bla bla</p>
          </div>
        </Col>
      </Row>
      <Row md={3}>
        <Col md={4}>
          <div className="content dummy">
            <img src={require("../../assets/gallery/bilde9.jpg")} alt="img" />
          </div>
        </Col>
        <Col md={4} className='d-flex'>
          <div className="content quote">
            <p>"Her kommer det også en tekst"</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="content dummy">
            <img src={require("../../assets/gallery/bilde3.JPG")} alt="img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryV2;
