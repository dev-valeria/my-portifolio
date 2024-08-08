import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import AboutMe from './pages/Home/sections/About/AboutMe';
import Hero from './pages/Home/sections/Hero/hero';
import SkillsIcons from "./pages/Home/sections/SkillsIcons/SkillsIcons";

const App = () => {


  return (
    <Router>
      <NavBar />
      <Hero />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<SkillsIcons />} />
      </Routes>
    </Router>
    
  )
}

export default App
