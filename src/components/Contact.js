import React from "react";

function Contact() {
  return (
    <section className="Contact" id="Contact">
      <div className="About__background">
        <div className="About__heading">
          <h4 className="About__heading__number">05.</h4>
          <h3 className="About__heading__title">Contact me!</h3>
          <div className="About__heading__line" />
        </div>
        <p className="About__paragraph">
          As someone looking for a remote position, I can work whenever and
          wherever you are located.
        </p>
        <a className="Contact__email" href="mailto:sameffa1@gmail.com">
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;