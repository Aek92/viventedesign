import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Light from "./light";
import Bottom from "./bottom";
import Top from "./top";
import "./galleryv2.scss";

const GalleryV2 = (props) => {
  return (
    <Container id="galleryV2">
      <Top classname='section' />
      <Light data={props} />
      <Bottom />
    </Container>
  );
};

export default GalleryV2;
