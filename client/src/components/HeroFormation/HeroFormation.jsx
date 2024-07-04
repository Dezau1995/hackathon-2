/* eslint-disable react/prop-types */
import "./heroFormation.css";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

function HeroFormation({ formation }) {
  return (
    <article className="hero-card-body">
      <img
        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="plusieurs personnes parlent autour d'une table"
      />

      <section className="hero-card-details">
        <h1>{formation.title}</h1>
        <p>Durée : {formation.duration_weeks} semaines</p>
        <ul>
          {formation.training.map((detail) => (
            <li key={formation.id}>{detail}</li>
          ))}
        </ul>
        <section className="card-title">
          <button className="submit-button" type="submit">Voir la formation</button>
          <button type="button">
            <BookmarkAdd alt='sauvegarder la formation'/>
          </button>
        </section>
      </section>
    </article>
  );
}

export default HeroFormation;
