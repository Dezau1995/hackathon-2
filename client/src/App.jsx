import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
