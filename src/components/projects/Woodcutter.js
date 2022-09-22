import React from "react";
import { Link } from "react-router-dom";
import woodcutter from "../../images/woodcutter.png";
import woodcutter1 from "../../images/woodcutter1.png";
import woodcutter2 from "../../images/woodcutter2.png";
import woodcutter3 from "../../images/woodcutter3.png";
import woodcutter4 from "../../images/woodcutter4.png";
import woodcutter5 from "../../images/woodcutter5.png";

function Woodcutter() {
  return (
    <section className="TwitterClone projectPage">
      <Link to="/">
        <i class="fa-solid fa-arrow-left-long projectPage__backButton"> Back</i>
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
          <h1 className="projectPage__description__title">Platformer RPG</h1>
          <p className="projectPage__description__p">
            This is a fully fledges platforming RPG adventure game in about 6000
            lines of python. Run through mulitple worlds while jumping and
            sliding off walls, collecting orbs, and killing ogres for coins.
            Spend your coins at the shop to level up your character. You can
            save and load your games, talk to NPCs, and use two different
            attacks. As you level up you will be able to complete the level
            faster and faster. Keep playing until you can acheieve a gold medal
            on each level!
          </p>
          <div className="projectPage__description__links">
            <h3 className="projectPage__description__links__link">View Live</h3>
            <h3 className="projectPage__description__links__link">|</h3>
            <a
              href="https://github.com/seffa1/the_woodcutter"
              target="_blank"
              className="projectPage__description__links__link"
            >
              Repository
            </a>
          </div>
        </div>
        <img src={woodcutter} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container">
        <img src={woodcutter1} className="projectPage__img-container__img" />
        <img src={woodcutter2} className="projectPage__img-container__img" />
        <img src={woodcutter3} className="projectPage__img-container__img" />
        <img src={woodcutter5} className="projectPage__img-container__img" />
        <img src={woodcutter4} className="projectPage__img-container__img" />
      </div>
    </section>
  );
}

export default Woodcutter;
