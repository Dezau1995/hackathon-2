import { useLoaderData } from "react-router-dom";
import "./directmessage.css";
import Header from "../../components/Header/Header";

function DirectMessage() {
  const mentor = useLoaderData();

  return (
    <main className="display-dm">
        <Header />
      <h1>{mentor[0].name}</h1>
      <section className="section-dm">
        <p>Salut, comment vas tu ?</p>
      </section>
      <section className="section-dm">
        <p>
          Oui merci, j'aurai besoin d'aide pour savoir de quels papier j'ai
          besoin pour m'inscrire à la formation pour être data analyst.
        </p>
      </section>
      <section className="anwser-dm">
        <textarea name="chat" id="chat" placeholder="Répondre ici .." />
        <button type="button">Répondre</button>
      </section>
    </main>
  );
}

export default DirectMessage;
