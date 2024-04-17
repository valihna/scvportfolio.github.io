import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import vsc from "./assets/vsc.jpg";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
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
  );
}

export default App;
