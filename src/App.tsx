// import './styles/App.css'
import Nav from './Components/NavBar/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
        {/* <Route path="/about" element={<About/>} /> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
