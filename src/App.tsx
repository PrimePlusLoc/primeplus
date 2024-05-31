import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import './styles.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Careers':
        return <Careers />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header setActiveTab={setActiveTab} />
      <div className="content" style={{ paddingTop: '70px' }}>
        {/* Adicione o padding superior correspondente à altura do cabeçalho */}
        <TransitionGroup>
          <CSSTransition key={activeTab} classNames="fade" timeout={300}>
            {renderContent()}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
