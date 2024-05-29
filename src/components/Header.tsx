import React, { useState } from 'react';
import '../styles.css';
import logo from '../assets/logo.png';

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  const [activeTabState, setActiveTabState] = useState('');

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    setActiveTabState(tab); // Atualiza o estado do item selecionado
  };

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="menu-container">
            <li className={`menu-item ${activeTabState === 'Home' ? 'selected' : ''}`} onClick={() => handleSetActiveTab('Home')}>Home</li>
            <li className={`menu-item ${activeTabState === 'About' ? 'selected' : ''}`} onClick={() => handleSetActiveTab('About')}>Sobre Nós</li>
            <li className={`menu-item ${activeTabState === 'Careers' ? 'selected' : ''}`} onClick={() => handleSetActiveTab('Careers')}>Trabalhe Conosco</li>
            <li className={`menu-item ${activeTabState === 'Contact' ? 'selected' : ''}`} onClick={() => handleSetActiveTab('Contact')}>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
