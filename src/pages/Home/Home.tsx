import NavBar from "../../components/NavBar/NavBar"
import AboutMe from "./sections/About/AboutMe"
import Hero from "./sections/Hero/hero"
import SkillsIcons from "./sections/SkillsIcons/SkillsIcons"

const  Home = () => {

  return (
    <>
       <NavBar/>
      <Hero />
      <AboutMe />
      <SkillsIcons />
     
    </>
  )
}

export default Home