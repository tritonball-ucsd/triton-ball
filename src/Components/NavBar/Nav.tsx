import './nav.css'
import React, { useEffect } from 'react';

function Nav() {
//   useEffect(() => {
//     const menuToggle = document.getElementById('menu-toggle');
//     const mobileNav = document.getElementById('mobile-nav');

//     // Toggle the menu when the hamburger icon is clicked
//     menuToggle.addEventListener('click', () => {
//       mobileNav.classList.toggle('show');
//     });

//     // Close the menu if you click anywhere outside the nav (not just the icon)
//     document.addEventListener('click', (e) => {
//       if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
//         mobileNav.classList.remove('show');
//       }
//     });

//     // Cleanup event listeners when the component is unmounted
//     return () => {
//       menuToggle.removeEventListener('click', () => {});
//       document.removeEventListener('click', () => {});
//     };
//   }, []);

  return (
    <>
      <header>
        <nav id="mobile-nav">
          <ul className='header-container'>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Board</a></li>
            <li><a href="#">Partners</a></li>
            <button><p className="logo-title">Join Us</p></button>
          </ul>
        </nav>
        {/* <button><p className="logo-title">Join Us</p></button> */}
        {/* <i className="ri-menu-fill" id="menu-toggle"></i> */}
      </header>
    </>
  );
}

export default Nav;