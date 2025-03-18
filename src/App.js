import React from "react";
import Intro from "./components/Intro";
// import Experience from "./components/Experience";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        {/* <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits> */}
      </div>
    </div>
  );
}

export default App;
