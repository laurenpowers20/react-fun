import { Link } from "react-router-dom";
function Features() {
  return (
    <ul>
      <Link to="/about">
        {" "}
        <li>About This page</li>
      </Link>
      <li>
        <a
          href="https://light-dark-mode-theme.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Light/Dark Mode
        </a>
      </li>
      {/* <Link to="/searchbarfeature">
        <li>Search Bar</li>
      </Link>
      <li>Modal</li>
      <li>Photo Gallery</li> */}
    </ul>
  );
}

export default Features;
