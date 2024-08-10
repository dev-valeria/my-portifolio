import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import AboutMe from './pages/Home/sections/About/AboutMe';
import Hero from './pages/Home/sections/Hero/hero';
import SkillsIcons from "./pages/Home/sections/SkillsIcons/SkillsIcons";
import Projects from './pages/Home/sections/Projects/projects';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

const App = () => {


  return (
    <Router>
    <I18nextProvider i18n={i18n}>
      <NavBar />
      <Hero />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<SkillsIcons />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
            </I18nextProvider>
    </Router>
    
  )
}

export default App
