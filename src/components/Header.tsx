import React from 'react';
import '../styles.css';
import logo from '../assets/logo.png';

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="menu-container">
            <li className="menu-item" onClick={() => setActiveTab('Home')}>Home</li>
            <li className="menu-item" onClick={() => setActiveTab('About')}>Sobre Nós</li>
            <li className="menu-item" onClick={() => setActiveTab('Careers')}>Trabalhe Conosco</li>
            <li className="menu-item" onClick={() => setActiveTab('Contact')}>Nos Contate</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
