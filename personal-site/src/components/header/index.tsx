import "./index.css";
import { NavLink } from "react-router-dom";

/**
 * Header Component that renders submenus and title
 */
const Header = () => {
  return (
    <div id="header" className="header">
      <div className="left-area">
        <h1> Marco's Website</h1>
      </div>
      <div className="center-area">
        <NavLink
          to="/"
          id="landing-page"
          className={({ isActive }) =>
            `menu_button ${isActive ? "menu_selected" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          id="projects-page"
          className={({ isActive }) =>
            `menu_button ${isActive ? "menu_selected" : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          id="contact-page"
          className={({ isActive }) =>
            `menu_button ${isActive ? "menu_selected" : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
