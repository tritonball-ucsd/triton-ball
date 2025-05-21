import { useState, useEffect } from 'react';
import './hamburger.css';
import Hamburger from 'hamburger-react';
import { HashLink } from 'react-router-hash-link';

interface HamburgerMenuProps {
  children: React.ReactNode;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1207);
    };

    // initial load
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const menuLinks = [
    { to: '#about', label: 'About Us' },
    { to: '#ourwork', label: 'Projects' },
    { to: '#articles', label: 'Articles' },
    { to: '#calendar', label: 'Calendar' },
    { to: '#board', label: 'Board' },
  ];

  return (
    <div className="hamburger-container">
      {isMobile ? (
        <>
          <div className="nav-pill">
            <a className="tball" href="/">
              TBall
            </a>
            <div className="hamburger-button">
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} color="#fff" />
            </div>
          </div>

          {/* overlay menu */}
          {isOpen && (
            <div className="menu-overlay">
              <button className="close-button" onClick={() => setIsOpen(false)}>
                ✕
              </button>
              <div className="menu-content">
                <ul className="menu-items">
                  {menuLinks.map(({ to, label }) => (
                    <li key={to}>
                      <HashLink smooth to={to} onClick={() => setIsOpen(false)}>
                        {label}
                      </HashLink>
                    </li>
                  ))}
                </ul>
                <div className="menu-cta">
                  <button>Join Us</button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="desktop-menu">{children}</div>
      )}
    </div>
  );
};

export default HamburgerMenu;
