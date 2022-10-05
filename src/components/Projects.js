import React from "react";
import { Link } from "react-router-dom";

// TODO: Replace all png with webp
import company from "../images/companyRemake.webp";
import diceGame from "../images/diceGame.webp";
import fingerFlow from "../images/fingerFlow.webp";
import giphy from "../images/giphy.webp";
import newsSite from "../images/newsSite.webp";
import raspberryPi from "../images/raspberryPiLogger.webp";
import twitterHome from "../images/twitter_home.webp";
import woodcutter4 from "../images/woodcutter1.webp";

function Projects() {
  return (
    <>
      {/* WEB PROJECTS */}
      {/* Header */}
      <section className="Project SectionContainer" id="Projects">
        <div className="SectionHeading">
          <h4 className="SectionHeading__number">03.</h4>
          <h3 className="SectionHeading__title">Web Projects</h3>
          <div className="SectionHeading__line" />
        </div>
        <p className="SectionHeading__paragraph">
          Click on any project to learn more.
        </p>

        {/* Project List */}
        <div className="Project__container">
          <div className="Project__container__img-container">
            <img src={twitterHome} className="Project__container__img" />
            <Link to="/twitterClone" className="Project__container__img-hover">
              Fullstack Twitter Clone
            </Link>
          </div>
          <div className="Project__container__img-container">
            <img src={newsSite} className="Project__container__img" />
            <Link to="/newsAPI" className="Project__container__img-hover">
              Live News API
            </Link>
          </div>
          <div className="Project__container__img-container">
            <img src={diceGame} className="Project__container__img" />
            <Link to="/diceGame" className="Project__container__img-hover">
              React Dice Game
            </Link>
          </div>
          <div className="Project__container__img-container">
            <img src={company} className="Project__container__img" />
            <Link to="/companyPage" className="Project__container__img-hover">
              Company Site Remake
            </Link>
          </div>
          <div className="Project__container__img-container">
            <img src={giphy} className="Project__container__img" />
            <Link to="/giphyAPI" className="Project__container__img-hover">
              Gif API
            </Link>
          </div>
        </div>
      </section>

      {/* PYTHON PROJECTS */}
      {/* Header */}
      <section className="Project SectionContainer" id="Projects">
        <div className="SectionHeading">
          <h4 className="SectionHeading__number">04.</h4>
          <h3 className="SectionHeading__title">Python Projects</h3>
          <div className="SectionHeading__line" />
        </div>
        <p className="SectionHeading__paragraph">
          Click on any project to learn more.
        </p>

        {/* Project List */}
        <div className="Project__container">
          <div className="Project__container__img-container">
            <img src={woodcutter4} className="Project__container__img" />
            <Link to="/woodcutter" className="Project__container__img-hover">
              2D Platformer Game
            </Link>
          </div>
          <div className="Project__container__img-container">
            <img src={fingerFlow} className="Project__container__img" />
            <Link to="/fingerFlow" className="Project__container__img-hover">
              2D Puzzler Game
            </Link>
          </div>
          <div className="Project__container__img-container">
            <img src={raspberryPi} className="Project__container__img" />
            <Link to="/raspberryPI" className="Project__container__img-hover">
              RaspberryPi Datalogger
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
