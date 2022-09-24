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
          My name is Sam Effa. I am a trained biosystems engineer who has always
          loved computers. As someone trained in solving difficult problems on
          complex systems, my skillset is perfect for software engineering. I
          have discovered that programming is my passion and I am going to make
          a career out of it.
        </p>

        <p className="About__paragraph">
          My main skills involve html5, css, react, javascript (ES6+), python,
          SQL, and express. Almost all my time outside my 9-5 has been spend
          learning and building software projects. I have been focusing lately
          on building responsive website but have also done data-centered work
          in python. I am a fast learner who loves solving hard problems and
          working hard. I also occasionally like to build my own games in python
          and javascript.
        </p>
      </div>
    </section>
  );
}

export default About;
