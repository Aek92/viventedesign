import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HeaderImg from "../../assets/header/header1.jpg";
import "./about.scss";

export const About = (props) => {
  return (
    <Container id="about">
      <Row md={2}>
        <Col md={7} off>
          <div id="text-container">
            
          <h1 className='welcome'>{props.data ? props.data.welcome : "Missing"}</h1>
          <p>
              {props.data ? props.data.about : "Missing about text"}
            </p>
          </div>
        </Col>
        <Col md={{ span: 4, offset: 1 }} id="img" className='d-flex alig-content-center'>
          <div className="right-vertical">
            <div className="gradient-box">
              <img
                id="headerImg"
                alt="headerPicture"
                className="img-fluid"
                src={HeaderImg}
              />
            </div>
            <div className="quote">
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
