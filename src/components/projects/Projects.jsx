/* eslint-disable no-unused-vars */
import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import git from "../../assets/Git.png";
import github from "../../assets/github.jpg";
import react from "../../assets/react.png";
import express from "../../assets/express.png";
import mysql from "../../assets/mysql.svg.png";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <br />
      <div className="global-projects">
        <div className="project-cards">
          <div className="project-name">
            <h3>Eating Nam Nam</h3>
          </div>
          <div className="imageSite">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/wdYOhhNVyps"
              title="Eating Nam Nam Video"
              frameBorder="0"
              allowfullscreen
            ></iframe>
            <div className="langages-outils">
              <h3> Stack </h3>
              <div className="stack">
                <li>
                  <img src={react} alt="Logo React" />
                </li>
                <li>
                  <img src={express} alt="Logo Express" />
                </li>
                <li>
                  <img src={git} alt="Logo Git" />
                </li>
                <li>
                  <img src={html} alt="Logo HTML" />
                </li>
                <li>
                  <img src={css} alt="Logo css" />
                </li>
                <li>
                  <img src={js} alt="Logo JavaScript" />
                </li>
                <li>
                  <img src={mysql} alt="Logo MySQL" />
                </li>
                <li>
                  <img src={github} alt="Logo GitHub" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="project-cards">
          <div className="project-name">
            <h3>Cent Pression</h3>
          </div>
          <div className="imageSite">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/MbkW-HWiLns"
              title="Cent Pression Video"
              frameBorder="0"
              allowfullscreen
            ></iframe>
            <div className="langages-outils">
              <h3> Stack </h3>
              <div className="stack">
                <li>
                  <img src={react} alt="Logo React" />
                </li>
                <li>
                  <img src={express} alt="Logo Express" />
                </li>
                <li>
                  <img src={git} alt="Logo Git" />
                </li>
                <li>
                  <img src={html} alt="Logo HTML" />
                </li>
                <li>
                  <img src={css} alt="Logo css" />
                </li>
                <li>
                  <img src={js} alt="Logo JavaScript" />
                </li>
                <li>
                  <img src={mysql} alt="Logo MySQL" />
                </li>
                <li>
                  <img src={github} alt="Logo GitHub" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="project-cards">
          <div className="project-name">
            <h3>Hakathon Loréal</h3>
          </div>
          <div className="imageSite">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/HTD-Qbt0Gok"
              title="Hakathon Loréal Video"
              frameBorder="0"
              allowfullscreen
            ></iframe>
            <div className="langages-outils">
              <h3> Stack </h3>
              <div className="stack">
                <li>
                  <img src={react} alt="Logo React" />
                </li>
                <li>
                  <img src={express} alt="Logo Express" />
                </li>
                <li>
                  <img src={git} alt="Logo Git" />
                </li>
                <li>
                  <img src={html} alt="Logo HTML" />
                </li>
                <li>
                  <img src={css} alt="Logo css" />
                </li>
                <li>
                  <img src={js} alt="Logo JavaScript" />
                </li>
                <li>
                  <img src={mysql} alt="Logo MySQL" />
                </li>
                <li>
                  <img src={github} alt="Logo GitHub" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="project-cards">
          <div className="project-name">
            <h3>Quiz Biarritz</h3>
          </div>
          <div className="imageSite">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5klnBXn97fU"
              title="Quiz Biarritz Video"
              frameBorder="0"
              allowfullscreen
            ></iframe>
            <div className="langages-outils">
              <h3> Stack </h3>
              <div className="stack">
                <li>
                  <img src={react} alt="Logo React" />
                </li>
                <li>
                  <img src={express} alt="Logo Express" />
                </li>
                <li>
                  <img src={git} alt="Logo Git" />
                </li>
                <li>
                  <img src={html} alt="Logo HTML" />
                </li>
                <li>
                  <img src={css} alt="Logo css" />
                </li>
                <li>
                  <img src={js} alt="Logo JavaScript" />
                </li>
                <li>
                  <img src={github} alt="Logo GitHub" />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
