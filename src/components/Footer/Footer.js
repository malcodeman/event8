import React from 'react';
import Icon from './Icon/Icon';
import './style.css';

const Footer = () => {
    return(
        <footer className="footer">
            <section className="footer-section">
                <Icon icon="facebook-icon"/>
                <Icon icon="instagram-icon"/>
                <Icon icon="twitter-icon"/>                
            </section>
        </footer>
    )
}

export default Footer;