import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fragment } from "react";

const Bottom = () => {
  return (
    <Fragment>
      <Row className="my-4">
        <Col md={6} lg={4} className="d-flex align-items-center mb-4 my-md-0">
          <div className="content quote">
            <p>«The devil is in the details.!»</p>
          </div>
        </Col>
        <Col md={6} lg={4} className='mb-3 my-md-2'>
          <div className="content">
            <img src={require("../../assets/gallery/bilde9.jpg")} alt="light" />
          </div>
        </Col>
        <Col md={12} lg={4} className='mb-3 my-md-2'>
          <div className="content">
            <img src={require("../../assets/gallery/bilde3.JPG")} alt="light" />
          </div>
        </Col>
      </Row>
      <Row >
      <Col md={12}>
        <div className="content text">
          <p>
          Stylingen til slutt, - de små detaljene som utgjør den store forskjellen. 
          Selvfølgelig fikser jeg det, - og skaffer det du trenger – urner, vaser, lykter, bilder, tekstiler…
          </p>
        </div>
      </Col>
    </Row>
    </Fragment>
  );
};

export default Bottom;