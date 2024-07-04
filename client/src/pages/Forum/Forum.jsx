import './forum.css'

function Forum() {
  return (
    <main className="forum-main">
      <h1>Forum</h1>
      <article className="forum-article">
        <p>Sujet de la discussion</p>
        <h2>Comment trouver les papiers nécessaire pour m’inscrire à une formation ?</h2>
        <section className='forum-card-footer'>
            <p className='forum-participants'>15 participants</p>
            <button className='forum-button'>Participer</button>
        </section>
      </article>
      <article className="forum-article">
        <h2>Sujet de la discussion</h2>
        <p>5 conseils pour plaire aux recruteurs</p>
        <section className='forum-card-footer'>
            <p className='forum-participants'>204 participants</p>
            <button className='forum-button'>Participer</button>
        </section>
      </article>
      <article className="forum-article">
        <h2>Sujet de la discussion</h2>
        <p>Quelles astuces pour réussir un entretien d'embauche ?</p>
        <section className='forum-card-footer'>
            <p className='forum-participants'>7 participants</p>
            <button className='forum-button'>Participer</button>
        </section>
      </article>
      <button>Commencer une discussion</button>
    </main>
  );
}

export default Forum;
