import linkedIn from "../../assets/linkedIn.png";
import github from "../../assets/github.jpg";
import gmail from "../../assets/gmail.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="https://linkedin.com/in/valeriane-sudre-chevalier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" src={linkedIn} alt="linkedIn" />
        </a>
        <a
          href="https://github.com/valihna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" src={github} alt="github" />
        </a>
        <a
        // href="https://www.gmail.com/lorealparis/?hl=fr"
        // target="_blank"
        // rel="noopener noreferrer"
        >
          <img className="img" src={gmail} alt="gmail" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
