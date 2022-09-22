import React from "react";

function HeroStatic() {
  return (
    <section className="HeroStatic">
      <h1 className="HeroStatic__title">My name is Sam Effa</h1>
      <h2 className="HeroStatic__subtitle">
        Im looking for a job as a web developer
      </h2>
      <a
        className="HeroStatic__a"
        href="https://github.com/seffa1"
        target="_blank"
      >
        <i class="devicon-github-original-wordmark HeroStatic__link"></i>
      </a>
    </section>
  );
}

export default HeroStatic;
