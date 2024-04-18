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
          <br /> Passionate about the IT world, I decided to give a new impetus
          to my career and become a developer so that I could express my
          creativity, put my skills to good use and make a positive contribution
          to innovative projects. <br />
          <br />
          My commitment to excellence and my desire to make a positive impact in
          everything I do are the driving forces behind my career. <br />
        </p>
      </div>
    </div>
  );
}

export default About;
