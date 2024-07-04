
import "./formation.css";
import FormationCard from "../../components/FormationCard/FormationCard";
import HeroFormation from "../../components/HeroFormation/HeroFormation";

function Formation() {
  const heroFormation = 
    {
      id: 1,
      title: "Bases de l'informatique",
      weeks: "6",
      training: "Cette formation est conçue pour aider les personnes éloignées de l'emploi à acquérir des compétences numériques essentielles. Les participants apprendront à utiliser les outils bureautiques, à naviguer sur Internet en toute sécurité, et à gérer des fichiers et dossiers. Des ateliers pratiques permettront de développer des compétences en communication numérique et de renforcer leur employabilité.",
      img: "https://plus.unsplash.com/premium_photo-1691708773629-94aeedf48627?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "une personne travaille sur ordinateur"
    }

  const formations = [
    {
      id: 1,
      title: "Adaptabilite a un nouvel environnement de travail",
      weeks: "8",
      training: "Cette formation vous aide à intégrer efficacement un nouvel environnement professionnel. Elle couvre la gestion du stress, les techniques de flexibilité, et les compétences interpersonnelles nécessaires pour s'adapter rapidement aux changements.",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "plusieurs personnes parlent autour d'une table"
    
    },
    {
      id: 2,
      title: "Techniques de communication interculturelle",
      weeks: "3",
      training: "Les participants apprendront à comprendre et à respecter les différences culturelles, à améliorer leurs techniques de communication verbale et non verbale, et à résoudre les conflits interculturels.",
      img: "https://plus.unsplash.com/premium_photo-1661574797870-bfad3de9b158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJjdWx0dXJhbCUyMGNvbW11bmljYXRpb258ZW58MHx8MHx8fDA%3D",
      alt: "deux personnes qui discutent"
    },
    {
      id: 3,
      title: "Economie familiale",
      weeks: "4",
      training: "Apprenez à établir et à suivre un budget, à planifier des économies, à gérer les dettes, et à faire des choix financiers avisés pour assurer la stabilité économique de leur foyer.",
      img: "https://plus.unsplash.com/premium_photo-1661391195329-c6d70b8645e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVkZ2V0JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
      alt: "une main qui pointe des graphiques en travaillant sur une tablette"
    },
  ];

  return (
    <main className="formation-main">
      <h1>Formation à la une</h1>
      <HeroFormation formation={heroFormation} />
      <h2>Formations</h2>
      {formations.map((formation) => (
        <FormationCard key={formation.id} formation={formation} />
      ))}
    </main>
  );
}

export default Formation;
