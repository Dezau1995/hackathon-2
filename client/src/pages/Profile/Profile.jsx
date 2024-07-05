import { MdContactMail } from "react-icons/md";
import "./profile.css";
// import { useLoaderData } from "react-router-dom";

function Profile() {
  // const dataUser = useLoaderData();

  // const user = dataUser[0];

  return (
    <main>
      <section className="avatar-profile">
        <img src="https://www.oulfa.fr/temp/userimages/0030/917388/pic_1.jpg" alt="icon-avatar" className="icon-avatar"/>
      </section>
      <section className="section-user-profile">
        <h1>Monique Sanchez</h1>
        <article className="infos-user-profile">
          <section className="data-user-profile">
            <h3>Migrante</h3>
            <p>43 ans</p>
            <p>Paris</p>
          </section>
          <button type="button" label="contact">
            <MdContactMail className="icon-user-contact" />
          </button>
        </article>
      </section>
      <section className="section-users-needs">
        <h2>Besoins :</h2>
        <article className="users-needs">
            <ul>
              <li>Apprendre le français</li>
              <li>De l'aide pour faire son CV</li>
              <li>Trouver grâce à mes compétences une orientation personnelle</li>
              {/* <li>Apprendre le français</li> */}
            </ul>

        </article>
      </section>
      <section className="section-user-contacts">
        <h2>Contacts :</h2>
      </section>
    </main>
  );
}

export default Profile;
