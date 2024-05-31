import React, { useState } from 'react';
import '../styles.css';
import logo from '../assets/logo.png';

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="menu-container">
            <li
              className={`menu-item ${selectedTab === 'Home' ? 'selected' : ''}`}
              onClick={() => {
                setActiveTab('Home');
                setSelectedTab('Home');
              }}
            >
              Home
            </li>
            <li
              className={`menu-item ${selectedTab === 'About' ? 'selected' : ''}`}
              onClick={() => {
                setActiveTab('About');
                setSelectedTab('About');
              }}
            >
              Sobre Nós
            </li>
            <li
              className={`menu-item ${selectedTab === 'Careers' ? 'selected' : ''}`}
              onClick={() => {
                setActiveTab('Careers');
                setSelectedTab('Careers');
              }}
            >
              Trabalhe Conosco
            </li>
            <li
              className={`menu-item ${selectedTab === 'Contact' ? 'selected' : ''}`}
              onClick={() => {
                setActiveTab('Contact');
                setSelectedTab('Contact');
              }}
            >
              Contato
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
