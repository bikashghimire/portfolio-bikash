import React, { useContext, useState } from "react";
import { experiences, projects, skills, contact } from "../../portfolio";
import "./Navbar.css";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeContext } from "../../contexts/theme";

const Navbar = ({}) => {
  const [showNavList, setShowNavList] = useState(false);
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  const toggleNavList = () => {
    setShowNavList(!showNavList);
  };

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {experiences.length ? (
          <li className="nav__list-item">
            <a
              href="#experiences"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Experiences
            </a>
          </li>
        ) : null}
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
