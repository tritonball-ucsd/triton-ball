import Nav from './Components/NavBar/Nav'
import Background from './Components/Background/background'
import OurWork from './Components/OurWork/ourwork';
import Board from './Components/Board/board';
import Testimonials from './Components/Testimonials/testimonials';
import Events from './Components/Events/events';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import project1 from "./assets/walking-img.webp"
import project2 from "./assets/dino-img.webp"
import soccer from "./assets/soccer.png"
import basketball from "./assets/basketball.png"
import Hero from './Components/Hero/Hero';
import ContactUs from './Components/ContactUs/ContactUs';
import Articles from './Components/Articles/Articles';
import { motion } from "framer-motion";


function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <section className='background-section'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Background
            imagePosition="right"
            image={project1}
            player_image={soccer}
            title="WHO WE ARE"
            text={[
              "We’re a group of UCSD students passionate about the intersection between sports and data.",
              "Our aim is to give students a gateway into the world of sports analytics and to create opportunities to learn, collaborate, and contribute to real-world projects."
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Background
            imagePosition="left"
            image={project2}
            player_image={basketball}
            title="WHAT WE DO"
            text={[
              "We work with UCSD’s athletic teams to turn data into insights. Our work spans sports from baseball to soccer to basketball, with projects ranging from short-term scouting to long-term player development and in-game strategy.",
              "Outside of team projects, we host workshops, discussions, and competitions to help students explore and grow in the field of sports analytics."
            ]}
          />
        </motion.div>
      </section>
      <OurWork />
      <Articles />
      <Events />
      <Routes>{/* Define routes here if needed */}</Routes>
      <Board />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
