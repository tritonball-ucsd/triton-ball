// import './styles/App.css'
import Nav from './Components/NavBar/Nav'
import Background from './Components/Background/background'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Background 
        imagePosition="right" 
        image="https://placehold.co/500x500"
        title="WHO WE ARE" 
        text={["We’re a group of UCSD students passionate about the intersection between sports and data.", "Our aim is to give students a gateway into the world of sports analytics and to create opportunities to learn, collaborate, and contribute to real-world projects."]}/>
        <Background 
        imagePosition="left" 
        image="https://placehold.co/500x500"
        title="WHAT WE DO" 
        text={["We work with UCSD’s athletic teams to turn data into insights. Our work spans sports from baseball to soccer to basketball, with projects ranging from short-term scouting to long-term player development and in-game strategy.", "Outside of team projects, we host workshops, discussions, and competitions to help students explore and grow in the field of sports analytics."]}/>
        <Routes>
        </Routes>
      </Router>

    </>
  )
}

export default App
