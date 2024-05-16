import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import vsc from "./assets/vsc.jpg";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(false); // Après 4 secondes, masquer la page
    }, 4000); // 4000 millisecondes = 4 secondes

    return () => clearTimeout(timer); // Nettoyer le timer lorsque le composant est démonté
  }, []); // Utiliser un tableau vide pour s'assurer que cet effet n'est exécuté qu'une seule fois

  const navigateToHome = useNavigate(); // Utiliser useNavigate pour naviguer vers la page d'accueil

  useEffect(() => {
    if (!showPage) {
      // Si la page est masquée, naviguer vers la page d'accueil
      setTimeout(() => {
        navigateToHome("/home");
      }, 1000); // Délai pour laisser le temps à l'animation de se terminer avant la redirection
    }
  }, [showPage, navigateToHome]);

  return (
    <div>
      <div className={showPage ? "" : "fade-out"}>
        <Navbar />
        <Outlet />
        <div>
          <img className="vsc" src={vsc} alt="vsc" />
        </div>
        <h1>Valériane Sudre Chevalier</h1>
        <div className="card">
          {/* <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p> */}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
