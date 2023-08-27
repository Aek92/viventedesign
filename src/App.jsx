import React, { useState, useEffect } from "react";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Nav from './components/navigation/nav';
import Header from "./components/header/header";
import GalleryV2 from './components/galleryV2/galleryv2';
import Container from 'react-bootstrap/Container';

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 100,
  speedAsDuration: true,
  offset: "150px",
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Container fluid className='g-0'>
      <Nav />
      <Header />
      <About data={landingPageData.Header}/>
      <GalleryV2 data={landingPageData.GalleryV2}/>
      <Contact data={landingPageData.Contact} />
    </Container>
  );
};

export default App;
