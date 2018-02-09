import React from 'react';
import './style.css';

const Header = () => {
    return(
        <header className="header">
            <nav className="nav container">
                <div>
                    <a className="link" href="#">event8.io</a>
                </div>
                <div>
                    <a className="link" href="#">About us</a>
                    <a className="link" href="#">Events</a>
                    <a className="link" href="#">Packege</a>
                    <a className="link" href="#">Contact</a>
                    <span>|</span>
                    <a className="link" href="#">Login</a> 
                </div>
            </nav>           
        </header>
    )
}

export default Header;