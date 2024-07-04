import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <section id="footer">
      <img className="imgFooter" src={logo} alt="Logo" />
      <nav className="listfooter">
        <ul className="footer-list">
          <p
            className="titlefooter
        "
          >
            À PROPOS
          </p>
          <li className="lifooter">Contactez-nous</li>
          <li className="lifooter">Qui somme nous </li>
          <li className="lifooter">Profil</li>
        </ul>
        <ul className="footer-list">
          <p
            className="titlefooter
        "
          >
            RESSOURCES
          </p>
          <li className="lifooter">Le blog</li>
          <li className="lifooter">Aide et suppport</li>
          <li className="lifooter">Faq</li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;
