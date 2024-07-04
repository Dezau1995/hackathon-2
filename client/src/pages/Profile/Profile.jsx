import { RxAvatar } from "react-icons/rx";
import { MdContactMail } from "react-icons/md";
import "./profile.css";
import { useLoaderData } from "react-router-dom";

function Profile() {
  const dataUser = useLoaderData();

  const user = dataUser[0];

  return (
    <main>
      <section className="avatar-profile">
        <RxAvatar className="icon-avatar" />
      </section>
      <section className="section-user-profile">
        <h1>{user.nom.charAt(0).toUpperCase() + user.nom.slice(1)}</h1>
        <article className="infos-user-profile">
          <section className="data-user-profile">
            <h3>{user.group.charAt(0).toUpperCase() + user.group.slice(1)}</h3>
            <p>{user.age} ans</p>
            <p>{user.ville}</p>
          </section>
          <button type="button" label="contact">
            <MdContactMail className="icon-user-contact" />
          </button>
        </article>
      </section>
      <section className="section-users-needs">
        <h2>Besoins :</h2>
        <article className="users-needs">
          {user.besoins.map((needs) => (
            <ul key={needs.id}>
              <li>{needs.charAt(0).toUpperCase() + needs.slice(1)}</li>
            </ul>
          ))}
        </article>
      </section>
      <section className="section-user-contacts">
        <h2>Contacts :</h2>
      </section>
    </main>
  );
}

export default Profile;
