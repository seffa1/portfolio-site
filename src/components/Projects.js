import React from "react";
import diceGame from "../images/diceGame.png";
import twitterHome from "../images/twitter_home.png";
import newsSite from "../images/newsSite.png";
import woodcutter4 from "../images/woodcutter1.png";
import fingerFlow from "../images/fingerFlow.png";
import raspberryPi from "../images/raspberryPiLogger.png";
import company from "../images/companyRemake.png";
import giphy from "../images/giphy.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <section className="Project" id="Projects">
        {/* Project One */}
        <div className="About__background">
          <div className="About__heading">
            <h4 className="About__heading__number">02.</h4>
            <h3 className="About__heading__title">Web Projects</h3>
            <div className="About__heading__line" />
          </div>

          {/* Project Two */}
          <div className="Project__container">
            <div className="Project__container__img-container">
              <img src={twitterHome} className="Project__container__img" />
              <Link
                to="/twitterClone"
                className="Project__container__img-hover"
              >
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
        </div>
      </section>
      <section className="Project" id="Projects">
        {/* Project One */}
        <div className="About__background">
          <div className="About__heading">
            <h4 className="About__heading__number">03.</h4>
            <h3 className="About__heading__title">Python Projects</h3>
            <div className="About__heading__line" />
          </div>

          {/* Project Two */}
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
        </div>
      </section>
    </>
  );
}

export default Projects;
