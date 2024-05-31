import React from 'react';
import Slide from './Slider';
import './Home.css';  // Import the CSS file

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Bem-vindo à Prime Plus Locadora de veículos</h1>
        <p>Aqui você encontra os melhores carros para alugar.</p>
      </header>
      <Slide />
    </div>
  );
};

export default Home;
