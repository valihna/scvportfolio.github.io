/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import aboutme from "../../assets/aboutme.jpg";
import projects from "../../assets/projects.png";
import skillFocus from "../../assets/skillFocus.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <div className="card-home">
        <Link to={`/about`} className="card-about">
          <img className="img-aboutme" src={aboutme} alt="aboutme" />
          <h3>About me</h3>
        </Link>
      </div>
      <div>
        <Link to={`/projects`} className="card-projects">
          <img className="img-projects" src={projects} alt="projects" />
          <h3>Projects</h3>
        </Link>
      </div>
      <div>
        <Link to={`/skills`} className="card-skills">
          <img className="img-skill" src={skillFocus} alt="skillFocus" />
          <h3>Skills and Focus</h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
