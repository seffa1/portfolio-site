import React from "react";
import { Link } from "react-router-dom";
import diceGame from "../../images/diceGame.png";
import diceGameTwo from "../../images/diceGame2.png";
import diceGameThree from "../../images/diceGame3.png";

function DiceGame() {
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
            <li>HTML</li>
            <li>|</li>
            <li>CSS</li>
            <li>|</li>
            <li>Javascript</li>
            <li>|</li>
          </ul>
          <h3 className="projectPage__description__title">Dice Game Clone</h3>
          <p className="projectPage__description__p">
            This is a clone of a minigame from the videogame "Cult of the Lamb".
            This is meant for two players to play locally currently. For rules
            on:{" "}
            <a
              link
              target="_blank"
              href="https://www.dualshockers.com/cult-of-the-lamb-knucklebones-tips/"
            >
              How to play
            </a>{" "}
            This was built in react to get experience on more complex state
            management in react.
          </p>
          <div className="projectPage__description__links">
            <a
              href="https://effa-dice-game.netlify.app/"
              target="_blank"
              className="projectPage__description__links__link"
            >
              View Live
            </a>
            <h3 className="projectPage__description__links__link">|</h3>
            <a
              href="https://github.com/seffa1/knucklebones/tree/main/knucklebones"
              target="_blank"
              className="projectPage__description__links__link"
            >
              Repository
            </a>
          </div>
        </div>
        <img src={diceGame} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container">
        <img src={diceGameTwo} className="projectPage__img-container__img" />
        <img src={diceGameThree} className="projectPage__img-container__img" />
      </div>
    </section>
  );
}

export default DiceGame;
