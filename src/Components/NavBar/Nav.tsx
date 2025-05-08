import './nav.css'
import { useState, useEffect } from 'react';
import HamburgerMenu from './../Hamburger/HamburgerMenu';

function Nav() {
  const [scrolling, setScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setScrolling(false), 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header className={scrolling ? 'hidden' : ''}>
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
  );
}

export default Nav;
