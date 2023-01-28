import "./Styles/About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="about-titles">
        {" "}
        <h1 className="about-welcome">My Lil' React Portfolio</h1>
        <h2 className="about-subtitle">
          A small portfolio of features I've built in React.js.
        </h2>
      </div>
      <article className="about-text">
        <p>
          Ever built an app in React and needed a quick feature that you've done
          100 times? Instead of digging around for that specific project
          repository, I've compiled everything in one place for me AND you!
        </p>
        <p>
          This lil' portfolio is a central place for the demos with some fun
          styling.
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
            Lauren Powers
          </a>
          . I build front-end web applications that look cool. I have a lot of
          fun with React, but I love to learn new things.{" "}
          <a className="about-link" href="mailto:lauren.powers20@gmail.com">
            Let's collaborate!
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
