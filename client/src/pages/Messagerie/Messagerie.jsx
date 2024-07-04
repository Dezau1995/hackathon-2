import { BsChatDotsFill } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineAccessTime } from "react-icons/md";
import "./messagerie.css";

function Messagerie() {
  const dataMentors = useLoaderData();
  const navigate = useNavigate();

  const handleDm = () => navigate("/direct-message");

  return (
    <main className="display-messagerie">
      <BsChatDotsFill className="icon-messagerie" />
      <section className="section-messagerie">
        <article
          className="display-card-dm"
          onClick={handleDm}
          onKeyDown={handleDm}
          role="presentation"
        >
          <img
            src={dataMentors[0].img}
            alt="profile-avatar"
          />
          <section>
            <h3>{dataMentors[0].name}</h3>
            <p>Fils de la discussion ...</p>
          </section>
          <section className="timer-dm">
            <p>25 Min</p>
            <MdOutlineAccessTime />
          </section>
        </article>
        <article className="display-card-dm">
          <img
            src={dataMentors[1].img}
            alt="profile-avatar"
          />
          <section>
            <h3>{dataMentors[1].name}</h3>
            <p>Fils de la discussion ...</p>
          </section>
          <section className="timer-dm">
            <p>1 H</p>
            <MdOutlineAccessTime />
          </section>
        </article>
        <article className="display-card-dm">
          <img
            src={dataMentors[2].img}
            alt="profile-avatar"
          />
          <section>
            <h3>{dataMentors[2].name}</h3>
            <p>Fils de la discussion ...</p>
          </section>
          <section className="timer-dm">
            <p>3 J</p>
            <MdOutlineAccessTime />
          </section>
        </article>
        <article className="display-card-dm">
          <img
            src={dataMentors[3].img}
            alt="profile-avatar"
          />
          <section>
            <h3>{dataMentors[3].name}</h3>
            <p>Fils de la discussion ...</p>
          </section>
          <section className="timer-dm">
            <p>5 J</p>
            <MdOutlineAccessTime />
          </section>
        </article>
      </section>
    </main>
  );
}

export default Messagerie;
