import React from 'react';
import Icon from '../Icon/Icon';
import './style.css';

const Header = () => {
    return(
        <header className="header">
            <nav className="nav container">
                <div>
                    <a className="link">event8.io</a>
                </div>
                <div className="nav-right">
                    <Icon icon="menu-icon"/>
                    <a className="link">About us</a>
                    <a className="link">Events</a>
                    <a className="link">Packege</a>
                    <a className="link">Contact</a>
                    <span className="vertical-break"></span>
                    <a className="link">Login</a> 
                </div>
            </nav>           
        </header>
    )
}

export default Header;