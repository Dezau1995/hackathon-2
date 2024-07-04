import first from "../../assets/images/image 45.jpg";
import mentor from "../../assets/images/Icone Dev.svg";
import devenir from "../../assets/images/Group 3.svg";
import "./Home.css";

function Home() {
  return (
    <div id="home">
      <h1>Hand 2 Hand</h1>
      <img src={first} alt="first" />
      <p>
        Avec le mentorat, dépassons nos frontières. Tout le monde n'a pas les
        mêmes chances, en fonction de son lieu de vie ou de son contexte
        socioculturel.{" "}
      </p>
      <h1>Etre Mentoré</h1>
      <section className="color-part">
        <img src={mentor} alt="Mentoré" className="mentor-img" />
        <h1>Recevoir en tant que Mentoré</h1>
        <p>
          Nous créons des solutions logicielles sur mesure adaptées à vos
          besoins spécifiques. De la conception à la mise en œuvre, nous vous
          accompagnons à chaque étape.
        </p>
        <button type="button" className="button-mentor">
          Découvrir
        </button>
      </section>
      <h1>Devenir un Mentor</h1>
      <section className="color-part">
        <img src={devenir} alt="devenir un mentor" className="img-become" />
        <h1>Transmettre et accompagner</h1>
        <p>
          Nous créons des solutions logicielles sur mesure adaptées à vos
          besoins spécifiques. De la conception à la mise en œuvre, nous vous
          accompagnons à chaque étape.
        </p>
        <button type="button" className="button-mentor">
          Découvrir
        </button>
      </section>
    </div>
  );
}

export default Home;
