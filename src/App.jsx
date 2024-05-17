import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import vsc from "./assets/vsc.jpg";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {showIntro ? (
        <div className="intro">
          <img className="vsc" src={vsc} alt="vsc" />
          <h1>Valériane Sudre Chevalier</h1>
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
