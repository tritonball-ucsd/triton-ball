// import './styles/App.css'
import Nav from './Components/NavBar/Nav'
import Background from './Components/Background/background'
import OurWork from './Components/OurWork/ourwork';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import project1 from "./assets/project1.webp"
import project2 from "./assets/project2.webp"
import soccer from "./assets/soccer.png"
import basketball from "./assets/basketball.png"


function App() {
  return (
    <>
    <Nav/>
      <Router>
        <Background 
        imagePosition="right" 
        image={project1}
        player_image={soccer}
        title="WHO WE ARE" 
        text={["We’re a group of UCSD students passionate about the intersection between sports and data.", "Our aim is to give students a gateway into the world of sports analytics and to create opportunities to learn, collaborate, and contribute to real-world projects."]}/>
        <Background 
        imagePosition="left" 
        image={project2}
        player_image={basketball}
        title="WHAT WE DO" 
        text={["We work with UCSD’s athletic teams to turn data into insights. Our work spans sports from baseball to soccer to basketball, with projects ranging from short-term scouting to long-term player development and in-game strategy.", "Outside of team projects, we host workshops, discussions, and competitions to help students explore and grow in the field of sports analytics."]}/>
        <OurWork/>
        <Routes>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
