import React from "react";
import logo from "./logo.png";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const openLink = () => {
    window.location.href =
      "https://drive.google.com/file/d/1gQ0TV9oWRbJV2_eYvNXwB8j1fO3H26O7/view?usp=drive_link";
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="JANEESH P" />{" "}
          {/* Moved the logo after the menu */}
          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("home")}>
                Hero
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("ac")}>
                Channel
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="contact-btn" onClick={openLink}>
            RESUME
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
