import React from "react";
import "./image.style.scss";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a id='image' title={title} data-lightbox-gallery="gallery1">
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>
      </div>
    </div>
  );
};
