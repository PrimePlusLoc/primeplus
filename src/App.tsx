import React from 'react';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('Home');

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
    <div>
      <Header setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default App;
