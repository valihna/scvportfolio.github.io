import { Outlet } from "react-router-dom";
import vsc from "./assets/vsc.jpg";
import "./App.css";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
