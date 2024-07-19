import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav>
            <div className="logo">
                <Link to="/" className={isActive('/')} onClick={handleLinkClick}>Home</Link>
            </div>
            <ul className={menuOpen ? 'nav-links nav-active' : 'nav-links'}>
                <li>
                    <Link to="/projects" className={isActive('/projects')} onClick={handleLinkClick}>Projects</Link>
                </li>
                <li>
                    <Link to="/experience" className={isActive('/experience')} onClick={handleLinkClick}>Experience</Link>
                </li>
                <li>
                    <Link to="/education" className={isActive('/education')} onClick={handleLinkClick}>Education</Link>
                </li>
                <li>
                    <Link to="/contact" className={isActive('/contact')} onClick={handleLinkClick}>Contact</Link>
                </li>
            </ul>
            <div className="burger" onClick={handleMenuClick}>
                <div className={menuOpen ? 'line1 line1-active' : 'line1'}></div>
                <div className={menuOpen ? 'line2 line2-active' : 'line2'}></div>
                <div className={menuOpen ? 'line3 line3-active' : 'line3'}></div>
            </div>
        </nav>
    );
}

export default Navbar;
