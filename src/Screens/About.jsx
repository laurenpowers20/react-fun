import "./Styles/About.css";
function About() {
  return (
    <>
      <div className="about-titles" style={{ textAlign: "center" }}>
        {" "}
        <h1 className="welcome">My Lil' React Portfolio</h1>
        <h2>A small portfolio of features I've built in React.js.</h2>
      </div>

      <article className="about-text">
        <p>
          Ever build an app in React and need a quick feature that you know
          you've done 100 times? Instead of digging around for that specific
          project repository, I've compliled everything in one place for myself
          and for you!
        </p>
        <p>
          This lil' portfolio is a central place for the demos with some fun
          styling. Checkout out the{" "}
          <a
            href="https://github.com/laurenpowers20/react-fun"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>{" "}
          here!
        </p>
        <p>Who are you?</p>
        <p>
          Oh me? I'm{" "}
          <a
            href="https://laurenpowersportfolio.com/"
            target="_blank"
            rel="noreferrer"
          >
            Lauren Powers
          </a>
          . I build front-end web applications that look cool. I have a lot of
          fun with React, but I love to learn new things.{" "}
          <a href="mailto:lauren.powers20@gmail.com">Let's collaborate!</a>
        </p>
      </article>
    </>
  );
}
export default About;
