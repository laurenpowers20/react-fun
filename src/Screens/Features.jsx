import "./Styles/Features.css";
import about1 from "../images/about1.png";

import { Link } from "react-router-dom";
function Features() {
  return (
    <>
      <div className="features-container">
        <div className="features-div">
          <h2 className="features-titles">Light/Dark Mode</h2>{" "}
          <a
            href="https://light-dark-mode-theme.netlify.app/"
            rel="noreferrer"
            className="features-link"
          >
            {" "}
            <button className="button-54">Demo</button>
          </a>
          <a
            href="https://github.com/laurenpowers20/light-dark-mode"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            <button className="button-54"> GitHub Repo </button>
          </a>
        </div>

        <div className="features-div">
          <h2 className="features-titles">Gallery w/ Modal</h2>{" "}
          <a
            href="https://react-photo-gallery-lauren.netlify.app/"
            rel="noreferrer"
            className="features-link"
          >
            {" "}
            <button className="button-54">Demo </button>
          </a>
          <a
            href="https://github.com/laurenpowers20/photo-gallery-react"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            <button className="button-54"> GitHub Repo </button>
          </a>
        </div>

        <div className="features-div">
          <h2 className="features-titles">Simple Slide Show</h2>{" "}
          <a
            href="https://curious-cajeta-71b06a.netlify.app/"
            rel="noreferrer"
            className="features-link"
          >
            {" "}
            <button className="button-54">Demo </button>
          </a>
          <a
            href="https://github.com/laurenpowers20/react-slide-show"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            <button className="button-54"> GitHub Repo </button>
          </a>
        </div>

        <div className="features-div">
          <h2 className="features-titles">Hamburger Menu</h2>{" "}
          <a
            href="https://rococo-creponne-b55eb4.netlify.app/"
            rel="noreferrer"
            className="features-link"
          >
            {" "}
            <button className="button-54">Demo </button>
          </a>
          <a
            href="https://github.com/laurenpowers20/hambuger-menu"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            <button className="button-54"> GitHub Repo </button>
          </a>
        </div>

        <div className="features-div">
          <h2 className="features-titles">Search Bar</h2>{" "}
          <a
            href="https://preeminent-chimera-ed9406.netlify.app/"
            rel="noreferrer"
            className="features-link"
          >
            {" "}
            <button className="button-54">Demo </button>
          </a>
          <a
            href="https://github.com/laurenpowers20/search-bar"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            <button className="button-54"> GitHub Repo </button>
          </a>
        </div>

        <div className="features-div">
          <h2 className="features-titles">Form</h2>{" "}
          <a
            href="https://pizza-form-react.netlify.app/"
            rel="noreferrer"
            className="features-link"
          >
            {" "}
            <button className="button-54">Demo </button>
          </a>
          <a
            href="https://github.com/laurenpowers20/pizza-form"
            target="_blank"
            rel="noreferrer"
            className="features-link"
          >
            <button className="button-54"> GitHub Repo </button>
          </a>
        </div>
      </div>
      <div className="features-back-button">
        <Link link to="/">
          {" "}
          <button className="button-54">Back</button>
        </Link>
      </div>
      <footer>
        <div className="features-about-link">
          <Link className="features-link" link to="/about">
            {" "}
            <div style={{ padding: "15px" }}>
              <img src={about1} style={{ height: "50px" }} alt="about icon" />
            </div>
            About This Page
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Features;
