import React from "react";
import { Link } from "react-router-dom";
import twitterHome from "../../images/twitter_home.png";
import twitterMain from "../../images/twitter_main.png";
import twitterSignIn from "../../images/twitterSignIn.png";

function TwitterClone() {
  return (
    <section className="TwitterClone projectPage">
      <Link to="/">
        <i class="fa-solid fa-arrow-left-long projectPage__backButton" />
      </Link>
      <article className="projectPage__container">
        <div className="projectPage__description-container">
          <ul className="projectPage__description__ul">
            <li>React</li>
            <li>|</li>
            <li>Node</li>
            <li>|</li>
            <li>Express</li>
            <li>|</li>
            <li>HTML</li>
            <li>|</li>
            <li>Javascript</li>
            <li>|</li>
            <li>CSS</li>
            <li>|</li>
            <li>Firebase</li>
            <li>|</li>
            <li>User Athentication</li>
          </ul>
          <h3 className="projectPage__description__title">
            Full Stack Twitter Clone{" "}
          </h3>
          <p className="projectPage__description__p">
            This project is still in progress. You can hit "OFFLINE ACCESS FOR
            VIEW ONLY" to get passed authentication for now. I wanted to build a
            full stack application with user athentication. There are two
            backend servers. One as the API to the firebase database, and the
            other for user athentication. The auth server issues issues access
            token and refresh tokens. Refresh token are saved in the database
            and are used to create new access tokens when they expire. Access
            tokens have a short lifespan to increase security. Users can delete
            refresh tokens by signing out or resetting their password.
          </p>
          <div className="projectPage__description__links">
            <a
              href="https://effa-twitter-clone.netlify.app/"
              target="_blank"
              className="projectPage__description__links__link"
            >
              View Live
            </a>
            <h3 className="projectPage__description__links__link">|</h3>
            <a
              href="https://github.com/seffa1/twitter-clone"
              target="_blank"
              className="projectPage__description__links__link"
            >
              Repository
            </a>
          </div>
        </div>
        <img src={twitterHome} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container">
        <img src={twitterMain} className="projectPage__img-container__img" />
        <img src={twitterSignIn} className="projectPage__img-container__img" />
      </div>
    </section>
  );
}

export default TwitterClone;
