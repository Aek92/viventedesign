import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import TopImage from "../../assets/top/top.jpg";
import "./header.styles.scss";

const Header = () => {
  return (
    <Container fluid>
      <Row id="headerRow" className='d-none d-lg-block'>
        <Col md={12} className="headerContainer">
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
