import React from "react";
import { Link } from "react-router-dom";
import fingerFlow from "../../images/fingerFlow.webp";
import fingerFlow2 from "../../images/fingerFlow2.webp";
import fingerFlow3 from "../../images/fingerFlow3.webp";

function FingerFlow() {
  return (
    <section className="TwitterClone projectPage">
      <Link to="/">
        <i class="fa-solid fa-arrow-left-long projectPage__backButton" />
      </Link>
      <article className="projectPage__container">
        <div className="projectPage__description-container">
          <ul className="projectPage__description__ul">
            <li>Python</li>
            <li>|</li>
            <li>OOP</li>
            <li>|</li>
            <li>Game Engines</li>
            <li>|</li>
            <li>Algorithms</li>
          </ul>
          <h3 className="projectPage__description__title">2D Puzzler Game</h3>
          <p className="projectPage__description__p">
            Control two columns which throw rocks into the air. Throw the rocks
            up as pillars come flying at you. Each time a rock gets over a
            pillar, you get a point. Keep going for as long as possible before
            your rock explodes into a delicious particle simulation. Also, the
            sound is ASMR so use your headphones. There is not a live version
            currently.
          </p>
          <div className="projectPage__description__links">
            <h3 className="projectPage__description__links__link">View Live</h3>
            <h3 className="projectPage__description__links__link">|</h3>
            <a
              href="https://github.com/seffa1/Finger_Flow"
              className="projectPage__description__links__link"
              target="_blank"
            >
              Repository
            </a>
          </div>
        </div>
        <img src={fingerFlow} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container">
        <img src={fingerFlow3} className="projectPage__img-container__img" />
        <img src={fingerFlow2} className="projectPage__img-container__img" />
      </div>
    </section>
  );
}

export default FingerFlow;
