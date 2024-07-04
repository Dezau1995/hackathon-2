// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import "./createacount.css";

function Createacount() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/");
  };

  return (
    <section id="Createaccount">
      <h1 className="inputtitle">Inscription</h1>
      <p className="inputtext">*Champs obligatoire</p>
      <section className="createaccount">
        <input className="inputcreate" placeholder="Prénoms*" type="text" />
        <input className="inputcreate" placeholder="Nom*" type="text" />
        <input className="inputcreate" placeholder="E-mail*" type="email" />
        <input
          className="inputcreate"
          placeholder="Confirmez votre e-mail*"
          type="email"
        />
        <p className="inputtext">
          Votre mot de passe doit contenir au moins 8 caractères dont 2
          alphabétiques (majuscule, minuscule), 1 numérique et 1 caractère
          spécial
        </p>
        <input
          className="inputcreate"
          placeholder="Mot de passe*"
          type="password"
        />
        <input
          className="inputcreate"
          placeholder="Confirmez votre mot de passe*"
          type="password"
        />
        <input
          className="inputcreate"
          placeholder="Date de naissance"
          type="date"
        />
        <button type="button" onClick={handleSignUp}>
          S'inscrire
        </button>
      </section>
      <p className="inputtextinfo">Consultez nos mentions d'informations</p>
    </section>
  );
}

export default Createacount;
