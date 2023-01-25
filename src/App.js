import { useState } from "react";
import "./App.css";
import FormText from "./components/FormText";
import NavBar from "./components/NavBar";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [modeTxt, setmodeTxt] = useState("Enable dark mode")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setmodeTxt("Disable dark mode");
      document.body.style.backgroundColor = "#343a40";
    }
    else {
      setMode("light");
      setmodeTxt("Enable dark mode");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <NavBar Title="Text Master" mode={mode} toggleMode={toggleMode} modeTxt={modeTxt} />
        <div className="container">
          <Routes>

            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<FormText heading="Enter text to analyze" mode={mode} />} />
            {/* <FormText heading="Enter text to analyze" mode={mode} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
