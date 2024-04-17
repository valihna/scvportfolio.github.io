// import { Outlet } from "react-router-dom";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

function Home() {
  return (
    <div>
      Home
      <div>
        <About />
        {/* <Outlet /> */}
        <Projects />
        <Skills />
      </div>
      ;
    </div>
  );
}

export default Home;
