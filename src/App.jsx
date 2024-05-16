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
      setShowPage(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToHome = useNavigate();

  useEffect(() => {
    if (!showPage) {
      setTimeout(() => {
        navigateToHome("/home");
      }, 1000);
    }
  }, [showPage, navigateToHome]);

  return (
    <div>
      <div className={showPage ? "" : "fade-out"}>
        <Navbar />
        <Outlet />
        <div>
          <img className="vsc" src={vsc} alt="vsc" />
          <h1>Valériane Sudre Chevalier</h1>
        </div>
        <div className="card"></div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
