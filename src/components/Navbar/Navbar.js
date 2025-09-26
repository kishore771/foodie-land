import {React} from 'react'

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <h1 className='nav-title'>Foodie Land</h1>
            </div>
            <ul className='navbar-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/recipes">Recipes</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About Us</a></li>
            </ul>

            <div>
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            </nav>
    );
}

export default Navbar;