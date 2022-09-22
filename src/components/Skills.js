import React from "react";

function Skills() {
  return (
    <section className="Skills About" id="Skills">
      <div className="About__background">
        <div className="About__heading">
          <h4 className="About__heading__number">01.</h4>
          <h3 className="About__heading__title">Skills</h3>
          <div className="About__heading__line" />
        </div>
        <ul className="Skills__ul">
          <li className="Skills__li">
            <i class="devicon-html5-plain-wordmark colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-css3-plain-wordmark colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-sass-original colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-javascript-plain colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-react-original-wordmark colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-python-plain colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-git-plain colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-nodejs-plain colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-express-original colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-postgresql-plain colored"></i>
          </li>
          <li className="Skills__li">
            <i class="devicon-mysql-plain colored"></i>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
