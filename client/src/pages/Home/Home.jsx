import mentore from "../../assets/images/Icone Dev.svg";
import devenir from "../../assets/images/Group 3.svg"
import "./Home.css";

function Home() {
  return (
    <div id="home">
      <h1>Hand 2 Hand</h1>
      <h3>Notre concept</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, illum
        quae suscipit laboriosam obcaecati, dolores iusto minima natus cum,
        cumque excepturi ratione. Laboriosam soluta veniam illo assumenda optio
        magnam? Quasi?
      </p>
      <h1>Etre Mentoré</h1>
      <div>
        <img src={mentore} alt="Mentoré" />
        <h1>Recevoir en tant que Mentoré</h1>
        <p>
          Nous créons des solutions logicielles sur mesure adaptées à vos
          besoins spécifiques. De la conception à la mise en œuvre, nous vous
          accompagnons à chaque étape.
        </p>
        <button type="button">Découvrir</button>
      </div>
      <h1>Devenir un Mentor</h1>
      <div>
        <img src={devenir} alt="devenir un mentor" className="img-become" />
        <h1>transmettre et accompagner</h1>
        <p>
          Nous créons des solutions logicielles sur mesure adaptées à vos
          besoins spécifiques. De la conception à la mise en œuvre, nous vous
          accompagnons à chaque étape.
        </p>
        <button type="button">Découvrir</button>
      </div>
    </div>
  );
}

export default Home;
