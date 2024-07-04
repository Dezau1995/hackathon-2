import imgProfile from "../../assets/photoprofil.png";
import "./Cardmentor.css";

function CardMentor() {
  return (
    <section id="cardmentor">
      <section className="imgmentor">
        <img className="imgprofile" src={imgProfile} alt="user" />
        <div className="name">
          <h1 >First Name Last name</h1>
          <p>Groupe</p>
        </div>
      </section>

      <article
        className="service
      "
      >
        <p className="titleservice">Service :</p>
      </article>
    </section>
  );
}

export default CardMentor;
