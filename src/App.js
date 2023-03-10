// import logo2 from "./images/react2.png";
import "./App.css";
import About from "./Screens/About";
import Features from "./Screens/Features";
import Home from "./Screens/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
  );
}

export default App;
