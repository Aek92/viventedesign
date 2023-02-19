import { Image } from "../image/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./gallery.style.scss";

const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <p className="quote">
            "Et hjem skal gjenspeile menneskene som bor der, - og livet de
            lever."
          </p>
        </div>
        <Row md={3}>
          {props.data
            ? props.data.map((d, i) => (
                <Col
                  sm={6}
                  md={4}
                  lg={4}
                  key={`${d.title}-${i}`}
                  className=" py-3"
                >
                  <Image
                    id="galleryImg"
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </Col>
              ))
            : "Loading..."}
        </Row>
      </div>
    </div>
  );
};

export default Gallery;
