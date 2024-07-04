/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import "./formationCard.css";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

function FormationCard({ formation }) {
  return (
    <article className="card-body">
      <img
        src={formation.img}
        alt={formation.alt}
      />

      <section className="card-details">
        <section className="card-title">
          <h1>{formation.title}</h1>
          <button type="button" className="save-button">
            <BookmarkAdd />
          </button>
        </section>
        <p className="duration">Durée : {formation.weeks} semaines</p>
        <p>{formation.training}</p>
        <button className="submit-button" type="button">
          Voir la formation
        </button>
      </section>
    </article>
  );
}

export default FormationCard;
