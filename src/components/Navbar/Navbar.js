import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo / Title */}
            <div>
                <h1 className='nav-title'>Foodie Land</h1>
            </div>

            {/* Navigation Links */}
            <ul className='navbar-links'>
            <li><a href="/">Home</a></li> 
            <li><a href="/recipes">Recipes</a></li>
             <li><a href="/blog">Blog</a></li>
             <li><a href="/contact">Contact</a></li>
              <li><a href="/aboutus">About Us</a></li>
              </ul>

            {/* Social Media Icons */}
            <div className="social-icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
        </nav>
    );
}

export default Navbar;
