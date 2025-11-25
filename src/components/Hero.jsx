// components/Hero.jsx
import React from 'react';
import heroImage from '../assets/hero.jpg';
const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroImage})` }}>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-white">
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none text-teal-400 drop-shadow-lg">
          GOURMENT HEVEN
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-wider text-white">
          Authentic Italian Cuisine Under the Moonlight
        </h2>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed">
          Experience the warmth of Italian hospitality with handcrafted dishes made from the 
          finest ingredients, served in an atmosphere of timeless elegance.
        </p>

        {/* Explore Button */}
        <div className="mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-lg px-10 py-4 rounded-full transition transform hover:scale-105 shadow-xl flex items-center space-x-3">
            <span>Explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;