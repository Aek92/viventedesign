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
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} lg={4} className="d-flex mb-3 my-md-0">
          <div className="content">
            <img src={require("../../assets/gallery/bilde7.jpg")} alt="light" />
          </div>
        </Col>
        <Col md={6} lg={8} className="d-flex align-items-center mb-3 my-md-0">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor lacus nec auctor sagittis. Praesent ut magna vitae
              libero volutpat suscipit non vel magna. Sed quis orci eu diam
              lacinia dictum eget nec tortor. Ut ac varius sapien. Integer a
              augue vel nunc ullamcorper posuere sit amet non lacus. Sed ut leo
              id urna tristique volutpat. Pellentesque a ligula eros.
              Suspendisse vehicula ligula id dui commodo condimentum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Light;
