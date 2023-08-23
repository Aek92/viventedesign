import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fragment } from "react";

import "./galleryv2.scss";

const Light = (props) => {
  return (
    <Fragment>
      <Row className="my-4" md={2}>
        <Col md={6} lg={4} className="mb-3 my-md-0">
          <div className="content">
            <img
              src={require("../../assets/gallery/bilde6.jpg")}
              alt="light"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col md={6} lg={4} className="mb-3 my-md-0">
          <div className="content">
            <img
              src={require("../../assets/gallery/bilde2.jpg")}
              alt="light"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col md={12} lg={4} className="d-flex align-items-center mt-3 mb-3 my-md-0">
          <div className="content quote">
            <p>«Belysningen betyr alt!»</p>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} lg={4} className="mb-3 my-md-0">
          <div className="content">
            <img src={require("../../assets/gallery/bilde7.jpg")} alt="light" />
          </div>
        </Col>
        <Col md={6} lg={8} className="d-flex align-items-center mb-3 my-md-0">
          <div className="text">
            <p>Vi trenger nok lys – og behovet endrer seg gjennom livet! 
            Plassering, type lys, valg av armaturer… 
            Jeg hjelper deg belysningsplanen og gir deg konkrete forslag til riktige lamper i akkurat ditt hjem.
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Light;
