import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fragment } from "react";
import "./galleryv2.scss";

const Light = () => {
  return (
    <Fragment>
      <Row className="my-3">
        <Col md={4}>
          <div className="dummy"></div>
        </Col>
        <Col md={4}>
          <div className="dummy"></div>
        </Col>
        <Col md={4}>
          <div className="dummy"></div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="dummy"></div>
        </Col>
        <Col md={8}>
          <div className="dummy-800"></div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Light;
