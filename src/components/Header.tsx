import React from 'react';
import '../styles.css'; 

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => setActiveTab('Home')}>Home</li>
          <li onClick={() => setActiveTab('About')}>Sobre Nós</li>
          <li onClick={() => setActiveTab('Careers')}>Trabalhe Conosco</li>
          <li onClick={() => setActiveTab('Contact')}>Nos Contate</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
