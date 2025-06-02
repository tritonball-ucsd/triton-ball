import "./nav.css";
import { useState, useEffect } from "react";
import HamburgerMenu from "./../Hamburger/HamburgerMenu";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const [scrolling, setScrolling] = useState(false);
  let scrollTimeout: number;

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setScrolling(false), 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header className={scrolling ? "hidden" : ""}>
      <HamburgerMenu>
        <ul className="navbar-links">
          <div className="grey-box">
            <li>
              <HashLink className="tball" smooth to="#root">
                <img src="/TB-logo1.svg" />
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about">
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#ourwork">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#articles">
                Articles
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#calendar">
                Calendar
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#board">
                Board
              </HashLink>
            </li>
            <button onClick={() => window.open("https://linktr.ee/tritonball", "_blank")}>
              Join Us
            </button>
          </div>
        </ul>
      </HamburgerMenu>
    </header>
  );
}

export default Nav;
