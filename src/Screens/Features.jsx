import "./Styles/Features.css";
import { Link } from "react-router-dom";
function Features() {
  return (
    <>
      <div classname="features-container">
        <div className="features-light-dark">
          <h2>Light/Dark Mode</h2>
          <a
            href="https://light-dark-mode-theme.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/laurenpowers20/light-dark-mode"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            GitHub Repo
          </a>
        </div>
        <footer>
          <div className="features-about-link">
            {" "}
            <Link className="features-link" link to="/about">
              {" "}
              About This Page
            </Link>
            <Link className="features-link" link to="/">
              {" "}
              Back
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Features;
