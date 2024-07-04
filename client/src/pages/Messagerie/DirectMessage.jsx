// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./directmessage.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import Header from "../../components/Header/Header";

function DirectMessage() {
  const navigate = useNavigate();
  const [isReplying, setIsReplying] = useState(false);
  const [message, setMessage] = useState(null);

  const handleClick = () => {
    navigate("/messagerie");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <main className="display-dm">
      <Header />
      <MdOutlineArrowBack className="icon-navigation" onClick={handleClick} />
      <h1>Brian Boudrioux</h1>
      <section className="section-dm">
        <p>Bonjour, en quoi puis-je vous aider ?</p>
        <p className="date">Posté le {new Date().toLocaleDateString()}</p>
      </section>
      {isReplying && (
        <section className="section-dm">
          <p>{message}</p>
          <p className="date">Posté le {new Date().toLocaleDateString()}</p>
        </section>
      )}
      <section className="anwser-dm">
        <textarea
          name="chat"
          id="chat"
          placeholder="Votre message..."
          value={message}
          onChange={handleChange}
        />
        <button type="button" label="Send" onClick={() => setIsReplying(true)}>
          <BsFillSendFill />
        </button>
      </section>
    </main>
  );
}

export default DirectMessage;
