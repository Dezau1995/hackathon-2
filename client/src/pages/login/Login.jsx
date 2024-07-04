/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import "./createacount.css";

function Login() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/");
  };

  const handleCreateAccount = () => {
    navigate("/createacount");
  };

  return (
    <section id="Createaccount">
      <h1 className="inputtitle">Se connecter</h1>

      <section className="createaccount">
        <input className="inputcreate" placeholder="E-mail*" type="email" />

        <input
          className="inputcreate"
          placeholder="Mot de passe*"
          type="password"
        />

        <button type="button" onClick={handleSignUp}>
          Se connecter
        </button>
        <p>Mot de passe oubliée?</p>
        <p onClick={handleCreateAccount} style={{ cursor: "pointer" }}>
          Vous n'avez pas de compte ? Créer un compte
        </p>
      </section>
      <p className="inputtextinfo">Consultez nos mentions d'informations</p>
      <ul className="loginul">
        <li className="lilogin">Polite de confidentialité</li>
        <li className="lilogin">Condition d'utilisation</li>
        <li className="lilogin">Mention légales</li>
      </ul>
    </section>
  );
}

export default Login;
