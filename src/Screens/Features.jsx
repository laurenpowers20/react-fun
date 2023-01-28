import "./Styles/Features.css";
import { Link } from "react-router-dom";
function Features() {
  return (
    <>
      <div className="features-container">
        <div className="features-light-dark">
          <h2>Light/Dark Mode</h2>
          <button className="button-54">
            {" "}
            <a
              href="https://light-dark-mode-theme.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="features-link"
            >
              Live Demo
            </a>
          </button>
          <button className="button-54">
            <a
              href="https://github.com/laurenpowers20/light-dark-mode"
              target="_blank"
              rel="noreferrer"
              className="features-link"
            >
              GitHub Repo
            </a>
          </button>
        </div>

        <div className="features-about-link">
          <Link className="features-link" link to="/about">
            About This Page
          </Link>
        </div>
        <div className="features-back-button">
          <Link link to="/">
            {" "}
            <button className="button-54">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Features;
