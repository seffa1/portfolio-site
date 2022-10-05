import React from "react";

function Skills() {
  return (
    <section className="Skills SectionContainer" id="Skills">
      {/* Header */}
      <div className="SectionHeading">
        <h4 className="SectionHeading__number">02.</h4>
        <h3 className="SectionHeading__title">Skills</h3>
        <div className="SectionHeading__line" />
      </div>

      {/* Skills List */}
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
    </section>
  );
}

export default Skills;
