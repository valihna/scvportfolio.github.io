import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="cartes-home">
        <About />
        <Projects />
        <Skills />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
