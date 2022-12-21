import Header from "./components/Header";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Home /> 
      <About /> 
      <Skills /> 
      <Projects /> 
      <Contact /> 
    </div>
  );
}

export default App;
