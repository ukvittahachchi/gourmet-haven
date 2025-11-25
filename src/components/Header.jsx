import React, { useState } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Increased py-6 to py-8 for more spacing from the top
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12">
      
      {/* Glassmorphism Container */}
      {/* Increased py-3 to py-5 for a taller/larger bar */}
      <nav className="mx-auto max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-8 py-5 flex items-center justify-between shadow-2xl">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* Changed color to text-white and increased size to w-8 h-8 */}
          <Utensils className="w-8 h-8 text-white" />
          {/* Changed text to white and increased text size to 2xl */}
          <span className="text-2xl tracking-widest font-light text-white uppercase">
            GOURMENT HEVEN
          </span>
        </div>

        {/* Desktop Navigation */}
        {/* Changed text color to white */}
        <div className="hidden md:flex items-center gap-10 font-medium text-white text-lg">
          <a href="#" className="hover:text-[#ea8c36] transition-colors">Home</a>
          <a href="#" className="hover:text-[#ea8c36] transition-colors">Contact</a>
          <a href="#" className="hover:text-[#ea8c36] transition-colors">About</a>
          <a href="#" className="hover:text-[#ea8c36] transition-colors">Menu</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          {/* Increased padding for a larger button */}
          <button className="bg-[#ea8c36] hover:bg-[#d67d2a] text-white px-8 py-3 rounded-full font-medium transition-all shadow-md text-lg">
            Reserve
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-32 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl flex flex-col gap-6 items-center z-50">
          {/* Note: Text here remains dark because the mobile background is white/glass */}
          <a href="#" className="text-gray-800 text-xl font-medium">Home</a>
          <a href="#" className="text-gray-800 text-xl font-medium">Contact</a>
          <a href="#" className="text-gray-800 text-xl font-medium">About</a>
          <a href="#" className="text-gray-800 text-xl font-medium">Menu</a>
          <button className="bg-[#ea8c36] text-white px-10 py-3 rounded-full w-full text-lg">
            Reserve
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;