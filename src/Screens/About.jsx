import "./Styles/About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="about-titles">
        {" "}
        <h1 className="about-welcome">My React Portfolio</h1>
        <h2 className="about-subtitle">
          A small portfolio of features I've built in React.js.
        </h2>
      </div>
      <article className="about-text">
        <p>
          Ever built an app in React and needed a quick feature that you've done
          100 times? Instead of digging around for that specific project
          repository, I've compiled everything in one place.
        </p>
        <p>
          This portfolio is a central place for the demos with some fun and
          simple styling.
        </p>
        <p>
          {" "}
          About me: I'm{" "}
          <a
            href="https://laurenpowersportfolio.com/"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            Lauren Powers.
          </a>{" "}
          <a className="about-link" href="mailto:lauren.powers20@gmail.com">
            Let's work together.
          </a>
        </p>
        <div className="about-button">
          <Link link="true" to="/features">
            <button className="button-54">Back </button>
          </Link>
        </div>
      </article>
    </>
  );
}
export default About;
