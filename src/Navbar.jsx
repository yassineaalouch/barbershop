import React, { useState } from 'react'
import Button from './Button'
import Toggle from './Toggle'
import './Navbar.css'

function Navbar({ language, setLanguage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function hideSideBar() {
        const navbarContainer = document.querySelector('.navbar-container');
        navbarContainer.classList.remove('show');
        const hamburgerIcon = document.querySelector('.menu-icon');
        hamburgerIcon.classList.remove('open');
    }

    return (
        <section id="navbar-section">
            <div className={isMenuOpen ? 'menu-icon open' : 'menu-icon'} onClick={handleMenuClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className={isMenuOpen ? 'show navbar-container' : 'navbar-container'}>
                <div className="navbar-menu">
                    <div className="navbar-menu-item" onClick={hideSideBar}>
                        <a href='#about-section'>{language === 'EN' ? "About" : "À propos"}</a>
                    </div>
                    <div className="navbar-menu-item prices-item" onClick={hideSideBar}>
                        <a href='#team-section'>{language === 'EN' ? "Team" : "Équipe"}</a>
                    </div>
                    <div className="navbar-menu-item" onClick={hideSideBar}>
                        <a href='#services-section'>{language === 'EN' ? "Prices" : "Tarifs"}</a>
                    </div>
                    <div className="navbar-menu-item" onClick={hideSideBar}>
                        <a href='#schedule-section'>{language === 'EN' ? "Contact" : "Contact"}</a>
                    </div>
                </div>

                <div className="navbar-cta">
                    <Button link="#calendar" class="btn small-btn" text={language === 'EN' ? "Book Now" : "Réserver"}/>
                    <Toggle language={language} setLanguage={setLanguage}/>
                </div>
            </div>
        </section>
    )
}

export default Navbar;
