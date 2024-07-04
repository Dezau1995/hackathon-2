import { BsChatDotsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MdOutlineAccessTime } from "react-icons/md";
import "./messagerie.css";

function Messagerie() {
  // const dataMentors = useLoaderData();
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
            src="https://images.unsplash.com/photo-1514929781313-76fcbb2136b6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-avatar"
          />
          <section>
            <h3>Brian Boudrioux</h3>
            <p>Fils de la discussion ...</p>
          </section>
          <section className="timer-dm">
            <p>25 Min</p>
            <MdOutlineAccessTime />
          </section>
        </article>
        <article className="display-card-dm">
          <img
            src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-avatar"
          />
          <section>
            <h3>Celine Berthon</h3>
            <p>Fils de la discussion ...</p>
          </section>
          <section className="timer-dm">
            <p>1 H</p>
            <MdOutlineAccessTime />
          </section>
        </article>
        <article className="display-card-dm">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-avatar"
          />
          <section>
            <h3>Mickael Lambert</h3>
            <p>Fils de la discussion ...</p>
          </section>
          <section className="timer-dm">
            <p>3 J</p>
            <MdOutlineAccessTime />
          </section>
        </article>
        <article className="display-card-dm">
          <img
            src="https://images.unsplash.com/photo-1509460913899-515f1df34fea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-avatar"
          />
          <section>
            <h3>Rami GAALONI</h3>
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
