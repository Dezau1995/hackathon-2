import Groq from "groq-sdk";
import { useState } from "react";
import "./directmessage.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

function IAMessagerie() {
  const navigate = useNavigate();
  const [isReplying, setIsReplying] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("En attente");

  const groq = new Groq({
    apiKey: import.meta.env.VITE_AI_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function getGroqChatCompletion() {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama3-8b-8192",
    });
  }
  async function main() {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    setResponse(chatCompletion.choices[0]?.message?.content);
    setIsReplying(true);
  }

  const handleClick = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <main className="display-dm">
      <MdOutlineArrowBack className="icon-navigation" onClick={handleClick} />
      <h1>Hand2Hand IA</h1>
      <p className="ia-introduction">
        Découvrez notre nouvelle IA intégrée pour un mentorat révolutionnaire !
        Notre IA identifie vos besoins spécifiques et vous recommande les mentors les mieux adaptés. Profitez
        d'un suivi personnalisé en temps réel avec des ressources éducatives et
        des conseils sur mesure.
      </p>
      <section className="section-dm">
        <p>Bonjour, posez moi une question ?</p>
      </section>
      {isReplying && (
        <section className="section-dm">
          <p>{response}</p>
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
        <button
          type="button"
          label="Send"
          onClick={() => {
            main();
          }}
        >
          <BsFillSendFill />
        </button>
      </section>
    </main>
  );
}

export default IAMessagerie;
