import { NavLink } from "react-router-dom";
import "./Header.css";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { LuUser2 } from "react-icons/lu";
import { useState } from "react";
import logo from "../../assets/images/logo/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div
        className={`burgerMenu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
        role="presentation"
      >
        {isOpen ? <RxCross1 size={30} /> : <GrMenu size={30} />}
      </div>
      {isOpen && (
        <nav className="burgerNav">
          <ul>
            <li>
              <a href="/">Accueil</a>
              <a href="/mentors">Mentors</a>
              <a href="/formations">Formations</a>
              <a href="/messagerie">Messagerie</a>
              <a href="/i-a">Hand2Hand AI</a>
            </li>
          </ul>
        </nav>
      )}
      <NavLink to="/createacount">
        <LuUser2 className="user-logo" />
      </NavLink>
    </div>
  );
}

export default Header;
