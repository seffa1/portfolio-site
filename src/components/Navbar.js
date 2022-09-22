import React, { useState, useRef } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../resume.pdf";

function Navbar(props) {
  let direction = props.direction;

  // Get dom element
  const navbar__ul = useRef(null);
  const navbar__ref = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    const element = document.getElementById("About");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navbar__ref}
      className={`Navbar  ${
        direction === "up" ? "Navbar--up" : "Navbar--down"
      }`}
    >
      <h3 className="Navbar__icon spin animate delay-1">
        <FontAwesomeIcon icon={faHome} onClick={props.handleClickHome} />
      </h3>

      {/*Nav List */}
      <ul className="Navbar__ul" ref={navbar__ul}>
        <li className="Navbar__li spin animate">
          <h3 className="Navbar__li__link" onClick={props.handleClickAbout}>
            About
          </h3>
        </li>
        <li className="Navbar__li spin animate delay-1">
          <h3 className="Navbar__li__link" onClick={props.handleClickProjects}>
            Projects
          </h3>
        </li>
        <li className="Navbar__li spin animate delay-2">
          <h3 className="Navbar__li__link" onClick={props.handleClickContact}>
            Contact Me
          </h3>
        </li>
        <li className="Navbar__li spin animate delay-3">
          <a href={resume} download className="Navbar__li__link">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
