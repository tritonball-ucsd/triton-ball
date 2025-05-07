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
            <p className='footer-title'>Created by Data Science Student Society</p>
            <div className="footer-icons">
                <FaInstagram size={'2rem'} />
                <FaDiscord size={'2rem'}/>
                <FaMedium size={'2rem'}/>
            </div>
        </ul>
    </footer>
  )
}

export default Footer