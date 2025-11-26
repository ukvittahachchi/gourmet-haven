import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to specific section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-8'
    }`}>
      
      {/* Glassmorphism Container */}
      <nav className={`mx-auto max-w-7xl border rounded-xl px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? 'bg-white/5 border-white/10 shadow-xl'
          : 'bg-white/10 backdrop-blur-md border-white/20 shadow-2xl'
      }`}>
        
        {/* Logo Section - Also clickable to go home */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 focus:outline-none"
        >
          <Utensils className={`w-8 h-8 transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`} />
          <span className={`text-2xl tracking-widest font-light uppercase transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            GOURMENT HEVEN
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-medium text-lg">
          <button 
            onClick={() => scrollToSection('home')}
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-[#ea8c36]' : 'text-white hover:text-[#ea8c36]'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-[#ea8c36]' : 'text-white hover:text-[#ea8c36]'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-[#ea8c36]' : 'text-white hover:text-[#ea8c36]'
            }`}
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-[#ea8c36]' : 'text-white hover:text-[#ea8c36]'
            }`}
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection('reservations')}
            className="bg-[#ea8c36] hover:bg-[#d67d2a] text-white px-8 py-3 rounded-full font-medium transition-all shadow-md text-lg"
          >
            Reserve
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl flex flex-col gap-6 items-center z-50">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-800 text-xl font-medium w-full text-center"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-800 text-xl font-medium w-full text-center"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-gray-800 text-xl font-medium w-full text-center"
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-800 text-xl font-medium w-full text-center"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('reservations')}
            className="bg-[#ea8c36] text-white px-10 py-3 rounded-full w-full text-lg"
          >
            Reserve
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;