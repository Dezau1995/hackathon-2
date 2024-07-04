import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";
import Header from "./components/Header/Header";
import CardProfilMentor from "./components/cardProfilMentor/CardMentor";

function App() {
  return (
    <>
      <Header />
      <CardProfilMentor />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
