import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Fermer le menu mobile après le clic sur un élément du menu
            setOpenMenu(false);
        }
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <a href="home"></a>
                <div className="nav-content">
                    <div className="logo">
                        <img src="/Zeill0w-React-Portfolio/assets/images/logo.png" alt="" width="250px" height="auto" />
                    </div>

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

                    <button className='menu-btn' onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "1rem"}}
                        >
                            {openMenu ? "X" : "Menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
