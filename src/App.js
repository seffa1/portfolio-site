import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page Components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroStatic from "./components/HeroStatic";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import SideLinks from "./components/SideLinks";
import Skills from "./components/Skills";

// Import Project pages
import CompanyPage from "./components/projects/CompanyPage";
import DiceGame from "./components/projects/DiceGame";
import FingerFlow from "./components/projects/FingerFlow";
import GiphyAPI from "./components/projects/GiphyAPI";
import NewsAPI from "./components/projects/NewsApi";
import RaspberryPi from "./components/projects/RasperryPi";
import TwitterClone from "./components/projects/TwitterClone";
import Woodcutter from "./components/projects/Woodcutter";

function App() {
  // Hold scrolling data
  const [scrollDirection, setScrollDirection] = useState("up");
  const [offsetY, setOffsetY] = useState(0);
  const [prevOffsetY, setPrevOffsetY] = useState(0);

  // update scroll amount
  function handleScroll() {
    let currentScroll = window.scrollY;
    setOffsetY(currentScroll);
  }

  // determine scroll direction
  useEffect(() => {
    // sets the scroll direction
    if (offsetY < prevOffsetY) setScrollDirection("up");
    if (offsetY > prevOffsetY) setScrollDirection("down");
    setPrevOffsetY(offsetY);
  }, [offsetY]);

  // create scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0); // manually scroll to top on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // page anchors
  const handleClickAbout = (e) => {
    e.preventDefault();

    const element = document.getElementById("About");
    let rect = element.getBoundingClientRect();
    window.scrollBy(0, rect.y);
  };
  const handleClickProjects = (e) => {
    e.preventDefault();

    const element = document.getElementById("Projects");
    let rect = element.getBoundingClientRect();
    window.scrollBy(0, rect.y);
  };
  const handleClickContact = (e) => {
    e.preventDefault();

    const element = document.getElementById("Contact");
    let rect = element.getBoundingClientRect();
    window.scrollBy(0, rect.y);
  };
  const handleClickHome = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  // Render app
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {/* Parallax background */}
              <Parallax scroll={offsetY} />
              <SideLinks />

              {/* Content */}
              <Navbar
                direction={scrollDirection}
                handleClickAbout={handleClickAbout}
                handleClickProjects={handleClickProjects}
                handleClickContact={handleClickContact}
                handleClickHome={handleClickHome}
              />
              {/* <Hero scroll={offsetY} /> */}
              <HeroStatic />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/companyPage"
          element={
            <>
              <SideLinks />
              <CompanyPage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/diceGame"
          element={
            <>
              <SideLinks />
              <DiceGame />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/fingerFlow"
          element={
            <>
              <SideLinks />
              <FingerFlow />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/giphyAPI"
          element={
            <>
              <SideLinks />
              <GiphyAPI />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/newsAPI"
          element={
            <>
              <SideLinks />
              <NewsAPI />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/raspberryPI"
          element={
            <>
              <SideLinks />
              <RaspberryPi />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/twitterClone"
          element={
            <>
              <SideLinks />
              <TwitterClone />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/woodcutter"
          element={
            <>
              <SideLinks />
              <Woodcutter />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
