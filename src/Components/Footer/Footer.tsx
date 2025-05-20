import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import logo2 from './../../assets/TB-logo2.svg'



import './footer.css'

function Footer() {
  return (
    <footer>
        <ul className='footer-links'>
            <img className="logo2" src={logo2} alt="" />
            <p className='footer-title'>Created by Data Science Student Society @ UC San Diego</p>
            <div className="footer-icons">
              <a href="https://www.instagram.com/tritonball_ucsd/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={'2rem'} />
              </a>
              <a href="https://discord.com/invite/JcTP2xXBej" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={'2rem'}/>
              </a>
                <FaMedium size={'2rem'}/>
            </div>
        </ul>
    </footer>
  )
}

export default Footer