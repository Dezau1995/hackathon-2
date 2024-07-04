/* eslint-disable react/prop-types */
import "./heroFormation.css";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

function HeroFormation({ formation }) {
  return (
    <article className="hero-card-body">
      <img
        src={formation.img}
        alt={formation.alt}
      />

      <section className="hero-card-details">
        <h1>{formation.title}</h1>
        <p className="duration">Durée : {formation.weeks} semaines</p>
        <p>{formation.training}</p>
        <section className="card-title">
          <button className="submit-button" type="submit">Voir la formation</button>
          <button type="button" className="save-button">
            <BookmarkAdd alt='sauvegarder la formation'/>
          </button>
        </section>
      </section>
    </article>
  );
}

export default HeroFormation;
