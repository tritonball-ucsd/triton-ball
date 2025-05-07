import './nav.css'
import logo1 from './../../assets/TB-logo2.svg'

import HamburgerMenu from './../Hamburger/HamburgerMenu';


function Nav() {
  return (
    <>
      <header>
      {/* <img className='logo1' src={logo1} alt="" /> */}
      <HamburgerMenu>

        <ul className='navbar-links'>
          <div className="grey-box">
           <li ><a className='tball' href="/">TBall</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/calendar">Calendar</a></li>
            <li><a href="/board">Board</a></li>
            <li><a href="/partners">Partners</a></li>
            <button>Join Us</button>
          </div>
        </ul>
        </HamburgerMenu>
      </header>
    </>
  );
}

export default Nav;