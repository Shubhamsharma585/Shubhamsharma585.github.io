import React, { useState } from "react";
import "./Nav.css";
// import { Link as sendto} from 'react-scroll'
import { Link } from "react-scroll";

function Nav() {
  const [tog, setTog] = useState(false);

  function mobileMenu() {
    setTog((to) => !to);
  }

  return (
    <div className="nav">
      <div className="header">
        <div className="navbar">
          <a href="#" className="nav-logo"></a>

          <ul className={`nav-menu ${tog && `active`}`}>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true}>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="profs" spy={true} smooth={true}>
                <a className="nav-link">Proficiency</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} smooth={true}>
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="blog" spy={true} smooth={true}>
                <a className="nav-link">Blogs</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <div
            className={`hamburger ${tog && `active`}`}
            onClick={() => mobileMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
