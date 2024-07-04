/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import "./formationCard.css";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

function FormationCard({ formation }) {
  return (
    <article className="card-body">
      <img
        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="plusieurs personnes parlent autour d'une table"
      />

      <section className="card-details">
        <section className="card-title">
          <h1>{formation.title}</h1>
          <button type="button">
            <BookmarkAdd />
          </button>
        </section>
        <p>Durée : {formation.duration_weeks} semaines</p>
        <ul>
          {formation.training.map((detail) => (
            <li key={formation.id}>{detail}</li>
          ))}
        </ul>
        <button className="submit-button" type="button">Voir la formation</button>
      </section>
    </article>
  );
}

export default FormationCard;
