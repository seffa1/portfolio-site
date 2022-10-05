import React from "react";
import { Link } from "react-router-dom";
import company from "../../images/companyRemake.webp";
import companyMobile from "../../images/companyRemakeMobile.webp";
import company2 from "../../images/companyRemake2.webp";

function CompanyPage() {
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
          </ul>
          <h3 className="projectPage__description__title">
            Company Website Remake
          </h3>
          <p className="projectPage__description__p">
            The current company I work at has a 20 year old static website which
            is not responsive. I wanted to show them what a responsive webpage
            looked like so I remade their landed page myself. It is mobile
            friendly with collapsing hamburger menus done in vanilla javascript.
            There is also an automatic changing carousel wheel.
          </p>
          <div className="projectPage__description__links">
            <a
              href="https://effa-fake-landing-page.netlify.app/"
              target="_blank"
              className="projectPage__description__links__link"
            >
              View Live
            </a>
            <h3 className="projectPage__description__links__link">|</h3>
            <a
              href="https://github.com/seffa1/CompanyRedesign"
              target="_blank"
              className="projectPage__description__links__link"
            >
              Repository
            </a>
          </div>
        </div>
        <img src={company} className="projectPage__img" />
      </article>
      <div className="projectPage__img-container">
        <img src={companyMobile} className="projectPage__img-container__img" />
        <img src={company2} className="projectPage__img-container__img" />
      </div>
    </section>
  );
}

export default CompanyPage;
