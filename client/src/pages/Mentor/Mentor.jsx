import "./Mentor.css";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { LuCalendarClock } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import fakeMentors from "../../data";
import "react-datepicker/dist/react-datepicker.css";

function Mentor() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    const selectedMentor = fakeMentors.find((m) => m.id === parseInt(id, 10));
    setMentor(selectedMentor);
  }, [id]);

  if (!mentor) {
    return <p>Chargement...</p>;
  }
  const handleClick = () => {
    setStartDate(new Date());
    setConfirmation("");
  };

  const handleValidation = () => {
    setConfirmation(
      `Votre demande a bien été envoyée à ${mentor.name} pour le ${startDate.toLocaleString()} !`
    );
    setStartDate(null);
  };

  return (
    <div id="mentor">
      <NavLink to="/mentors" className="return">
        <p className="return-mentors">
          <FaArrowLeft className="return-arrow" />
          retour
        </p>
      </NavLink>
      <section className="header-mentor">
        <img src={mentor.img} alt="profil" />
        <h1>{mentor.name}</h1>
      </section>
      <section className="groupe-mentor">
        <h3 className="expertise">{mentor.job}</h3>
        <p>{mentor.age} ans</p>
        <p>{mentor.localisation}</p>
      </section>
      <button type="button" className="button-rdv" onClick={handleClick}>
        <LuCalendarClock className="calendar-icon" />
        Prendre RDV
      </button>
      {startDate && (
        <>
          <p className="instruction-date">
            Veuillez choisir la date et l'heure souhaitée
          </p>
          <section className="datepicker">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="calendar"
            />
            <button
              type="button"
              className="validate-button"
              onClick={handleValidation}
            >
              Valider
            </button>
          </section>
        </>
      )}
      {confirmation && (
        <section className="hide-message">
          <p className="confirmation">{confirmation}</p>
          <button type="button" className="hide-button">
            <BiMessageRounded className="message-icon" />
            Entrez en contact
          </button>
        </section>
      )}
      <h1 className="skills">Compétences :</h1>
      <section className="card-training">
        <ul className="liste-skills">
          <li>{mentor.skills1}</li>
          <li>{mentor.skills2}</li>
          <li>{mentor.skills3}</li>
          <li>{mentor.skills4}</li>
        </ul>
      </section>
    </div>
  );
}

export default Mentor;
