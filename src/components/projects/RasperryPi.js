import React from "react";
import { Link } from "react-router-dom";
import raspberryPi from "../../images/raspberryPiLogger.png";

function RaspberryPi() {
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
            <li>MYSQL</li>
            <li>|</li>
            <li>Linux</li>
            <li>|</li>
            <li>Breadboarding</li>
            <li>|</li>
            <li>TKinter</li>
          </ul>
          <h3 className="projectPage__description__title">
            Raspberry Pi Datalogger
          </h3>
          <p className="projectPage__description__p">
            This is a TKinter python GUI which connects to an external SQL
            database. A raspberry pi script collects temperature and RH data and
            dumps it to the SQL database. The application then displays the
            latest data, as well as graphs recent data. You can select the start
            and end date with a calender, and graph historical data. There is
            currently some issues on apple, as I originally made this with a
            windows machine. This is a project I will eventually re-do on a web
            platform.
          </p>
          <div className="projectPage__description__links">
            <h3 className="projectPage__description__links__link">View Live</h3>
            <h3 className="projectPage__description__links__link">|</h3>
            <h3 className="projectPage__description__links__link">
              Repository
            </h3>
          </div>
        </div>
        <img src={raspberryPi} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container"></div>
    </section>
  );
}

export default RaspberryPi;
