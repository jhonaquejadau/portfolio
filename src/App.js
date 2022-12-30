import { Routes, Route  } from "react-router-dom";

import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { CvDeveloper } from "./pages/Resume";

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/resume" element={<CvDeveloper/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
