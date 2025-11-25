import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <InfoSection />
      <MenuSection />
      <Footer />
    </div>
  );
}

export default App;
