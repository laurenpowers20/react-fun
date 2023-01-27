import logo1 from "../images/react.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="App-header">
        <h1 className="welcome">My Lil' React Portfolio</h1>
        <img src={logo1} className="App-logo" alt="logo" />
        <Link className="home-enter-link" to="/features">Enter</Link>
      </div>
    </>
  );
}

export default Home;
