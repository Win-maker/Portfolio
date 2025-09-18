import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Layout from "./components/Layout/Layout"; 
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experiences/Experience";

function App() {
  return (
    <Router>
      <Routes>
   
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Home />
              <About />
              <Education/>
              <Experience/>
              <Projects/>
              <Contact/>
            </>
          } />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
