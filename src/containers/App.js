import React from 'react';
import './style.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <div className="grid">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
