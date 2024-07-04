import { useLoaderData } from "react-router-dom";
import './formation.css'
import FormationCard from "../../components/FormationCard/FormationCard";
import HeroFormation from "../../components/HeroFormation/HeroFormation";

function Formation() {
  const formations = useLoaderData();

  return (
    <main className="formation-main">
      <h1>Formation</h1>
      <HeroFormation formation={formations[9]} />
      {formations.map((formation) => (
        <FormationCard key={formation.id} formation={formation} />
      ))}
    </main>
  );
}

export default Formation;
