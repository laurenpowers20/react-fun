// import logo2 from "./images/react2.png";
import "./App.css";
import About from "./Screens/About";
import Features from "./Screens/Features";
import Home from "./Screens/Home";
import SearchBar from "./Screens/SearchBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </>
  );
}

export default App;
