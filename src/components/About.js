import React from "react";

function About() {
  return (
    <section className="About" id="About">
      <div className="About__background">
        <div className="About__heading">
          <h4 className="About__heading__number">01.</h4>
          <h3 className="About__heading__title">About Me</h3>
          <div className="About__heading__line" />
        </div>
        <p className="About__paragraph">
          My name is Samuel Effa. I am a trained Biosystems Engineer with
          experience in solving difficult problems on complex systems. This
          skill set helped me to transition naturally into software engineering.
          I've discovered that programming is my passion and I am excited to be
          seeking a new role as a remote web developer.
        </p>

        <p className="About__paragraph">
          My main skills involve HTML5, CSS, React, Javascript (ES6+), Python,
          SQL, and Express. I spend most of my free time building applications
          and learning new frameworks. I enjoy building responsive and
          performance-driven websites as well as game engines in Python and
          Javascript. I am a fast learner with a passion for solving complex
          problems.
        </p>
      </div>
    </section>
  );
}

export default About;
