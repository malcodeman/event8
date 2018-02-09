import React from 'react';
import Input from './Input/Input';
import './style.css';

const Main = () => {
    return(
        <main className="main">
            <section className="text-section">
                <p className="paragraph-text">Welcome to event8.io</p>
                <h1 className="hero-text">Tropical summer</h1>
            </section>
            <section className="input-section">
                <Input placeholder="Enter your secret code" buttonText="BOOK"/>
            </section>
        </main>
    )
}

export default Main;