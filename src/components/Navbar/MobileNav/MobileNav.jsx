import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Fermer le menu mobile après le clic sur un élément du menu

    }
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
          <img className='logo' src='/Zeill0w-React-Portfolio/assets/images/logo.png' alt='' />

          <ul>
            <li>
              <a className='menu-item' onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection('CTF')}>CTF</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection('projects')}>Projects</a>
            </li>

            <button className='contact-btn' onClick={() => scrollToSection('contact')}>
              Contact Me!
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav