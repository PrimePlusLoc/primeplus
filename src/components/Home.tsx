import React from 'react';
import Slide from './Slider';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo à Prime Plus Locadora de veículos</h1>
      <p>Aqui você encontra os melhores carros para alugar.</p>
      <Slide />
    </div>
  );
};

export default Home;
