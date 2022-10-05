import React from "react";
import { Link } from "react-router-dom";
import giphy from "../../images/giphy.webp";
import giphy2 from "../../images/giphy2.webp";
// TODO: Replace with webp
import giphy3 from "../../images/giphy3.png";

function GiphyAPI() {
  return (
    <section className="TwitterClone projectPage">
      <Link to="/">
        <i class="fa-solid fa-arrow-left-long projectPage__backButton" />
      </Link>
      <article className="projectPage__container">
        <div className="projectPage__description-container">
          <ul className="projectPage__description__ul">
            <li>Vanilla Javascript</li>
            <li>|</li>
            <li>HTML</li>
            <li>|</li>
            <li>CSS</li>
            <li>|</li>
            <li>API Consumption</li>
          </ul>
          <h3 className="projectPage__description__title">Giphy API Page</h3>
          <p className="projectPage__description__p">
            This simple page lets you enter a search term and submit that to the
            giphy API. This returns gifs related to your query for your viewing
            pleasure.
          </p>
          <div className="projectPage__description__links">
            <a
              href="https://effa-giphy-api.netlify.app/"
              target="_blank"
              className="projectPage__description__links__link"
            >
              View Live
            </a>
            <h3 className="projectPage__description__links__link">|</h3>
            <a
              href="https://github.com/seffa1/Giphy_API"
              className="projectPage__description__links__link"
              target="_blank"
            >
              Repository
            </a>
          </div>
        </div>
        <img src={giphy} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container">
        <img src={giphy2} className="projectPage__img-container__img" />
        <img src={giphy3} className="projectPage__img-container__img" />
      </div>
    </section>
  );
}

export default GiphyAPI;
