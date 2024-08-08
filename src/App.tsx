import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import AboutMe from './pages/Home/sections/About/AboutMe';
import Hero from './pages/Home/sections/Hero/hero';


const App = () => {


  return (
    <Router>
      
      <NavBar />
      <Hero />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
    
  )
}

export default App
