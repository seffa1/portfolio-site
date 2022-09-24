import React from "react";
import { Link } from "react-router-dom";
import newsSite from "../../images/newsSite.png";
import newsSiteMobile from "../../images/newsSiteMobile.png";
import newsSiteFooter from "../../images/newsSiteFooter.png";

function NewsAPI() {
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
            <li>API Consumption</li>
            <li>|</li>
            <li>Design Clone</li>
          </ul>
          <h3 className="projectPage__description__title">Live News Site</h3>
          <p className="projectPage__description__p">
            This fictional news site was cloned from a design on Dribble.com. I
            used the News API to feed live news articles, sorted by topic. The
            live site is currently using historical data as the live API cost
            ~$600 a month. If you host the site locally, there is a
            configuration option to switch it back to live data.
          </p>
          <div className="projectPage__description__links">
            <a
              href="https://effa-news.netlify.app/"
              target="_blank"
              className="projectPage__description__links__link"
            >
              View Live
            </a>
            <h3 className="projectPage__description__links__link">|</h3>
            <a
              href="https://github.com/seffa1/NewsPageClone/tree/main/news-page-clone"
              target="_blank"
              className="projectPage__description__links__link"
            >
              Repository
            </a>
          </div>
        </div>
        <img src={newsSite} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container">
        <img src={newsSiteMobile} className="projectPage__img-container__img" />
        <img src={newsSiteFooter} className="projectPage__img-container__img" />
      </div>
    </section>
  );
}

export default NewsAPI;
