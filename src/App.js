import {Routes, Route} from "react-router-dom"
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
      <Routes>
        <Route exact path='/' element={<Home />}></Route> 
        <Route path='/about' element={<About />}></Route> 
        <Route path='/skills' element={<Skills />}></Route> 
        <Route path='/projects' element={<Projects />}></Route> 
        <Route path='/contact' element={<Contact />}></Route> 
      </Routes>

    </div>
  );
}

export default App;
