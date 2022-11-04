import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from "./pages/About/About"
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'
import NavBar from "./components/NavBar/NavBar"
import ProjectDetails from './pages/Projects/ProjectDetails'

function App() {
  return (
    <div id="page-container">
      <NavBar />
      <Routes>
        <Route path="/" element={< About />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/home" element={< Home />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/resume" element={< Resume />} />
        <Route path="/projects/:projectDetails" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
