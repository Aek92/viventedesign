import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fragment } from "react";

const Top = () => {
  return (
    <Fragment>
      <Row >
        <Col md={12}>
          <div className="content text">
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
      <Row className='my-4'>
        <Col md={4} className='mb-3 my-md-0'>
          <div className="content dummy"></div>
        </Col>
        <Col md={4} className='mb-3 my-md-0'>
          <div className="content dummy"></div>
        </Col>
        <Col md={4} className='mb-3 my-md-0'>
          <div className="content dummy"></div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Top;
