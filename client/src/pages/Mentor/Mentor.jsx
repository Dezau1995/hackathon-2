import "./Mentor.css";
import { useState } from "react";
import { LuCalendarClock } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moi from "../../assets/images/IMG_5476.svg";

const mentors = {
  id: 1,
  img: moi,
  firstname: "Coline",
  lastname: "Grosso",
  age: 38,
  localisation: "Paris",
};

function Mentor() {
  const [startDate, setStartDate] = useState(null);
  const [confirmation, setConfirmation] = useState("");

  const handleClick = () => {
    setStartDate(new Date());
    setConfirmation("");
  };

  const handleValidation = () => {
    setConfirmation(
      `Votre demande a bien été envoyée à ${mentors.firstname} pour le ${startDate.toLocaleString()} !`
    );
    setStartDate(null);
  };

  return (
    <div id="mentor">
      <section className="header-mentor">
        <img src={mentors.img} alt="profil" />
        <h1>{mentors.firstname}</h1>
      </section>
      <section className="groupe-mentor">
        <h3>Groupe</h3>
        <p>{mentors.age}</p>
        <p>{mentors.localisation}</p>
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
      {confirmation && <p className="confirmation">{confirmation}</p>}
      <h1>Formations</h1>
      <section className="card-training">
        <card>Hello</card>
        <card>Bye</card>
      </section>
    </div>
  );
}

export default Mentor;
