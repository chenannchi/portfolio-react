import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home/Home'
import About from "./pages/About/About"
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'
import NavBar from "./components/NavBar/NavBar"
import ProjectDetails from './pages/Projects/ProjectDetails'

function App() {

  const [isLanguageEng, setIsLanguageEng] = useState(true);

  const handleLanguageChange = () => {
    setIsLanguageEng(!isLanguageEng);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setIsLanguageEng(storedLanguage === 'eng');
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('language', isLanguageEng ? 'eng' : 'mandarin');
  }, [isLanguageEng]);

  return (
    <>
      <NavBar handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />      <Routes>
        <Route path="/" element={< Home handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />} />
        <Route path="/about" element={< About handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />} />
        <Route path="/contact" element={< Contact handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />} />
        <Route path="/home" element={< Home handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />} />
        <Route path="/projects" element={< Projects handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />} />
        <Route path="/resume" element={< Resume handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />} />
        <Route path="/projects/:projectDetails" element={<ProjectDetails handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />} />
      </Routes>
    </>
  );
}

export default App;
