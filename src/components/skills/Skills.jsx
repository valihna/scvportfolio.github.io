/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import html from "../../assets/html.png";
import canva from "../../assets/canva.jpg";
import css from "../../assets/css.png";
import express from "../../assets/express.png";
import figma from "../../assets/figma.jpg";
import Git from "../../assets/Git.png";
import github from "../../assets/github.jpg";
import js from "../../assets/js.png";
import mysql from "../../assets/mysql.svg.png";
import node from "../../assets/node.svg.png";
import postman from "../../assets/postman.png";
import react from "../../assets/react.png";
import trello from "../../assets/trello.svg.png";
import vite from "../../assets/vite.jpg";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-focus">
      <div className="focus">
        <h1>
          Hi, my name is Valériane <br /> I am a web developer Fullstack
        </h1>
      </div>
      <div className="p">
        <p>
          Passionate about development, so I enjoy learning and training in new
          technologies.
          {/* Passionnée par le développement, j’aime
          apprendre et me former sur de nouvelles technologies. */}
          <br />
          My professional experiences have enabled me to acquire a range of
          skills and and skills that I'd like to put to good use in your
          company.
          {/* Mes expériences professionnelles m’ont permis d’acquérir un ensemble
          de compétences et d’aptitudes que je souhaite mettre à profit dans
          votre entreprise. */}
        </p>
      </div>
      <div className="stack-skills">
        <h4>Stack</h4>
        <div className="skills">
          <ul>
            <li>
              <img src={react} alt="react" />
            </li>
            <li>
              <img src={node} alt="node" />
            </li>
            <li>
              <img src={express} alt="express" />
            </li>
            <li>
              <img src={mysql} alt="mysql" />
            </li>
            <li>
              <img src={Git} alt="Git" />
            </li>
            <li>
              <img src={postman} alt="postman" />
            </li>
            <li>
              <img src={trello} alt="trello" />
            </li>
            <br /> <br />
            <li>
              <img src={html} alt="html" />
            </li>
            <li>
              <img src={css} alt="css" />
            </li>
            <li>
              <img src={js} alt="js" />
            </li>
            <li>
              <img src={vite} alt="vite" />
            </li>
            <li>
              <img src={github} alt="gitHub" />
            </li>
            <li>
              <img src={figma} alt="figma" />
            </li>
            <li>
              <img src={canva} alt="canva" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
