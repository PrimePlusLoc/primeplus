import React from 'react';
import '../styles.css'; // Import the specific styles for Home
import backgroundImage from '../assets/frota2.jpeg'; // Adjust the path if necessary

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="content">
        <header>
          <h1>Bem-vindo à Prime Plus Locadora de veículos</h1>
          <p>Aqui você encontra os melhores veículos para alugar.</p>
        </header>
        {/* Other content or components */}
      </div>
    </div>
  );
};

export default Home;
