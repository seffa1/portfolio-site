import React from "react";

function Contact() {
  return (
    <section className="Contact" id="Contact">
      <div className="About__background">
        <div className="About__heading">
          <h4 className="About__heading__number">05.</h4>
          <h3 className="About__heading__title">Contact me</h3>
          <div className="About__heading__line" />
        </div>
        <p className="About__paragraph">
          I am currently seeking a remote position in web development. Please
          feel free to contact me via email below.
        </p>

        <div className="Contact__container">
          <a className="Contact__email" href="mailto:sameffa1@gmail.com">
            Email Me
          </a>

          <a
            className="Contact__email"
            href="https://github.com/seffa1"
            target="_blank"
          >
            <i class="devicon-github-original Contact__logo"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
