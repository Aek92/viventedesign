import React, { useState, useEffect } from "react";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Nav from "./components/navigation/nav";
import Header from "./components/header/header";
import GalleryV2 from "./components/galleryV2/galleryv2";
import Coop from "./pages/coop.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <div>
                <Header />
                <About data={landingPageData.Header} />
                <GalleryV2 data={landingPageData.GalleryV2} />
                <Contact data={landingPageData.Contact} />
              </div>
            </>
          }
        />
        <Route path="/samarbeidspartnere" element={<Coop />}/>
      </Routes>
    </Router>
  );
};

export default App;
