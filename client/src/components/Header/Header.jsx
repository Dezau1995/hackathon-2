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
      <img src={logo} alt="logo" />
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
            </li>
          </ul>
        </nav>
      )}
      <LuUser2 className="user-logo" />
    </div>
  );
}

export default Header;
