import constellation from "../../assets/constellation.png";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about">About Me</div>
      <div className="img-container">
        <img
          className="img-constellation"
          src={constellation}
          alt="constellation"
        />
      </div>
      <div className="paragraph">
        <p>
          I am curious by nature and passionate about finding innovative
          solutions to complex challenges. <br />
          {/* De nature curieuse, et passionnée, je suis continuellement motivée par la recherche de solutions innovantes pour résoudre des défis complexes. */}
          <br /> Passionate about the IT world, I decided to give a new impetus
          to my career and become a developer so that I could express my
          creativity, put my skills to good use and make a positive contribution
          to innovative projects. <br />
          {/* Passionnée par le monde informatique, j’ai pris la décision de donner un nouvel élan à ma carrière et devenir développeur afin de pouvoir exprimer ma créativité, mettre à profit mes compétences et contribuer positivement à des projets innovants. */}
          <br />
          My commitment to excellence and my desire to make a positive impact in
          everything I do are the driving forces behind my career. <br />
          {/*  Mon engagement envers l'excellence et mon désir d'apporter un impact positif dans tout ce que j'entreprends, sont les forces motrices qui guident ma carrière.*/}
        </p>
      </div>
    </div>
  );
}

export default About;
