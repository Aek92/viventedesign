import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fragment } from "react";

const Top = () => {
  return (
    <Fragment>
      <Row >
        <Col md={12}>
          <div className="content quote">
            <p>
            «Farger, materialer, møbler – helheten som skal føles naturlig, personlig og uanstrengt.» 
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
      <Row >
        <Col md={12}>
          <div className="content text">
            <p>
            Ditt uttrykk – min kompetanse. 
            Sammen skaper vi omgivelsene du alltid har drømt om. 
            En flyt mellom rommene fra kjøkken, bad og stue – til de mer private sonene. 
            Og vi glemmer selvfølgelig heller ikke uterommet!
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Top;
