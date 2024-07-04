import "./Mentore.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moi from "../../assets/images/IMG_5476.svg";

const mentores = [
  {
    id: 1,
    img: moi,
    firstname: "Coline",
    lastname: "Grosso",
    age: 38,
    localisation: "Paris",
  },
];

function Mentore() {
  const [startDate, setStartDate] = useState(new Date());

  //   const handleClick = () => {
  //     setShowCalendar(true);
  //   };
  return (
    <div id="mentore">
      {mentores.map((mentore) => (
        <div key={mentore.id} className="header-mentore">
          <img src={mentore.img} alt="profil" />
          <h1>
            {mentore.firstname} {mentore.lastname}
          </h1>
          <div className="groupe-mentore">
            <h3>Groupe</h3>
            <p>{mentore.age}</p>
            <p>{mentore.localisation}</p>
          </div>
        </div>
      ))}
      <button type="button">Prendre RDV</button>
      <div style={{ height: "500px" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
    </div>
  );
}

export default Mentore;
